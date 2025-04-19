'use client'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 text-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h2 className="text-white font-bold text-lg">Informações da Empresa</h2>
          <p>Razão Social: Sekai Distribuidora de Produtos Ltda</p>
          <p>CNPJ: 46.461.045/0001-64</p>
          <p>Telefone: (11) 94722-1819 / (11) 2091-1687</p>
          <p>E-mail: <a href="mailto:vendas@sekaidt.com.br" className="underline hover:text-white">vendas@sekaidt.com.br</a></p>
        </div>

        <div className="space-y-2">
          <p>Endereço: Largo São José do Maranhão, 221 - Maranhão, São Paulo - SP</p>
          <p>CEP: 03089-010</p>
          <p>Atendimento: Segunda a sexta, das 08h às 17h</p>
          <p>
            Loja Online:{' '}
            <a
              href="https://sekaidistribuidora.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 underline"
            >
              sekaidistribuidora.com.br
            </a>
          </p>
        </div>
      </div>

      <div className="bg-neutral-800 text-center py-4 text-xs text-gray-400 tracking-wide flex flex-col md:flex-row items-center justify-center gap-1">
        <span>© 2025 Sekai Distribuidora de Produtos Ltda.</span>
        <span>Desenvolvido por <strong className="text-white">Brava Comunicação</strong></span>
      </div>
    </footer>
  )
}
