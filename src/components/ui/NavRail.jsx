import { motion } from 'framer-motion'
import { navItems } from '../../data/content.js'

export default function NavRail({ activeId, onNavigate }) {
  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    onNavigate?.(id)
  }

  return (
    <nav className="nav-rail" aria-label="Section navigation">
      <a href="#intro" className="nav-rail-mark" onClick={(e) => { e.preventDefault(); handleClick('intro') }}>
        AM
      </a>

      <ul className="nav-rail-list">
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <button
                className="nav-rail-item"
                aria-current={isActive ? 'true' : 'false'}
                onClick={() => handleClick(item.id)}
              >
                <span className="nav-rail-label">{item.label}</span>
                <span className="nav-rail-dot-track">
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="nav-rail-dot"
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    />
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="nav-rail-foot" aria-hidden="true">
        <span>SCROLL</span>
        <span className="nav-rail-foot-line" />
      </div>
    </nav>
  )
}