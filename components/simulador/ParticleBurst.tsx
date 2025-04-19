'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Props = {
  position: THREE.Vector3
}

export default function ParticleBurst({ position }: Props) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const count = 30
  const velocities = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.2,
      y: Math.random() * 0.2 + 0.1,
      z: (Math.random() - 0.5) * 0.2,
    }))
  )

  const dummy = new THREE.Object3D()
  const lifetime = useRef(0)

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      dummy.position.set(position.x, position.y, position.z)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  }, [position])

  useFrame((_, delta) => {
    lifetime.current += delta
    if (lifetime.current > 1.5 && ref.current) {
      ref.current.visible = false
    }

    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3()
      ref.current.getMatrixAt(i, dummy.matrix)
      dummy.matrix.decompose(pos, new THREE.Quaternion(), new THREE.Vector3())

      pos.x += velocities.current[i].x
      pos.y += velocities.current[i].y
      pos.z += velocities.current[i].z
      velocities.current[i].y -= 0.01

      dummy.position.set(pos.x, pos.y, pos.z)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }

    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshStandardMaterial color="orange" emissive="#ffaa33" emissiveIntensity={1.5} />
    </instancedMesh>
  )
}
