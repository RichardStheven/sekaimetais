'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function EnviarCV() {
  return (
    <section className="bg-[#0B1C2C] text-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Texto à esquerda */}
      <div className="space-y-6">
        <span className="text-sm uppercase tracking-widest text-orange-500">Trabalhe Conosco</span>
        <h2 className="text-4xl font-bold leading-tight">
          Envie seu currículo <br /> para nossa equipe.
        </h2>
        <p className="text-gray-300 text-lg">
          Quer fazer parte do time da Sekai Metais? Envie seu currículo diretamente para nosso e-mail de recrutamento.
          Estamos sempre em busca de talentos para crescer junto com a gente.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:adm@sekaidt.com.br"
            className="bg-orange-500 text-black font-semibold px-6 py-3 rounded hover:bg-orange-400 transition"
          >
            Enviar currículo
          </a>
          <a
            href="https://wa.me/5511940359451"
            target="_blank"
            className="flex items-center gap-2 border border-green-400 text-green-400 font-semibold px-6 py-3 rounded hover:bg-green-400 hover:text-black transition animate-pulse"
          >
            <FaWhatsapp size={20} />
            Falar com Cayo
          </a>
        </div>
      </div>

      {/* Espaço reservado para imagem ou gráfico */}
      <div className="w-full h-72 bg-neutral-800 rounded-lg shadow-inner flex items-center justify-center">
        <span className="text-gray-500 text-sm">Espaço para imagem da equipe ou fábrica</span>
      </div>
    </section>
  )
}
