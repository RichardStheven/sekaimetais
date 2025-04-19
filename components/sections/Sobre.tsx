'use client'
import ModeloCarro from '@/components/3d/ModeloCarro'

export default function Sobre() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-16" id="quem-somos">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-start md:items-center">
        
        {/* Modelo 3D */}
        <div className="w-full h-72 md:h-96 flex justify-center items-center rounded-lg overflow-hidden bg-neutral-900">
          <ModeloCarro />
        </div>

        {/* Texto institucional */}
        <div className="space-y-6 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            Blindagem é com quem entende de aço e precisão.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Com mais de <strong>15 anos de experiência no setor de blindagem automotiva</strong>, a Sekai Metais surge como uma frente especializada em <strong>corte e dobra de aço balístico</strong>. Nosso foco é fornecer soluções técnicas com exatidão milimétrica e acabamento industrial para as principais blindadoras de São Paulo.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Entregamos estruturas personalizadas para proteção veicular com <strong>materiais certificados</strong>, logística ágil e suporte técnico. Corte a laser, dobras sob medida e atendimento consultivo são apenas o começo da nossa entrega. <br />
            Sekai Metais é precisão. É blindagem levada a sério.
          </p>
          <a
            href="#contato"
            className="inline-block mt-4 bg-orange-500 text-black font-semibold px-6 py-3 rounded hover:bg-orange-400 transition"
          >
            Falar com o time técnico
          </a>
        </div>
      </div>
    </section>
  )
}
