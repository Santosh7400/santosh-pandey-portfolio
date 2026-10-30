'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark')

    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const link of navLinks) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="shrink-0 font-display text-xl font-bold tracking-tight whitespace-nowrap">
          Santosh <span className="text-gradient">Pandey</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative block rounded-lg px-2.5 py-2 text-sm whitespace-nowrap transition-colors',
                    isActive
                      ? 'bg-neon-violet/20 text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-neon-violet shadow-[0_0_6px_var(--neon-violet)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid size-10 place-items-center rounded-full border border-border bg-card transition-colors hover:border-neon-violet"
          >
            {theme === 'dark' ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <Link
            href="/cv"
            className="btn-neon hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-border bg-card xl:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-border px-4 pb-4 xl:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 pt-3 sm:grid-cols-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-sm',
                    active === link.id ? 'bg-neon-violet/20 text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <Link href="/cv" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neon-violet">
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
