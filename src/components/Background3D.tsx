import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleWaves() {
  const ref = useRef<THREE.Points>(null!)
  const stride = 3
  const numParticles = 2000
  
  const positions = useMemo(() => {
    const pos = new Float32Array(numParticles * stride)
    for (let i = 0; i < numParticles; i++) {
      pos[i * stride] = (Math.random() - 0.5) * 10
      pos[i * stride + 1] = (Math.random() - 0.5) * 10
      pos[i * stride + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.05
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={stride} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function Background3D() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#1A1A1A']} />
        <ambientLight intensity={0.5} />
        <ParticleWaves />
      </Canvas>
    </div>
  )
}
