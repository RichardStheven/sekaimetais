'use client'

export default function TrabalheConoscoHero() {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Imagem */}
      <div className="w-full h-72 bg-neutral-800 rounded-lg shadow-inner flex items-center justify-center">
        <span className="text-gray-500 text-sm">Imagem da equipe aqui</span>
      </div>

      {/* Texto e indicadores */}
      <div className="space-y-6">
        <span className="text-sm uppercase tracking-widest text-orange-500">Equipe</span>
        <h2 className="text-4xl font-bold leading-tight">
          Trabalhe com os melhores,<br />faça parte do nosso time!
        </h2>
        <p className="text-gray-300 text-lg">
          Estamos em constante crescimento e buscamos talentos que queiram evoluir com a gente. Nossa equipe é formada por profissionais especializados, focados em qualidade, agilidade e inovação no setor de blindagem.
        </p>

        {/* Indicadores */}
        <div className="space-y-3 text-sm text-white">
          <div>
            <div className="flex justify-between font-semibold">
              <span>Profissionais Especializados</span>
              <span>97%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded">
              <div className="h-2 bg-orange-500 rounded w-[97%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-semibold">
              <span>Problemas Resolvidos</span>
              <span>92%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded">
              <div className="h-2 bg-orange-500 rounded w-[92%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-semibold">
              <span>Postos Preenchidos</span>
              <span>85%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded">
              <div className="h-2 bg-orange-500 rounded w-[85%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}