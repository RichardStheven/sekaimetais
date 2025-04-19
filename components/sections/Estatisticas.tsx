import { FaUsers, FaCheckCircle, FaAward } from 'react-icons/fa'

export default function Estatisticas() {
  return (
<section className="relative z-[9999] bg-[#12121200] text-white -mt-10 px-6" id="estatisticas">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        
        {/* Card 1 */}
        <div className="bg-[#1c1c1c] border border-neutral-700 rounded shadow-lg p-6 space-y-2 hover:border-orange-500 transition">
          <FaUsers className="mx-auto text-3xl text-orange-500" />
          <h3 className="text-3xl font-bold">1500+</h3>
          <p className="text-sm text-gray-300">Clientes Atendidos</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1c1c1c] border border-neutral-700 rounded shadow-lg p-6 space-y-2 hover:border-orange-500 transition">
          <FaCheckCircle className="mx-auto text-3xl text-orange-500" />
          <h3 className="text-3xl font-bold">2500+</h3>
          <p className="text-sm text-gray-300">Projetos Finalizados</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1c1c1c] border border-neutral-700 rounded shadow-lg p-6 space-y-2 hover:border-orange-500 transition">
          <FaAward className="mx-auto text-3xl text-orange-500" />
          <h3 className="text-3xl font-bold">15+</h3>
          <p className="text-sm text-gray-300">Anos no Setor de Blindagem</p>
        </div>

      </div>
    </section>
  )
}
