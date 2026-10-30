
'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react'

import { profile, socials } from '@/lib/data'
import { GithubIcon, GoogleIcon, InstagramIcon, LinkedinIcon } from './brand-icons'
import { Reveal, SectionBadge, SectionTitle } from './primitives'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    tone: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    tone: 'from-blue-500 to-indigo-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    tone: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: GraduationCap,
    label: 'Availability',
    value: profile.availability,
    tone: 'from-blue-500 to-indigo-600',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: socials.linkedin,
    Icon: LinkedinIcon,
    className: 'text-[#0a66c2]',
  },
  {
    label: 'GitHub',
    href: socials.github,
    Icon: GithubIcon,
    className: '',
  },
  {
    label: 'Email',
    href: socials.email,
    Icon: GoogleIcon,
    className: '',
  },
  {
    label: 'Instagram',
    href: socials.instagram,
    Icon: InstagramIcon,
    className: 'text-pink-500',
  },
].filter((link) => Boolean(link.href))

const inputClass =
  'w-full rounded-xl border border-border bg-background/50 py-3.5 pr-4 pl-12 text-sm placeholder:text-muted-foreground focus:border-neon-violet focus:ring-2 focus:ring-neon-violet/30 focus:outline-none'

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) return

    const form = e.currentTarget
    const data = new FormData(form)

    setIsSubmitting(true)
    setStatus('Sending your message...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ded3f91c-09cb-4d6c-80f6-d45f11cd8736',
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
          from_name: 'Santosh Pandey Portfolio',
          replyto: data.get('email'),
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('Message sent successfully! Thank you for contacting me.')
        form.reset()
      } else {
        setStatus(
          result.message || 'Unable to send your message. Please try again.'
        )
      }
    } catch {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:py-24">
      <div className="relative isolate mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-3xl border border-neon-violet/50 p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
        <Image
          src="/images/contact-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="scene-img -z-20 object-cover object-right"
        />

        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30"
          aria-hidden="true"
        />

        <div>
          <Reveal>
            <SectionBadge>Contact</SectionBadge>

            <SectionTitle lead="Get In" accent="Touch" className="mt-5" />

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations,
              research ideas, or just having a conversation about technology.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value, href, tone }, i) => {
              const content = (
                <>
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tone} text-white`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-display text-lg font-medium">
                      {label}
                    </span>
                    <span className="block truncate text-sm">{value}</span>
                  </span>
                </>
              )

              const cls =
                'glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-neon-violet/80'

              return (
                <Reveal as="li" key={label} delay={i * 0.06}>
                  {href ? (
                    <a href={href} className={cls}>
                      {content}
                    </a>
                  ) : (
                    <div className={cls}>{content}</div>
                  )}
                </Reveal>
              )
            })}
          </ul>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="font-display text-xl font-medium">
              Connect with me
            </h3>

            <ul className="mt-4 flex gap-4">
              {socialLinks.map(({ label, href, Icon, className }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={label}
                    className="glass grid size-14 place-items-center rounded-xl transition-all hover:-translate-y-1 hover:border-neon-violet hover:shadow-[0_0_20px_-4px_var(--neon-violet)]"
                  >
                    <Icon className={`size-6 ${className}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal
          delay={0.1}
          className="glass rounded-2xl p-6 neon-border sm:p-8 lg:ml-auto lg:w-full lg:max-w-xl"
        >
          <h3 className="flex items-center gap-3 font-display text-3xl font-bold">
            <Send className="size-8 text-neon-violet" aria-hidden="true" />
            <span>
              Send Me a <span className="text-gradient">Message</span>
            </span>
          </h3>

          <p className="mt-3 text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="relative block">
                <span className="sr-only">Your Name</span>
                <User
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your Name"
                  className={inputClass}
                />
              </label>

              <label className="relative block">
                <span className="sr-only">Your Email</span>
                <Mail
                  className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your Email"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="relative block">
              <span className="sr-only">Subject</span>
              <MessageSquare
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                name="subject"
                required
                placeholder="Subject"
                className={inputClass}
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Your Message</span>
              <FileText
                className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className={`${inputClass} resize-y`}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-neon group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-display text-lg font-medium text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="size-5" aria-hidden="true" />
              {isSubmitting ? 'Sending...' : 'Send Message'}

              {!isSubmitting && (
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              )}
            </button>

            <p
              role="status"
              aria-live="polite"
              className="min-h-5 text-sm text-neon-cyan"
            >
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
