import Topo from '@/components/quem-somos/Topo'
import BlocoHistoria from '@/components/quem-somos/BlocoHistoria'
import BlocoQualidade from '@/components/quem-somos/BlocoQualidade'
import BlocoParcerias from '@/components/quem-somos/BlocoParcerias'
import BlocoContato from '@/components/quem-somos/BlocoContato'
import Footer from '@/components/Footer'
import BlocoGaleria from '@/components/quem-somos/BlocoGaleria'

export default function QuemSomosPage() {
  return (
    <main>
      <Topo />
      <BlocoHistoria />
      <BlocoQualidade />
      <BlocoParcerias />
      <BlocoContato />
      <BlocoGaleria />
      {/* Próximos blocos virão aqui */}
       <Footer />
    </main>
  )
}
