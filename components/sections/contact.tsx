import { ContactForm } from "@/components/sections/contact-form"

export function Contact() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Leave your details and I&apos;ll get back to you. You can also connect on LinkedIn and download my resume below.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ContactForm />
        </div>
        <aside className="rounded-lg border border-border p-5 bg-card space-y-3">
          <a className="underline" href="https://www.linkedin.com/in/abhishek5chawan" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
          <div>
            <a className="underline" href="/ABHISHEK_CYBERSECURITY_SOC_ANALYST_RESUME.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume (PDF)
            </a>
            <p className="text-xs text-muted-foreground mt-1">Replace with your real resume when ready.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
