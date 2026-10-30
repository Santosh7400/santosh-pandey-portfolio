import Image from 'next/image'
import { ArrowRight, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { profile, socials } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const stats = [
  { value: '8.34', label: 'CGPA' },
  { value: '4+', label: 'Projects' },
  { value: '1', label: 'IEEE Paper' },
  { value: '6', label: 'Certifications' },
]

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:min-h-svh lg:pt-32">
      <Image
        src="/images/mountains-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scene-img -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/40 to-background" aria-hidden="true" />
      <div className="starfield absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-neon-violet/60 bg-background/40 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
            <ShieldCheck className="size-4 text-neon-violet" aria-hidden="true" />
            Cybersecurity · AI Research · Development
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {"Hi, I'm "}
            <span className="block">
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-neon-cyan sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
           Focused on developing secure, scalable web applications and intelligent software solutions. Experienced in cybersecurity, full-stack development, and deep learning research, with an IEEE Xplore publication on Speech Emotion Recognition. Driven by innovation and problem-solving, I enjoy tackling complex technical challenges and transforming ideas into practical, reliable applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-neon inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neon-violet/70 bg-background/40 px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-neon-violet/15"
            >
              <Mail className="size-4" aria-hidden="true" />
              Get In Touch
            </a>
            <div className="flex items-center gap-2">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-xl border border-border bg-card text-[#0a66c2] transition-colors hover:border-neon-violet"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-xl border border-border bg-card transition-colors hover:border-neon-violet"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl px-4 py-3">
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-gradient">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-neon-violet/30 blur-3xl" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] neon-border bg-gradient-to-b from-[#f3e8ff] via-[#c4b5fd] to-[#4c1d95]">
            <Image
              src="/images/santosh.png"
              alt="Portrait of Santosh Pandey"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-top mix-blend-multiply"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05061a]/90 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white backdrop-blur-md">
              <div>
                <p className="font-display font-semibold">{profile.name}</p>
                <p className="flex items-center gap-1 text-xs text-white/75">
                  <MapPin className="size-3" aria-hidden="true" />
                  {profile.location}
                </p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="size-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
