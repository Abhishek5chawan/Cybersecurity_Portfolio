import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "SIEM Log Analysis & Alerting (Splunk Project)",
    desc: "Built Splunk dashboards to analyze Windows Event Logs (failed logins, PowerShell execution) and Apache/Nginx logs. Implemented brute force attack detection with automated alerts for incident response.",
    repo: "https://github.com/Abhishek5chawan/SIEM-Log-Analysis-Alerting-Splunk-Project-",
  },
  {
    title: "Mini Incident Response Lab (Windows Logs + Python)",
    desc: "Simulated brute force attacks in a Windows VM with Sysmon, analyzed logs using Splunk and Python (subprocess & scapy). Prepared a 2-page Incident Report documenting Indicators of Compromise (IoCs), detection methods, and remediation steps.",
    repo: "https://github.com/Abhishek5chawan/Mini-Incident-Response-Lab-Windows-Logs-Python-",
  }
]

export function Projects() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <a className="text-sm underline" href={p.repo} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
