'use client'

import { useEffect, useRef } from 'react'

export default function Topo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 // slow motion
    }
  }, [])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* 🎥 Vídeo de fundo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/sekai.mov" type="video/mp4" />
      </video>

      {/* 🌓 Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-90" />

      {/* Conteúdo */}
      <div className="relative z-10 px-8 md:px-20 py-24 text-white">
        <span className="text-sm text-gray-300">Home &gt; Quem Somos</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Sobre a Sekai Metais</h1>
        <p className="text-lg text-gray-300 mt-2">
          Saiba mais sobre nossa história e serviços.
        </p>
      </div>
    </section>
  )
}
