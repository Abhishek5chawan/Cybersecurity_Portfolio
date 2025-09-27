import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          title="SOC & Security Tools"
          items={["Splunk", "Wireshark", "Nmap", "Burp Suite", "IDS/IPS basics"]}
        />
        <SkillCard
          title="Cybersecurity Concepts"
          items={["CIA Triad", "OWASP Top 10", "Incident Response", "Malware Analysis", "Threat Hunting"]}
        />
        <SkillCard title="Programming & Automation" items={["Python (python-nmap, scapy)", "Bash scripting", "C/C++"]} />
        <SkillCard title="Web Development (bonus)" items={["MERN Stack (MongoDB, Express.js, React.js, Node.js)"]} />
        <SkillCard
          title="Operating Systems & Networking"
          items={["Linux administration", "TCP/IP", "DNS", "VPN", "Firewalls"]}
        />
      </div>
    </div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
