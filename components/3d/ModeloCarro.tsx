'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Stage } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { GLTFLoader } from 'three-stdlib'
import * as THREE from 'three'

function CarModel() {
  const gltf = useLoader(GLTFLoader, '/toyota_supra_a90_3d_printeble_model.glb')
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(gltf.scene)
      gltf.animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip)?.play()
      })
    }
  }, [gltf])

  useFrame((_, delta) => {
    mixerRef.current?.update(delta)
  })

  return <primitive object={gltf.scene} scale={0.6} />
}

export default function ModeloCarro() {
  return (
    <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden bg-neutral-900">
      <Canvas camera={{ position: [0, 1, 4], fov: 40 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Stage intensity={0.8} shadows environment="city">
            <CarModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
