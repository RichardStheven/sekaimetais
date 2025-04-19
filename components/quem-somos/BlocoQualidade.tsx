'use client'

export default function BlocoQualidade() {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Imagem da direita */}
      <div className="w-full h-72 bg-neutral-800 rounded-lg shadow-inner flex items-center justify-center">
        {/* Espaço reservado para a imagem futura */}
        <span className="text-gray-500 text-sm">Imagem do projeto/metálico aqui</span>
      </div>

      {/* Texto institucional */}
      <div className="space-y-6">
        <span className="text-sm uppercase tracking-widest text-orange-500">
          Excelência e Qualidade
        </span>
        <h2 className="text-4xl font-bold leading-tight">
          Excelência em cada<br /> projeto executado.
        </h2>
        <p className="text-gray-300 text-lg">
          Atuamos em uma estrutura especializada, com equipamentos industriais de ponta e equipe técnica qualificada para atender as mais rigorosas demandas de corte e dobra em <strong>aço balístico</strong>. Nossa agilidade é um diferencial competitivo.
        </p>
        <p className="text-gray-400 text-sm">
          Confie na Sekai Metais para execuções sob medida, com acabamento impecável, segurança de entrega e suporte consultivo desde o projeto até a entrega.
        </p>
      </div>
    </section>
  )
}
