import { About } from '@/components/site/about'
import { Achievements } from '@/components/site/achievements'
import { Certifications } from '@/components/site/certifications'
import { Contact } from '@/components/site/contact'
import { Education } from '@/components/site/education'
import { Experience } from '@/components/site/experience'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { Navbar } from '@/components/site/navbar'
import { Projects } from '@/components/site/projects'
import { Research } from '@/components/site/research'
import { Skills } from '@/components/site/skills'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
          <div className="starfield absolute inset-0" />
          <div className="absolute top-1/3 -left-40 size-[32rem] rounded-full bg-neon-violet/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 size-[28rem] rounded-full bg-neon-blue/10 blur-3xl" />
        </div>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
