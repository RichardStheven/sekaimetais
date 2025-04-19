'use client'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-start text-white overflow-hidden">
      {/* Fundo em GIF */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/fundo-corte.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em background.
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 px-8 md:px-20 max-w-4xl space-y-4">
        <span className="text-sm uppercase tracking-widest text-gray-300">
          Corte e Dobra de Aço Balístico
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Mais de 15 anos com as principais blindadoras de SP.  
          Agora também com corte e dobra de precisão.
        </h1>
        <p className="text-gray-200 max-w-lg">
          A Sekai Metais une know-how no mercado de blindagem com tecnologia de ponta em aço balístico.
        </p>
        <a
          href="#contato"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Solicitar Cotação
        </a>
      </div>
    </section>
  )
}
