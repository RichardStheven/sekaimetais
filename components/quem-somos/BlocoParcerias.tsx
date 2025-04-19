'use client'

export default function BlocoParcerias() {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Texto institucional */}
      <div className="space-y-6">
        <span className="text-sm uppercase tracking-widest text-orange-500">
          Parcerias
        </span>
        <h2 className="text-4xl font-bold leading-tight">
          Fornecimento de materiais de alta qualidade
          <br /> com agilidade e confiança.
        </h2>
        <p className="text-gray-300 text-lg">
          Contamos com mais de <strong>50 colaboradores</strong> e uma rede consolidada de fornecedores para garantir matéria-prima de alto desempenho em <strong>aço balístico</strong> e outros insumos industriais.
        </p>
        <p className="text-gray-400 text-sm">
          Com atuação personalizada, atendemos projetos sob medida com excelência técnica, entregas rápidas e compromisso com a qualidade final. Conte com a Sekai Metais como seu parceiro de confiança para produções sob demanda.
        </p>
      </div>

      {/* Imagem (a ser inserida depois) */}
      <div className="w-full h-72 bg-neutral-800 rounded-lg shadow-inner flex items-center justify-center">
        <span className="text-gray-500 text-sm">Imagem do processo / equipe aqui</span>
      </div>
    </section>
  )
}
