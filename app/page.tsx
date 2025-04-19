import Hero from '@/components/sections/Hero'
import Estatisticas from '@/components/sections/Estatisticas'
import Sobre from '@/components/sections/Sobre'
import  Pilares from '@/components/sections/Pilares'



export default function Home() {
  return (
    <main>
      <Hero />
      <Estatisticas />
      <Sobre />
      <Pilares />
      {/* Outras seções virão aqui */}
    </main>
  )
}
