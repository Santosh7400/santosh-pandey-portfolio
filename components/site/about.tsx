import Image from 'next/image'
import { Briefcase, GraduationCap, Lightbulb, Mail, MapPin, Phone, Rocket, Sparkles, User } from 'lucide-react'
import { profile } from '@/lib/data'
import { Reveal, SectionBadge, SectionShell, SectionTitle } from './primitives'

const info = [
  { icon: User, label: 'Name', value: profile.name },
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE (Cyber Security)' },
  { icon: Briefcase, label: 'Status', value: profile.availability },
]

const pillars = [
  {
    icon: Rocket,
    title: 'My Journey',
    text: 'From Nepal to SRM University–AP on a fully funded scholarship, I have grown from curious learner to published researcher and developer.',
  },
  {
    icon: Lightbulb,
    title: 'What Drives Me',
    text: 'Building systems that are secure by design and using AI to solve meaningful, real-world problems.',
  },
  {
    icon: Sparkles,
    title: 'My Interests',
    text: 'Penetration testing, deep learning, full-stack development, financial markets, and community leadership.',
  },
]

export function About() {
  return (
    <SectionShell id="about">
      <Reveal>
        <SectionBadge>About Me</SectionBadge>
        <SectionTitle lead="Who" accent="I Am" className="mt-5" />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr_1fr]">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl neon-border bg-gradient-to-br from-[#ede9fe] via-[#a5b4fc] to-[#312e81] lg:aspect-auto">
          <Image
            src="/images/santosh.png"
            alt="Santosh Pandey smiling, wearing a black hoodie"
            fill
            sizes="(min-width: 1024px) 22rem, 90vw"
            className="object-cover object-top mix-blend-multiply"
          />
        </Reveal>

        <Reveal delay={0.1} className="glass flex flex-col justify-center rounded-2xl p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold">
            Computer Science student & <span className="text-gradient">security enthusiast</span>
          </h3>
          <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
            {"I'm Santosh Pandey, a B.Tech Computer Science and Engineering student specializing in Cyber Security at SRM University–AP, Amaravati. I study on a fully funded Study in India scholarship and have published research on speech emotion recognition in IEEE Xplore."}
          </p>
          <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">
            I enjoy working across the stack — from Django and React applications to CNN-LSTM models and web application
            pentesting. Outside the classroom I serve as an International Students Ambassador and trade financial markets
            independently.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Cybersecurity', 'AI / ML', 'Web Development', 'Research', 'Leadership'].map((tag) => (
              <span key={tag} className="rounded-full border border-neon-violet/50 bg-neon-violet/10 px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="glass rounded-2xl p-6">
          <h3 className="font-display text-lg font-semibold">Personal Info</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-neon-violet to-neon-blue text-white">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="block truncate text-sm font-medium hover:text-neon-violet">
                      {value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1} className="glass group rounded-2xl p-6 transition-colors hover:border-neon-violet/70">
            <Icon className="size-7 text-neon-violet transition-transform group-hover:scale-110" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
