'use client'

import Image from 'next/image'

export default function BlocoHistoria() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Texto institucional */}
      <div className="space-y-6">
        <span className="text-sm uppercase tracking-widest text-orange-500">A Sekai Metais</span>
        <h2 className="text-4xl font-bold leading-tight">
          Mais de 15 anos entregando <br /> excelência às principais blindadoras.
        </h2>
        <p className="text-lg text-gray-300">
          Fundada por visionários do setor automotivo e industrial, a Sekai Metais é uma unidade especializada em
          corte e dobra de <strong>aço balístico</strong>, com foco total em <strong>blindagem veicular</strong>.
        </p>
        <p className="text-gray-400">
          Nossa trajetória teve início em 2008, com a comercialização de componentes para blindadoras. Ao longo dos anos,
          consolidamos parcerias e expandimos nossa atuação com tecnologia, agilidade e atendimento consultivo. 
          Em 2024, surge a Sekai Metais: mais do que uma evolução, uma resposta à demanda por <strong>precisão milimétrica</strong>
          e <strong>eficiência industrial</strong>.
        </p>

        {/* Lista de diferenciais */}
        <div className="grid grid-cols-2 gap-4 text-sm pt-4 text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✔</span>
            Corte a laser de alta precisão
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✔</span>
            Dobras sob medida
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✔</span>
            Atendimento técnico
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">✔</span>
            Logística eficiente
          </div>
        </div>
      </div>

      {/* Imagem e selo */}
      <div className="relative">
        <Image
          src="/foto-fabrica.webp"
          alt="Chapa cortada na Sekai"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        <div className="absolute bottom-6 right-6 bg-black bg-opacity-80 text-white p-6 rounded-lg text-center shadow-md">
          <div className="text-3xl font-bold leading-none">15+</div>
          <div className="text-sm">anos de experiência</div>
        </div>
      </div>
    </section>
  )
}
