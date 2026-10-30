import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { certifications, education, experience, profile, projects, research, skills } from '@/lib/data'
import { PrintButton } from './print-button'

export const metadata: Metadata = {
  title: 'CV | Santosh Pandey',
  description: 'Curriculum vitae of Santosh Pandey — Computer Science & Cybersecurity.',
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 border-b-2 border-violet-600 pb-1 text-sm font-bold tracking-widest text-violet-700 uppercase">
      {children}
    </h2>
  )
}

export default function CvPage() {
  return (
    <div className="min-h-svh bg-slate-100 py-8 text-slate-900 print:bg-white print:py-0">
      <div className="mx-auto mb-4 flex max-w-[52rem] items-center justify-between px-4 print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <main className="mx-auto max-w-[52rem] bg-white px-8 py-10 shadow-xl sm:px-12 print:max-w-none print:px-0 print:py-0 print:shadow-none">
        <header>
          <h1 className="font-display text-4xl font-bold">{profile.name}</h1>
          <p className="mt-1 text-lg font-medium text-violet-700">{profile.role}</p>
          <p className="mt-2 text-sm text-slate-600">
            {profile.location} · {profile.email} · {profile.phone}
          </p>
        </header>

        <Heading>Education</Heading>
        {education.map((e) => (
          <div key={e.title} className="mt-3">
            <div className="flex justify-between gap-4 font-semibold">
              <span>
                {e.title} {e.subtitle}
              </span>
              <span className="shrink-0">{e.period}</span>
            </div>
            <p className="text-sm text-slate-600">
              {e.institution} · {e.detail}
            </p>
          </div>
        ))}

        <Heading>Experience</Heading>
        {experience.map((x) => (
          <div key={x.role} className="mt-3">
            <div className="flex justify-between gap-4 font-semibold">
              <span>
                {x.role} — {x.org}
              </span>
              <span className="shrink-0 text-sm">{x.period}</span>
            </div>
            <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
              {x.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        <Heading>Research</Heading>
        <p className="mt-3 font-semibold">{research.title}</p>
        <p className="text-sm text-slate-600">
          {research.venue} · {research.date}
        </p>

        <Heading>Projects</Heading>
        {projects.map((p) => (
          <div key={p.title} className="mt-3">
            <p className="font-semibold">
              {p.title} <span className="font-normal text-slate-600">· {p.stack.join(', ')}</span>
            </p>
            <p className="text-sm text-slate-700">{p.points[0]}</p>
          </div>
        ))}

        <Heading>Skills</Heading>
        <p className="mt-3 text-sm text-slate-700">{skills.map((s) => s.name).join(' · ')}</p>

        <Heading>Certifications</Heading>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {certifications.map((c) => (
            <li key={c.title}>
              {c.title} — {c.issuer}
            </li>
          ))}
        </ul>

        <Heading>Achievements</Heading>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          <li>Fully Funded Undergraduate Study in India Scholarship (USD 12,000)</li>
          <li>IEEE Xplore publication on speech emotion recognition</li>
          <li>We for Change Certificate</li>
          <li>Hackathon participation (national & international)</li>
        </ul>
      </main>
    </div>
  )
}
