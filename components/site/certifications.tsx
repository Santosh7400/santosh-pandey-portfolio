import { Award, BadgeCheck } from 'lucide-react'
import { certifications } from '@/lib/data'
import { Reveal, SectionBadge, SectionShell, SectionTitle } from './primitives'

export function Certifications() {
  return (
    <SectionShell id="certifications">
      <Reveal>
        <SectionBadge>Certifications</SectionBadge>
        <SectionTitle lead="Licenses &" accent="Certifications" className="mt-5" />
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal
            as="li"
            key={cert.title}
            delay={i * 0.06}
            className="glass group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl p-6 transition-colors hover:border-neon-violet/80"
          >
              <div
                className={`grid size-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${cert.tone} text-white shadow-lg`}
              >
                <Award className="size-7" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium tracking-widest text-neon-violet uppercase">{cert.issuer}</p>
                <h3 className="mt-1 font-display text-lg leading-snug font-semibold text-balance">{cert.title}</h3>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-emerald-400" aria-hidden="true" />
                  Completed
                </p>
              </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  )
}
