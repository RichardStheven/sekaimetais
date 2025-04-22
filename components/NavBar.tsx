'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1c1c1c] border-b border-neutral-700 px-6 py-3 text-sm flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-white font-bold text-lg tracking-wide">
        SEKAI METAIS
      </div>

      {/* Ícone hamburguer (mobile) */}
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Menu Desktop */}
      <ul className="hidden sm:flex gap-6 text-white font-medium">
        <li><Link href="/quem-somos" className="hover:text-orange-500">Quem Somos</Link></li>
        <li><Link href="/servicos" className="hover:text-orange-500">Serviços</Link></li>
        <li><Link href="/trabalhe-conosco" className="hover:text-orange-500">Trabalhe Conosco</Link></li>
        <li><Link href="/contato" className="hover:text-orange-500">Contato</Link></li>
      </ul>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#1c1c1c] text-white text-sm flex flex-col gap-4 py-4 px-6 sm:hidden z-50 border-t border-neutral-700">
          <li><Link href="/quem-somos" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Quem Somos</Link></li>
          <li><Link href="/servicos" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Serviços</Link></li>
          <li><Link href="/trabalhe-conosco" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Trabalhe Conosco</Link></li>
          <li><Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Contato</Link></li>
          
          {/* Redes Sociais */}
          <li className="pt-4 border-t border-neutral-700">
            <span className="text-gray-400 uppercase text-xs tracking-widest mb-2 block">Siga-nos</span>
            <div className="flex gap-4 mt-1">
              <a href="https://www.instagram.com/sekaidistribuicaoetecnologia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white hover:fill-orange-500 transition" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1.1.7 1.6 1.3.4.4.8 1 .9 1.6.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1.1-1.3 1.6-.4.4-1 .8-1.6.9-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1.1-.7-1.6-1.3-.4-.4-.8-1-.9-1.6-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.7-1.1 1.3-1.6.4-.4 1-.8 1.6-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm6.4-0.4a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 18.4 5.4z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sekai-distribuidora-441a87361/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white hover:fill-orange-500 transition" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17.2V15.6c0-1.154-.021-2.64-1.608-2.64-1.609 0-1.855 1.254-1.855 2.548v4.944H10.5V9h3.112v1.561h.044c.433-.82 1.49-1.682 3.065-1.682 3.278 0 3.882 2.158 3.882 4.967v6.606zM5.337 7.433a1.814 1.814 0 1 1 0-3.628 1.814 1.814 0 0 1 0 3.628zm1.639 13.019H3.697V9h3.279v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      )}
    </nav>
  )
}
