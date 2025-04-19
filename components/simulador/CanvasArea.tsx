/* eslint-disable @typescript-eslint/no-unused-vars */


'use client'


import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import Particles from './Particles'
import LaserLine from './LaserLine'
import ParticleBurst from './ParticleBurst'
import CorteLivre from './CorteLivre'
import FragmentoCortado from './FragmentoCortado'
import * as THREE from 'three'
import { Environment } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'



type Props = {
  cut: boolean
}

export default function CanvasArea({ cut }: Props) {
  const [bursts, setBursts] = useState<THREE.Vector3[]>([])
  const [drawing, setDrawing] = useState(false)
  const [cortePontos, setCortePontos] = useState<THREE.Vector3[]>([])
  const [cortes, setCortes] = useState<number[]>([])
  const [dividido, setDividido] = useState(false)

  return (
    <div className="w-full max-w-5xl h-[400px] bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={1} />
        <pointLight position={[0, 2, 2]} intensity={1} />

        {/* Chapa metálica única */}
        {!dividido && (
  <mesh
    name="chapa"
    rotation={[-Math.PI / 2, 0, 0]}
    onPointerDown={() => {
      if (cut && cortes.length < 6) {
        setDrawing(true)
        setCortePontos([])
      }
    }}
    onPointerUp={() => {
      if (cut && drawing && cortes.length < 6) {
        setDrawing(false)
        setCortes((prev) => [...prev, prev.length])
      }
    }}
    onPointerMove={(e) => {
      if (!cut || !drawing) return
      const point = e.point
      setCortePontos((prev) => [...prev, point.clone()])
    }}
    onClick={() => setDividido(true)} // divide ao clicar
  >
    <planeGeometry args={[2.5, 2.5]} />
    <meshStandardMaterial color="#666" metalness={1} roughness={0.2} envMapIntensity={1} />
  </mesh>
)}


{dividido && (
  <>
    <a.mesh
      position={[-1.3, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[1.25, 2.5]} />
      <meshStandardMaterial color="#666" metalness={1} roughness={0.2} envMapIntensity={1} />
    </a.mesh>

    <a.mesh
      position={[1.3, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[1.25, 2.5]} />
      <meshStandardMaterial color="#666" metalness={1} roughness={0.2} envMapIntensity={1} />
    </a.mesh>
  </>
)}

        {/* Laser segue cursor */}
        {cut && <LaserLine />}

        {/* Linha de corte livre */}
        {cut && <CorteLivre points={cortePontos} />}

        {/* Partículas ao clicar */}
        {cut &&
          bursts.map((pos, index) => (
            <ParticleBurst key={index} position={pos} />
          ))}

        {/* Fragmentos cortados */}
        {cut &&
          cortes.map((id) => (
            <FragmentoCortado key={id} id={id} />
          ))}

<OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
    
<Environment preset="warehouse" />

    
      </Canvas>
    </div>
  )
}
