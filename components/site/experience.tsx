import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '@/lib/data'
import { Reveal, SectionBadge, SectionShell, SectionTitle } from './primitives'

export function Experience() {
  return (
    <SectionShell id="experience">
      <Reveal>
        <SectionBadge>Experience</SectionBadge>
        <SectionTitle lead="Work" accent="Experience" className="mt-5" />
      </Reveal>

      <ol className="relative mt-12 flex flex-col gap-8 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:w-0.5 md:before:-translate-x-1/2 md:before:bg-gradient-to-b md:before:from-neon-violet md:before:via-neon-blue md:before:to-neon-cyan">
        {experience.map((item, i) => {
          const right = i % 2 === 1
          return (
            <li key={item.role} className="relative grid md:grid-cols-2 md:gap-12">
              <span
                className="absolute top-8 left-1/2 hidden size-4 -translate-x-1/2 rounded-full bg-neon-violet shadow-[0_0_14px_var(--neon-violet)] ring-4 ring-background md:block"
                aria-hidden="true"
              />
              <Reveal delay={i * 0.1} className={right ? 'md:col-start-2' : 'md:col-start-1'}>
                <article className="glass rounded-2xl p-6 transition-colors hover:border-neon-violet/80">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neon-violet to-neon-blue text-white">
                      <Briefcase className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                      <p className="text-sm text-neon-violet">{item.org}</p>
                    </div>
                  </div>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                    <Calendar className="size-3.5" aria-hidden="true" />
                    {item.period}
                  </p>
                  <p className="mt-4 font-medium">{item.summary}</p>
                  <ul className="mt-2 flex flex-col gap-2 text-muted-foreground">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon-cyan" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </SectionShell>
  )
}
