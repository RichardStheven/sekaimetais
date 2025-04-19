'use client'

import { useState } from 'react'

import Hero from '@/components/sections/Hero'
import Estatisticas from '@/components/sections/Estatisticas'
import Sobre from '@/components/sections/Sobre'
import Pilares from '@/components/sections/Pilares'
import CanvasArea from '@/components/simulador/CanvasArea'
import Interface from '@/components/simulador/Interface'
import Footer from '@/components/Footer'



export default function Home() {
  const [cut, setCut] = useState(false) // 👈 AQUI

  return (
    <main>
      <Hero />
      <Estatisticas />
      <Sobre />
      <Pilares />

      <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center gap-6 p-6">
        <h1 className="text-2xl font-bold text-orange-500">Simulador de Corte e Dobra</h1>
        <CanvasArea cut={cut} />
        <Interface setCut={setCut} />
      </div>
      <Footer />
    </main>
  )
}
