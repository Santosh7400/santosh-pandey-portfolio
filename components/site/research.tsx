import Image from 'next/image'
import { ArrowUpRight, Boxes, Brain, ChartColumn, Database, MessageSquare, Target, TrendingUp } from 'lucide-react'
import { research } from '@/lib/data'
import { Reveal, SectionBadge, SectionTitle } from './primitives'

const highlights = [
  { icon: Brain, top: 'CNN-LSTM', bottom: 'Architecture' },
  { icon: Database, top: 'TESS', bottom: 'Dataset' },
  { icon: TrendingUp, top: 'Emotion', bottom: 'Classification' },
  { icon: ChartColumn, top: 'MFCC &', bottom: 'Spectrogram' },
  { icon: Boxes, top: 'Comparative', bottom: 'Analysis' },
  { icon: Target, top: 'Real-time', bottom: 'Prediction' },
]

export function Research() {
  return (
    <section id="research" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <div className="absolute top-0 right-0 -z-10 h-full w-full lg:w-3/5" aria-hidden="true">
        <Image src="/images/research-head.png" alt="" fill sizes="60vw" className="scene-img object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionBadge>My Research</SectionBadge>
          <SectionTitle lead="Research" accent="Publication" className="mt-5" />
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[18rem_1fr]">
          <Reveal className="mx-auto w-full max-w-xs">
            <Image
              src="/images/IEEE%20Research%20Paper%20Cover%20on%20Purple%20Gradient.png"
              alt="Advancing Speech Emotion Recognition research paper cover"
              width={1153}
              height={1360}
              className="h-auto w-full rounded-xl shadow-[0_20px_60px_-15px_rgb(139_92_246/0.6)]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="max-w-2xl font-display text-2xl font-semibold text-balance sm:text-3xl">{research.title}</h3>
              <span className="rounded-xl border border-border bg-background/60 px-4 py-2 font-display text-lg backdrop-blur">
                {research.date}
              </span>
            </div>
            <p className="mt-4 inline-block rounded-lg bg-gradient-to-r from-neon-violet to-neon-magenta px-4 py-1.5 font-medium text-white">
              {research.venue}
            </p>
            <ul className="mt-6 flex max-w-2xl flex-col gap-3 text-muted-foreground">
              {research.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 size-3 shrink-0 rounded-full border-2 border-neon-violet bg-neon-violet/40" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={research.ieeeSearch}
                target="_blank"
                rel="noreferrer"
                className="btn-neon inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Read on IEEE Xplore
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-neon-violet px-6 py-3 font-medium backdrop-blur transition-colors hover:bg-neon-violet/15"
              >
                Discuss This Research
                <MessageSquare className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="glass mt-14 rounded-2xl p-6 neon-border sm:p-8">
          <h3 className="font-display text-2xl font-semibold">Research Highlights</h3>
          <ul className="mt-6 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-border">
            {highlights.map(({ icon: Icon, top, bottom }) => (
              <li key={top} className="flex flex-col items-center gap-3 px-2 text-center">
                <Icon className="size-10 text-neon-violet" strokeWidth={1.5} aria-hidden="true" />
                <p className="leading-tight">
                  <span className="block font-medium text-neon-violet">{top}</span>
                  <span className="block">{bottom}</span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
