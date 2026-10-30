'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, X } from 'lucide-react'
import { projects, socials } from '@/lib/data'
import { GithubIcon } from './brand-icons'
import { Reveal, SectionBadge, SectionShell, SectionTitle } from './primitives'

type Project = (typeof projects)[number]

export function Projects() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    setSelected(project)
    dialogRef.current?.showModal()
  }

  return (
    <SectionShell id="projects">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionBadge>Projects</SectionBadge>
          <SectionTitle lead="Featured" accent="Projects" className="mt-5" />
        </div>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-b-2 border-neon-violet pb-1 font-display text-lg font-medium text-neon-violet transition-colors hover:text-neon-magenta"
        >
          View All Projects
          <ArrowRight className="size-5" aria-hidden="true" />
        </a>
      </Reveal>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={i * 0.08}
            className="glass group flex h-full flex-col rounded-2xl p-4 transition-[border-color,box-shadow] hover:border-neon-violet/80 hover:shadow-[0_0_30px_-8px_var(--neon-violet)]"
          >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1280px) 20rem, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-neon-blue/60 bg-neon-blue/10 px-3 py-1 text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-neon-violet" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="inline-flex items-center gap-2 rounded-full border border-neon-violet px-4 py-2 text-sm font-medium transition-colors hover:bg-neon-violet/20"
                >
                  View Project
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <a
                  href={`https://github.com/search?q=${encodeURIComponent(project.title)}&type=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="grid size-11 place-items-center rounded-full border border-border bg-background/60 transition-colors hover:border-neon-violet"
                >
                  <GithubIcon className="size-5" />
                </a>
              </div>
          </Reveal>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
        aria-labelledby="project-dialog-title"
        className="m-auto w-[min(42rem,calc(100%-2rem))] rounded-2xl border border-neon-violet/60 bg-card-solid p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <div>
            <div className="relative aspect-video">
              <Image src={selected.image} alt={`${selected.title} preview`} fill sizes="42rem" className="object-cover" />
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close"
                className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-black/60 text-white"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="p-6">
              <h3 id="project-dialog-title" className="font-display text-2xl font-semibold">
                {selected.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {selected.stack.map((tag) => (
                  <li key={tag} className="rounded-full border border-neon-blue/60 bg-neon-blue/10 px-3 py-1 text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
                {selected.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-neon-violet" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={`https://github.com/search?q=${encodeURIComponent(selected.title)}&type=repositories`}
                target="_blank"
                rel="noreferrer"
                className="btn-neon mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium text-white"
              >
                <GithubIcon className="size-4" />
                Find on GitHub
              </a>
            </div>
          </div>
        )}
      </dialog>
    </SectionShell>
  )
}
