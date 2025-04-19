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
        <li><Link href="#quem-somos" className="hover:text-orange-500">Quem Somos</Link></li>
        <li><Link href="#servicos" className="hover:text-orange-500">Serviços</Link></li>
        <li><Link href="#diferenciais" className="hover:text-orange-500">Diferenciais</Link></li>
        <li><Link href="#trabalhe" className="hover:text-orange-500">Trabalhe Conosco</Link></li>
        <li><Link href="#contato" className="hover:text-orange-500">Contato</Link></li>
      </ul>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#1c1c1c] text-white text-sm flex flex-col gap-4 py-4 px-6 sm:hidden z-50 border-t border-neutral-700">
          <li><Link href="quem-somos" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Quem-Somos</Link></li>
          <li><Link href="#servicos" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Serviços</Link></li>
          <li><Link href="#diferenciais" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Diferenciais</Link></li>
          <li><Link href="#trabalhe" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Trabalhe Conosco</Link></li>
          <li><Link href="#contato" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Contato</Link></li>
        </ul>
      )}
    </nav>
  )
}
