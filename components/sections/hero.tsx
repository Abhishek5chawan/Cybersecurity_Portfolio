import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-balance">Abhishek Chawan — SOC Analyst</h1>
        <p className="text-muted-foreground text-pretty">
          Highly motivated BCA graduate with strong foundations in cybersecurity, Linux, networking, and incident response with
hands-on labs. Skilled in Splunk, Python (nmap, scapy), and security tools. Seeking an entry-level SOC Analyst role to
apply analytical and technical skills in monitoring, threat detection, and incident response.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button>View Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="outline">Get in Touch</Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://www.linkedin.com/in/abhishek5chawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a
            href="https://github.com/Abhishek5chawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          {/* <a href="mailto:you@example.com" className="inline-flex" aria-label="Email me" title="Email">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a href="tel:+1234567890" className="inline-flex" aria-label="Call me" title="Phone">
            <Button variant="outline" size="icon">
              <Phone className="h-4 w-4" />
              <span className="sr-only">Phone</span>
            </Button>
          </a> */}
          <a
  href="https://my-portfolio-blue-beta-43.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex"
  title="MERN Portfolio"
>
  <Button variant="outline">
    MERN Portfolio
  </Button>
</a>

          <label
  className="inline-flex items-center justify-center rounded-2xl border border-input bg-background p-2 shadow-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
  title="Email"
  aria-label="Email me"
>
  <a href="mailto:abhishekchawan9072@gmail.com" className="flex items-center gap-2">
    <Mail className="h-4 w-4" />
    <span className="text-sm">abhishekchawan9072@gmail.com</span>
  </a>
</label>
<label
  className="inline-flex items-center justify-center rounded-2xl border border-input bg-background p-2 shadow-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
  title="Phone"
  aria-label="Call me"
>
  <a href="tel:+918951059470" className="flex items-center gap-2" >
    <Phone className="h-4 w-4" />
    <span className="text-sm">+91 8951059470</span>
  </a>
</label>

          <a
            href="/ABHISHEK_CYBERSECURITY_SOC_ANALYST_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="Download resume"
            title="Download resume"
          >
            <Button variant="outline" className="px-3">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
      <div className="rounded-lg border border-border p-6">
        <ul className="grid grid-cols-2 gap-3 text-sm">
          <li className="p-3 rounded-md bg-card border border-border">Threat Hunting</li>
          <li className="p-3 rounded-md bg-card border border-border">Incident Response</li>
          <li className="p-3 rounded-md bg-card border border-border">SIEM Engineering</li>
          <li className="p-3 rounded-md bg-card border border-border">Automation (Python)</li>
        </ul>
      </div>
    </div>
  )
}
