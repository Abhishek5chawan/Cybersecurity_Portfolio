import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"
import nodemailer from "nodemailer"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidLinkedIn(url: string) {
  return !url || /^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(url)
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, linkedin, message } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }
    if (!isValidLinkedIn(linkedin || "")) {
      return NextResponse.json({ error: "LinkedIn URL must be a valid linkedin.com URL." }, { status: 400 })
    }

    const db = await getDb()
    const collection = db.collection("contacts")
    const now = new Date()

    const forwardedFor = request.headers.get("x-forwarded-for") || ""
    const userAgent = request.headers.get("user-agent") || ""

    const doc = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: String(phone || "").slice(0, 100),
      linkedin: String(linkedin || "").slice(0, 300),
      message: String(message || "").slice(0, 5000),
      createdAt: now,
      meta: {
        forwardedFor,
        userAgent: userAgent.slice(0, 400),
      },
    }

    await collection.insertOne(doc)

    // Attempt to send emails if SMTP is configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, OWNER_EMAIL } = process.env

    if (SMTP_HOST && SMTP_PORT && SMTP_FROM && OWNER_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
      })

      const ownerHtml = `
        <h2>New Portfolio Contact</h2>
        <ul>
          <li><strong>Name:</strong> ${doc.name}</li>
          <li><strong>Email:</strong> ${doc.email}</li>
          <li><strong>Phone:</strong> ${doc.phone}</li>
          <li><strong>LinkedIn:</strong> ${doc.linkedin}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <pre>${(doc.message || "").replace(/[<>&]/g, (s) => (({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }) as any)[s])}</pre>
        <hr />
        <small>UA: ${doc.meta.userAgent}</small>
      `

      const visitorText = `Hi ${doc.name},

Thanks for reaching out! I received your message and will get back to you soon.

Best,
Abhishek Chawan
`

      // Send to owner
      await transporter.sendMail({
        from: SMTP_FROM,
        to: OWNER_EMAIL,
        subject: `New contact from ${doc.name}`,
        html: ownerHtml,
      })

      // Thank-you to visitor (only if we can auth)
      if (SMTP_USER && SMTP_PASS) {
        await transporter.sendMail({
          from: SMTP_FROM,
          to: doc.email,
          subject: "Thanks for reaching out!",
          text: visitorText,
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("[v0] Contact API error:", err?.message)
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 })
  }
}
