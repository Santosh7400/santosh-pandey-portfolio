import { CodeXml, FileText, Globe, GraduationCap, Heart, Trophy } from 'lucide-react'
import { Reveal, SectionBadge, SectionShell } from './primitives'

const items = [
  {
    icon: GraduationCap,
    tone: 'from-amber-400 to-orange-500',
    title: 'Study in India Scholarship',
    text: 'Fully funded undergraduate scholarship worth USD 12,000 for B.Tech at SRM University–AP.',
  },
  {
    icon: FileText,
    tone: 'from-sky-500 to-blue-600',
    title: 'IEEE Publication',
    text: 'Published research on speech emotion recognition using CNN-LSTM on the TESS dataset in IEEE Xplore.',
  },
  {
    icon: Heart,
    tone: 'from-rose-500 to-fuchsia-500',
    title: 'We for Change Certificate',
    text: 'Recognized for volunteering contributions and community impact.',
  },
  {
    icon: CodeXml,
    tone: 'from-violet-500 to-indigo-600',
    title: 'Hackathon Participation',
    text: 'Competed in national and international hackathons, building solutions under tight deadlines.',
  },
  {
    icon: Globe,
    tone: 'from-cyan-400 to-teal-500',
    title: 'International Students Ambassador',
    text: 'Served the Office of International Relations at SRM University–AP from 2023 to 2026.',
  },
]

export function Achievements() {
  return (
    <SectionShell id="achievements">
      <Reveal>
        <SectionBadge>Achievements</SectionBadge>
        <h2 className="mt-5 flex items-center gap-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <Trophy className="size-12 shrink-0 text-amber-400 drop-shadow-[0_0_12px_rgb(251_191_36/0.6)]" aria-hidden="true" />
          <span>
            Notable <span className="text-gradient">Achievements</span>
          </span>
        </h2>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, tone, title, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 0.06}
            className={`glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-neon-violet/80 ${
              i === 0 ? 'justify-center neon-border lg:row-span-2' : ''
            }`}
          >
              <span className={`grid size-14 place-items-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className={`mt-5 font-display font-semibold ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              {i === 0 && <p className="mt-6 font-display text-5xl font-bold text-gradient">$12,000</p>}
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  )
}
