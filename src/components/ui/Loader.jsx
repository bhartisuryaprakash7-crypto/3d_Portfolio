import { useProgress } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  const { progress } = useProgress()

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-mark">AM</div>
          <div className="loader-bar-track">
            <motion.div
              className="loader-bar-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <span className="loader-pct">{Math.round(progress)}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}