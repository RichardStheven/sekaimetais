'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Props = {
  id: number
}

export default function FragmentoCortado({ id }: Props) {
  const ref = useRef<THREE.Mesh>(null!)
  const velocidade = useRef(Math.random() * 0.02 + 0.01)
  const rotacao = useRef(Math.random() * 0.02 + 0.01)

  useFrame(() => {
    if (!ref.current) return

    // move para baixo
    ref.current.position.y -= velocidade.current
    ref.current.rotation.z += rotacao.current
  })

  return (
    <mesh
      ref={ref}
      position={[
        (Math.random() - 0.5) * 2, // X aleatório
        0.01,
        (Math.random() - 0.5) * 2, // Z aleatório
      ]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[0.6, 0.6]} />
      <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
    </mesh>
  )
}
