import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/content.js'

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null)

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
        >
          Projects
          
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Two projects, each one a different argument about how interfaces should feel.
        </motion.h2>

        <div className="project-list" role="list">
          {projects.map((project, index) => {
            const isOpen = openId === project.id
            return (
              <motion.div
                key={project.id}
                role="listitem"
                className="project-row"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ '--project-accent': project.color }}
              >
                <button
                  className="project-row-head"
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${project.id}`}
                >
                  <span className="project-index">{project.index}</span>
                  <span className="project-row-title-group">
                    <span className="project-title">{project.title}</span>
                    <span className="project-year">{project.year}</span>
                  </span>
                  <span className="project-toggle" aria-hidden="true">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`project-panel-${project.id}`}
                      className="project-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="project-panel-inner">
                        <p className="project-description">{project.description}</p>

                        <div className="project-meta">
                          <div>
                            <span className="project-meta-label">Role</span>
                            <span className="project-meta-value">{project.role}</span>
                          </div>
                          <div className="project-stack">
                            {project.stack.map((tech) => (
                              <span key={tech} className="project-chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="project-links">
                          <a href={project.links.live} target="_blank" rel="noreferrer">
                            Live site ↗
                          </a>
                          <a href={project.links.code} target="_blank" rel="noreferrer">
                            Source ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}