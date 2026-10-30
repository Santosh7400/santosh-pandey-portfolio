import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowDownToLine, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CV | Santosh Pandey',
  description: 'Curriculum vitae of Santosh Pandey — Computer Science & Cybersecurity.',
}

export default function CvPage() {
  return (
    <div className="min-h-svh bg-slate-100 px-4 py-4 text-slate-900 sm:px-6">
      <div className="mx-auto mb-4 flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
        <a
          href="/Santosh_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
        >
          <ArrowDownToLine className="size-4" aria-hidden="true" />
          Download CV
        </a>
      </div>

      <main className="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow-xl">
        <iframe
          src="/Santosh_Resume.pdf#view=FitH"
          title="Santosh Pandey CV"
          className="h-[calc(100vh-5.5rem)] min-h-[600px] w-full border-0"
        />
      </main>
    </div>
  )
}
