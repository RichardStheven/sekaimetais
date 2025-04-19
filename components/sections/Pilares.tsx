export default function Pilares() {
    return (
      <section className="bg-[#1c1c1c] text-white py-20 px-6 md:px-16" id="pilares">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Texto principal */}
          <div className="space-y-6">
            <span className="text-sm uppercase text-orange-500 tracking-wider">
              Sekai Metais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Pilares</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Atuar no setor de blindagem exige mais do que força: exige inteligência, precisão e compromisso.  
              Nossos pilares sustentam a confiança das blindadoras que atendemos em São Paulo.
            </p>
            <a href="#servicos" className="inline-block bg-orange-500 text-black font-semibold px-6 py-3 rounded hover:bg-orange-400 transition">
              Conheça nossos serviços
            </a>
          </div>
  
          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-neutral-800 p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-sm text-orange-500 mb-1">01</p>
              <h3 className="font-bold text-lg">Precisão</h3>
              <hr className="my-2 border-orange-500 w-6" />
              <p className="text-sm text-gray-400">
                Corte e dobra com exatidão milimétrica, feitos para aplicações balísticas.
              </p>
            </div>
            <div className="bg-neutral-800 p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-sm text-orange-500 mb-1">02</p>
              <h3 className="font-bold text-lg">Agilidade</h3>
              <hr className="my-2 border-orange-500 w-6" />
              <p className="text-sm text-gray-400">
                Entrega rápida, com estrutura logística pensada para o setor automotivo blindado.
              </p>
            </div>
            <div className="bg-neutral-800 p-6 rounded shadow hover:shadow-lg transition">
              <p className="text-sm text-orange-500 mb-1">03</p>
              <h3 className="font-bold text-lg">Confiança</h3>
              <hr className="my-2 border-orange-500 w-6" />
              <p className="text-sm text-gray-400">
                Mais de 15 anos no mercado de blindagem com reputação sólida e técnica afiada.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  