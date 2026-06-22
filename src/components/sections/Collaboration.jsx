import { motion } from 'framer-motion'
import { collaborations } from '../../data/content.js'

export default function Collaboration() {
  return (
    <section id="collaboration" className="section-shell">
      <div className="section-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
        >
          Team Contribution
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Good software is rarely a solo act. Here's where I stood in the room.
        </motion.h2>

        <div className="collab-list">
          {collaborations.map((item, index) => (
            <motion.article
              key={item.id}
              className="collab-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="collab-card-head">
                <h3>{item.project}</h3>
                <span className="collab-team">{item.team}</span>
              </div>

              <p className="collab-text">{item.contribution}</p>

              <ul className="collab-outcomes">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}