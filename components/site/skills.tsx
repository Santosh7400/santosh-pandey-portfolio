'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Bug, CodeXml, Crosshair, Fish, Radar } from 'lucide-react'
import { proficiencies, skillCategories, skills, type Skill } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Reveal, SectionBadge, SectionShell, SectionTitle } from './primitives'

const lucideMap = {
  radar: { Icon: Radar, className: 'text-sky-400' },
  shark: { Icon: Fish, className: 'text-blue-500' },
  metasploit: { Icon: Crosshair, className: 'text-indigo-400' },
  burp: { Icon: Bug, className: 'text-orange-500' },
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.icon) {
    // eslint-disable-next-line @next/next/no-img-element
    const lowContrastOnDark = skill.name === 'Django' || skill.name === 'MySQL'
  return (
    <img
      src={skill.icon}
      alt=""
      className={cn('size-12 object-contain', lowContrastOnDark && 'dark:invert dark:hue-rotate-180')}
      loading="lazy"
    />
  )
  }
  const { Icon, className } = lucideMap[skill.lucide!]
  return <Icon className={cn('size-12', className)} strokeWidth={1.6} aria-hidden="true" />
}

export function Skills() {
  const [filter, setFilter] = useState<(typeof skillCategories)[number]>('All')
  const visible = filter === 'All' ? skills : skills.filter((s) => s.category === filter)

  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionBadge>Skills</SectionBadge>
        <SectionTitle lead="Technical" accent="Skills" className="mt-5" />
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem]">
        <div>
          <div role="group" aria-label="Filter skills" className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={cn(
                  'rounded-xl border px-4 py-2.5 text-sm font-medium transition-all',
                  filter === cat
                    ? 'border-transparent bg-gradient-to-r from-neon-violet to-neon-magenta text-white shadow-[0_0_20px_-4px_var(--neon-violet)]'
                    : 'border-border bg-card text-foreground hover:border-neon-violet/70',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.ul layout className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            <AnimatePresence mode="popLayout">
              {visible.map((skill) => (
                <motion.li
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="glass group flex flex-col items-center justify-center gap-3 rounded-2xl px-3 py-6 transition-all hover:-translate-y-1 hover:border-neon-violet/80 hover:shadow-[0_0_24px_-6px_var(--neon-violet)]"
                >
                  <SkillIcon skill={skill} />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>

        <Reveal delay={0.15} className="flex flex-col">
          <div className="relative mx-auto grid size-56 place-items-center" aria-hidden="true">
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border-[6px] border-transparent border-t-neon-cyan border-r-neon-violet" />
            <div className="absolute inset-5 animate-[spin_12s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-neon-blue border-l-neon-cyan/70" />
            <div className="absolute inset-10 rounded-full border border-neon-cyan/40 bg-neon-violet/10 shadow-[0_0_40px_-6px_var(--neon-violet)]" />
            <CodeXml className="relative size-16 text-neon-violet" />
          </div>

          <div className="glass mt-4 rounded-2xl p-6 neon-border">
            <h3 className="sr-only">Proficiency</h3>
            <ul className="flex flex-col gap-5">
              {proficiencies.map((p) => (
                <li key={p.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{p.label}</span>
                    <span className="font-semibold">{p.value}%</span>
                  </div>
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-secondary"
                    role="progressbar"
                    aria-label={p.label}
                    aria-valuenow={p.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-neon-violet via-neon-blue to-neon-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
