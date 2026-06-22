import { motion } from 'framer-motion'
import { skillGroups } from '../../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Every skill represents hours of learning, practice, and continuous improvement.
        </motion.h2>

        <div className="skills-grid">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={group.id}
              className="skill-group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: gIndex * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="skill-group-head">
                <h3>{group.title}</h3>
                <span className="skill-group-note">{group.note}</span>
              </div>

              <ul className="skill-list">
                {group.skills.map((skill, sIndex) => (
                  <li key={skill.name} className="skill-row">
                    <div className="skill-row-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{
                          duration: 0.9,
                          delay: gIndex * 0.12 + sIndex * 0.06,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}