'use client'

import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const reduce = useReducedMotion()
  const Component = as === 'li' ? motion.li : motion.div
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

export function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="inline-flex items-center gap-2.5 rounded-full border border-neon-violet/70 bg-background/40 px-5 py-1.5 text-xs font-medium tracking-[0.22em] uppercase shadow-[0_0_18px_-4px_rgb(168_85_247/0.7)] sm:text-sm">
        <span className="size-2 rounded-full bg-neon-violet shadow-[0_0_8px_var(--neon-violet)]" aria-hidden="true" />
        {children}
      </span>
      <span className="h-px w-24 bg-gradient-to-r from-neon-violet/70 to-transparent sm:w-40" aria-hidden="true" />
    </div>
  )
}

export function SectionTitle({
  lead,
  accent,
  className,
  as: Tag = 'h2',
}: {
  lead: string
  accent: string
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag
      className={cn(
        'font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl',
        className,
      )}
    >
      {lead} <span className="text-gradient">{accent}</span>
    </Tag>
  )
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('relative px-4 py-16 sm:px-6 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
