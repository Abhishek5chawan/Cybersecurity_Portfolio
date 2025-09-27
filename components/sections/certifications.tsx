import Image from "next/image"

const certs = [
  { name: "Cisco Cyber Threat Management ", logo: "/download.jpg" },
  { name: "Cisco Introduction to Cybersecurity", logo: "/download.png" },
]

export function Certifications() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Certifications</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {certs.map((c) => (
          <li key={c.name} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
            <Image src={c.logo || "/placeholder.svg"} alt={`${c.name} logo`} width={40} height={40} />
            <span className="text-sm">{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
