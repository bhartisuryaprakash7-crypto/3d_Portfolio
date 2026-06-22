import { motion } from 'framer-motion'
import { profile } from '../../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

export default function Intro() {
  return (
    <section id="intro" className="section-shell intro-shell">
      <div className="section-inner intro-inner">
        <div className="intro-left">
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Portfolio — {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            className="intro-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="intro-role"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {profile.role} based in {profile.location}
          </motion.p>

          <motion.p
            className="intro-tagline"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="intro-actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View the work
            </a>

            <a
              href={profile.resumeUrl}
              className="btn btn-ghost"
              download
            >
              Download résumé
            </a>
          </motion.div>
        </div>

        {profile.photo && (
          <motion.div
            className="intro-photo-frame"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div
              className="intro-photo-ring"
              aria-hidden="true"
            />
            <img
              src={profile.photo}
              alt={profile.name}
              className="intro-photo-img"
            />
          </motion.div>
        )}
      </div>

      <motion.div
        className="intro-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="intro-scroll-line" />
        <span>Scroll to begin</span>
      </motion.div>
    </section>
  )
}