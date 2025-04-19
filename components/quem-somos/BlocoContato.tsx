'use client'

export default function BlocoContato() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 md:px-32 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Entre em contato conosco <br className="hidden md:block" /> e descubra como podemos ajudar
        </h2>
        <p className="text-gray-400 text-lg pt-2">
          Impulsione o seu projeto com soluções sob medida em corte e dobra. Com a Sekai Metais, sua satisfação é garantida.
        </p>
      </div>
      <a
        href="https://wa.me/5511940359451"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-400 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition"
      >
        Fale Conosco
      </a>
    </section>
  )
}