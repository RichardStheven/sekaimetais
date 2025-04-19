'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles() {
  const count = 150
  const ref = useRef<THREE.InstancedMesh>(null!)

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const velocities = useMemo(() => (
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.2,
      y: Math.random() * 0.2 + 0.1,
      z: (Math.random() - 0.5) * 0.2,
    }))
  ), [count])

  // Inicializa posições
  useMemo(() => {
    for (let i = 0; i < count; i++) {
      dummy.position.set(0, 0, 0)
      dummy.updateMatrix()
      ref.current?.setMatrixAt(i, dummy.matrix)
    }
  }, [dummy, count])

  // Atualiza partículas a cada frame
  useFrame(() => {
    if (!ref.current) return

    const matrix = new THREE.Matrix4()
    const position = new THREE.Vector3()

    for (let i = 0; i < count; i++) {
      ref.current.getMatrixAt(i, matrix)
      matrix.decompose(position, new THREE.Quaternion(), new THREE.Vector3())

      // Aplica velocidade
      position.x += velocities[i].x
      position.y += velocities[i].y
      position.z += velocities[i].z
      velocities[i].y -= 0.01 // gravidade

      dummy.position.set(position.x, position.y, position.z)
      dummy.updateMatrix()
      ref.current.setMatrixAt(i, dummy.matrix)
    }

    ref.current.instanceMatrix.needsUpdate = true
  })

  // Remove depois de um tempo
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current && t > 2) {
      ref.current.visible = false
    }
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshStandardMaterial
        color="orange"
        emissive="#ffaa33"
        emissiveIntensity={1.5}
        metalness={0.7}
        roughness={0.1}
      />
    </instancedMesh>
  )
}
