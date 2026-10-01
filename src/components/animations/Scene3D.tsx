import { useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

const DESKTOP_QUERY = '(min-width: 768px)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/** Ocean blues from the design tokens, kept translucent so type stays readable. */
const OCEAN = ['#42A5F5', '#1E88E5', '#90CAF9', '#1565C0'] as const

interface ShapeSpec {
  kind: 'sphere' | 'box' | 'octahedron'
  position: [number, number, number]
  scale: number
  color: string
  opacity: number
  speed: number
  phase: number
  drift: number
}

const SHAPES: ShapeSpec[] = [
  { kind: 'sphere', position: [-4.2, 1.4, -2], scale: 0.72, color: OCEAN[0], opacity: 0.22, speed: 0.18, phase: 0.4, drift: 0.28 },
  { kind: 'box', position: [3.6, -1.1, -3], scale: 0.62, color: OCEAN[1], opacity: 0.16, speed: 0.12, phase: 1.2, drift: 0.22 },
  { kind: 'octahedron', position: [-2.1, -1.8, -1.5], scale: 0.55, color: OCEAN[2], opacity: 0.2, speed: 0.15, phase: 2.1, drift: 0.18 },
  { kind: 'sphere', position: [4.4, 1.8, -4], scale: 0.9, color: OCEAN[3], opacity: 0.14, speed: 0.1, phase: 0.8, drift: 0.32 },
  { kind: 'box', position: [0.6, 2.2, -2.5], scale: 0.42, color: OCEAN[0], opacity: 0.18, speed: 0.16, phase: 3.0, drift: 0.16 },
  { kind: 'octahedron', position: [-5.1, -0.4, -3.5], scale: 0.48, color: OCEAN[1], opacity: 0.15, speed: 0.11, phase: 1.7, drift: 0.2 },
  { kind: 'sphere', position: [1.8, -2.3, -2], scale: 0.58, color: OCEAN[2], opacity: 0.17, speed: 0.14, phase: 2.6, drift: 0.24 },
]

function FloatingShape({ spec, paused }: { spec: ShapeSpec; paused: boolean }) {
  const [mesh, setMesh] = useState<Mesh | null>(null)

  useFrame(({ clock }) => {
    if (!mesh || paused) return
    const t = clock.elapsedTime
    mesh.rotation.x = t * spec.speed
    mesh.rotation.y = t * spec.speed * 0.7
    mesh.position.y = spec.position[1] + Math.sin(t * spec.speed + spec.phase) * spec.drift
  })

  return (
    <mesh ref={setMesh} position={spec.position} scale={spec.scale}>
      {spec.kind === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      {spec.kind === 'box' && <boxGeometry args={[1.4, 1.4, 1.4]} />}
      {spec.kind === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial color={spec.color} transparent opacity={spec.opacity} depthWrite={false} />
    </mesh>
  )
}

function Shapes({ paused }: { paused: boolean }) {
  const shapes = useMemo(() => SHAPES, [])
  return (
    <>
      {shapes.map((spec) => (
        <FloatingShape key={`${spec.kind}-${spec.phase}`} spec={spec} paused={paused} />
      ))}
    </>
  )
}

/**
 * Subtle ocean-blue geometry behind the hero. Desktop only, no interaction,
 * no lights or shadows — meshBasicMaterial keeps the frame cost flat.
 */
export function Scene3D() {
  const [desktop, setDesktop] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const desktopMql = window.matchMedia(DESKTOP_QUERY)
    const motionMql = window.matchMedia(REDUCED_MOTION_QUERY)
    const sync = () => {
      setDesktop(desktopMql.matches)
      setReduced(motionMql.matches)
    }
    sync()
    desktopMql.addEventListener('change', sync)
    motionMql.addEventListener('change', sync)
    return () => {
      desktopMql.removeEventListener('change', sync)
      motionMql.removeEventListener('change', sync)
    }
  }, [])

  if (!desktop) return null

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        frameloop={reduced ? 'demand' : 'always'}
        style={{ width: '100%', height: '100%' }}
      >
        <Shapes paused={reduced} />
      </Canvas>
    </div>
  )
}
