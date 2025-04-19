'use client'

import * as THREE from 'three'
import { Line } from '@react-three/drei'

type Props = {
  points: THREE.Vector3[]
}

export default function CorteLivre({ points }: Props) {
  if (points.length < 2) return null

  return (
    <Line
      points={points}
      color="red"
      lineWidth={2}
      transparent
      opacity={0.8}
      dashed={false}
    />
  )
}
