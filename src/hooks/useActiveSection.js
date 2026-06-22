import { useEffect, useRef, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const ratios = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.current[entry.target.id] = entry.intersectionRatio
        })
        const mostVisible = Object.entries(ratios.current).sort((a, b) => b[1] - a[1])[0]
        if (mostVisible && mostVisible[1] > 0.1) {
          setActiveId(mostVisible[0])
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}