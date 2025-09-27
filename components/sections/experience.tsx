export function Experience() {
  const roles = [
    {
      company: "Zensible Pvt. Ltd",
      title: "Frontend Developer Intern",
      period: "Dec 2024 - Mar 2025",
      bullets: [
        "Optimized UI components of the company’s website under the mentorship of senior developer",
        "Worked within an Agile framework in order to enhance UI experience and performance.",
        "Gained hands-on experience in frontend development, focusing on clean code practices and modern UItechnologies.",
      ],
    }
  ]

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Professional Experience</h2>
      <div className="space-y-6">
        {roles.map((r) => (
          <article key={r.company} className="rounded-lg border border-border p-5 bg-card">
            <header className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-pretty">
                {r.title} — {r.company}
              </h3>
              <time className="text-sm text-muted-foreground">{r.period}</time>
            </header>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
