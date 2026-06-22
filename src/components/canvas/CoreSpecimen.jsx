import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

const SECTION_STATES = {
  intro: { color: '#38bdf8', distort: 0.35, speed: 1.4, scale: 1 },
  skills: { color: '#1f181d', distort: 0.55, speed: 2.2, scale: 0.85 },
  projects: { color: '#240864', distort: 0.18, speed: 0.8, scale: 1.05 },
  collaboration: { color: '#353331', distort: 0.4, speed: 1.6, scale: 0.9 },
  contact: { color: '#49053b', distort: 0.25, speed: 1, scale: 1.1 }
}

export default function CoreSpecimen({ activeSection = 'intro', scrollProgress = 0, reduced = false }) {
  const meshRef = useRef()
  const wireRef = useRef()
  const groupRef = useRef()
  const target = useMemo(() => new THREE.Color(), [])

  const state = SECTION_STATES[activeSection] || SECTION_STATES.intro

  useFrame((_, delta) => {
    if (!meshRef.current || !groupRef.current) return

    const rotSpeed = reduced ? 0.04 : 0.18
    groupRef.current.rotation.y += delta * rotSpeed
    groupRef.current.rotation.x += delta * rotSpeed * 0.4

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -scrollProgress * 1.2,
      0.05
    )

    const targetScale = state.scale
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.04
    )

    target.set(state.color)
    meshRef.current.material.color.lerp(target, 0.05)
    if (wireRef.current) {
      wireRef.current.material.color.lerp(target, 0.05)
    }

    meshRef.current.material.distort = THREE.MathUtils.lerp(
      meshRef.current.material.distort,
      reduced ? state.distort * 0.4 : state.distort,
      0.04
    )
    meshRef.current.material.speed = THREE.MathUtils.lerp(
      meshRef.current.material.speed,
      reduced ? 0.3 : state.speed,
      0.04
    )
  })

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[1.4, 4]}>
        <MeshDistortMaterial
          color={state.color}
          attach="material"
          distort={state.distort}
          speed={state.speed}
          roughness={0.35}
          metalness={0.6}
          envMapIntensity={0.8}
        />
      </Icosahedron>

      <Icosahedron ref={wireRef} args={[1.85, 1]}>
        <meshBasicMaterial
          color={state.color}
          wireframe
          transparent
          opacity={0.18}
        />
      </Icosahedron>
    </group>
  )
}