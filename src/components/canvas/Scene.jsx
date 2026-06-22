import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import CoreSpecimen from './CoreSpecimen.jsx'
import ParticleField from './ParticleField.jsx'

export default function Scene({ activeSection, scrollProgress, reduced, isMobile }) {
  return (
    <Canvas
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 42 }}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} color="#f5f2ea" />
        <directionalLight position={[4, 5, 3]} intensity={1.2} color="#f5f2ea" />
        <pointLight position={[-5, -3, -4]} intensity={0.6} color="#c9a227" />

        <Float
          speed={reduced ? 0.4 : 1.1}
          rotationIntensity={reduced ? 0.15 : 0.4}
          floatIntensity={reduced ? 0.25 : 0.7}
        >
          <CoreSpecimen
            activeSection={activeSection}
            scrollProgress={scrollProgress}
            reduced={reduced}
          />
        </Float>

        {!isMobile && <ParticleField count={reduced ? 80 : 220} />}

        <Environment preset="city" />

        {!reduced && (
          <EffectComposer multisampling={isMobile ? 0 : 4}>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.25}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.15} darkness={0.6} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  )
}