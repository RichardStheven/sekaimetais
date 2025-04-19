/* eslint-disable @typescript-eslint/no-unused-vars */


'use client'

import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function LaserLine() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { camera, gl, scene } = useThree()
  const [mouse, setMouse] = useState(new THREE.Vector2())
  const raycaster = new THREE.Raycaster()

  useFrame(() => {
    raycaster.setFromCamera(mouse, camera)

    // Intersecta com o plano (z = 0 ou y = 0 dependendo da rotação)
    const intersects = raycaster.intersectObjects(scene.children, false)

    const hit = intersects.find((i) => i.object.name === 'chapa')

    if (hit && meshRef.current) {
      const point = hit.point
      meshRef.current.position.set(point.x, point.y + 0.01, point.z)
    }
  })

  // Atualiza mouse
  useThree(({ gl }) => {
    gl.domElement.addEventListener('pointermove', (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMouse(new THREE.Vector2(x, y))
    })
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[0.3, 0.01]} />
      <meshBasicMaterial color="red" transparent opacity={0.9} />
    </mesh>
  )
}
