import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/content.js'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }




const handleSubmit = async (e) => {
  e.preventDefault()

  setStatus('sending')

  try {
    await emailjs.send(
      'service_wsuq9f3',
      'template_na0w18l',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'X-zmR2B-m6j4jMCa6'
    )

    setStatus('sent')

    setForm({
      name: '',
      email: '',
      message: '',
    })
  } catch (error) {
  console.log("FULL ERROR:", error)

  alert(
    `Status: ${error?.status}\nText: ${error?.text}`
  )

  setStatus('idle')
}
}





  return (
    <section id="contact" className="section-shell">
      <div className="section-inner contact-inner">
        <div className="contact-left">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6 }}
          >
            Get in touch
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Have a project in mind? Let's talk it through.
          </motion.h2>

          <motion.p
            className="contact-email"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </motion.p>

          <motion.ul
            className="social-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {profile.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <span className="social-label">{s.label}</span>
                  <span className="social-handle">{s.handle}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the project"
            />
          </label>

          <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
            {status === 'idle' && 'Send message'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && 'Sent — thank you'}
          </button>

          {status === 'sent' && (
            <p className="contact-confirm" role="status">
              Got it. I'll reply within a couple of days.
            </p>
          )}
        </motion.form>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React Three Fiber</span>
        <span>--"Behind every successful website is an engineer who never gives up."</span>
      </footer>
    </section>
  )
}