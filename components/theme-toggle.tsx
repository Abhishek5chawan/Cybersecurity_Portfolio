"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" aria-hidden>
        Toggle Theme
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const isDark = theme === "system" ? resolvedTheme === "dark" : theme === "dark"

  return (
    <Button
      variant="outline"
      size="sm"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
