import { CodeXml, FileText, GraduationCap, Trophy, Users } from 'lucide-react'
import { education } from '@/lib/data'
import { Reveal, SectionBadge, SectionTitle } from './primitives'

const highlights = [
  {
    icon: GraduationCap,
    iconClass: 'text-amber-400',
    title: 'Fully Funded Undergraduate Study in India Scholarship',
    text: 'Worth USD 12,000',
  },
  {
    icon: FileText,
    iconClass: 'text-neon-blue',
    title: 'IEEE Publication',
    text: 'Research paper in IEEE Xplore',
  },
  {
    icon: CodeXml,
    iconClass: 'text-neon-violet',
    title: 'Hackathon Participation',
    text: 'Participated in national and international hackathons',
  },
  {
    icon: Users,
    iconClass: 'text-neon-cyan',
    title: 'Volunteering & Leadership',
    text: 'Contributed to university events and student initiatives',
  },
]

export function Education() {
  return (
    <section id="education" className="relative px-4 py-16 sm:px-6 lg:py-24">
      <div className="glass relative mx-auto max-w-7xl overflow-hidden rounded-3xl p-6 sm:p-10">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-neon-violet/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionBadge>Education</SectionBadge>
              <SectionTitle lead="My Academic" accent="Journey" className="mt-5" />
            </Reveal>

            <ol className="relative mt-10 flex flex-col gap-10 border-l-2 border-neon-blue/60 pl-8">
              {education.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.12} className="relative">
                    <span
                      className="absolute top-1 -left-[2.65rem] grid size-5 place-items-center rounded-full bg-neon-blue shadow-[0_0_14px_var(--neon-blue)]"
                      aria-hidden="true"
                    >
                      <span className="size-2 rounded-full bg-white" />
                    </span>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <p className="w-28 shrink-0 font-display text-lg font-semibold">{item.period}</p>
                     {item.logo ? (
  <div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-emerald-200/80 bg-white p-1 shadow-lg">
    <img
      src={item.logo}
      alt={`${item.institution} logo`}
      className="h-full w-full rounded-full object-contain"
    />
  </div>
) : (
                      <div
                        className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-white/80 bg-gradient-to-br from-neon-violet to-neon-blue font-display text-xs font-bold text-white shadow-lg"
                        aria-hidden="true"
                      >
                        {item.initials}
                      </div>
                    )}
                      <div>
                        <h3 className="font-display text-xl font-semibold text-balance">{item.title}</h3>
                        {item.subtitle && <p className="font-display text-lg font-medium">{item.subtitle}</p>}
                        <p className="mt-1 text-muted-foreground">{item.institution}</p>
                        <p className="text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <SectionBadge>Highlights</SectionBadge>
              <h2 className="mt-5 flex items-center gap-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <Trophy className="size-10 shrink-0 text-amber-400" aria-hidden="true" />
                <span>
                  Academic <span className="text-gradient">Highlights</span>
                </span>
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, iconClass, title, text }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 0.08}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-neon-violet/70"
                >
                  <Icon className={`size-10 shrink-0 ${iconClass}`} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-balance">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
