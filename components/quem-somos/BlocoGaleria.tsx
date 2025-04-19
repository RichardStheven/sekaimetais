'use client'

import Image from 'next/image'
import { useState } from 'react'

const imagens = [
  '/galeria1.webp',
  '/galeria2.webp',
  '/galeria3.webp',
  '/galeria4.webp',
]

export default function BlocoGaleria() {
  const [index, setIndex] = useState(0)

  const proxima = () => setIndex((index + 1) % imagens.length)
  const anterior = () => setIndex((index - 1 + imagens.length) % imagens.length)

  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Bastidores da Produção</h2>
      <p className="text-gray-400 mb-10 max-w-2xl">
        Conheça de perto nossa estrutura e o dia a dia da Sekai Metais. Tecnologia, precisão e dedicação em cada detalhe.
      </p>

      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={imagens[index]}
          alt={`Foto da fábrica ${index + 1}`}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full h-auto"
        />
        <div className="flex justify-between mt-4">
          <button onClick={anterior} className="text-orange-500 hover:underline">← Anterior</button>
          <button onClick={proxima} className="text-orange-500 hover:underline">Próxima →</button>
        </div>
      </div>
    </section>
  )
}
