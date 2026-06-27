import { useEffect, useState, useCallback } from 'react'
import Scene from './components/canvas/Scene.jsx'
import Loader from './components/ui/Loader.jsx'
import NavRail from './components/ui/NavRail.jsx'
import Intro from './components/sections/Intro.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Collaboration from './components/sections/Collaboration.jsx'
import Contact from './components/sections/Contact.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'
import { usePrefersReducedMotion, useMediaQuery } from './hooks/useMediaQuery.js'
import { navItems } from './data/content.js'

const sectionIds = navItems.map((n) => n.id)

export default function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const reduced = usePrefersReducedMotion()
  const isMobile = useMediaQuery('(max-width: 860px)')
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const handleScroll = useCallback(() => {
    const doc = document.documentElement
    const max = doc.scrollHeight - doc.clientHeight
    setScrollProgress(max > 0 ? window.scrollY / max : 0)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <Loader show={showLoader} />

      <Scene
        activeSection={activeId}
        scrollProgress={scrollProgress}
        reduced={reduced}
        isMobile={isMobile}
      />

      <NavRail activeId={activeId} />

      <main className="page">
        <Intro />
        <hr className="hairline" aria-hidden="true" />
        <Skills />
        <hr className="hairline" aria-hidden="true" />
        <Projects />
        <hr className="hairline" aria-hidden="true" />
        <Collaboration />
        <hr className="hairline" aria-hidden="true" />
        <Contact />
      </main>
    </>
  )
}