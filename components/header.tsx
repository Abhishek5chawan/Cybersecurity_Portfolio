"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 w-full h-14 flex items-center justify-between">
        <Link href="#hero" className="font-semibold">
          SOC Analyst
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#skills" className="hover:underline">
            Skills
          </Link>
          <Link href="#experience" className="hover:underline">
            Experience
          </Link>
          <Link href="#certifications" className="hover:underline">
            Certifications
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
          <a href="/ABHISHEK_CYBERSECURITY_SOC_ANALYST_RESUME.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </Button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link href="#experience" onClick={() => setOpen(false)}>
              Experience
            </Link>
            <Link href="#certifications" onClick={() => setOpen(false)}>
              Certifications
            </Link>
            <Link href="#projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
