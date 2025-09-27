import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Header />
      <section id="hero" className="container mx-auto px-4 py-12 md:py-16">
        <Hero />
      </section>

      <section id="skills" className="container mx-auto px-4 py-12 md:py-16">
        <Skills />
      </section>

      <section id="experience" className="container mx-auto px-4 py-12 md:py-16">
        <Experience />
      </section>

      <section id="certifications" className="container mx-auto px-4 py-12 md:py-16">
        <Certifications />
      </section>

      <section id="projects" className="container mx-auto px-4 py-12 md:py-16">
        <Projects />
      </section>

      <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
        <Contact />
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-pretty">© {new Date().getFullYear()} Abhishek Chawan — SOC Analyst Portfolio</p>
          <nav className="flex items-center gap-4">
            <a href="#hero" className="hover:underline">
              Top
            </a>
            <a href="/resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
