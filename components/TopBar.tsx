export default function TopBar() {
    return (
      <div className="bg-[#121212] text-white text-xs md:text-sm py-1.5 px-6 flex justify-between items-center border-b border-neutral-800">
        <div className="flex gap-6 items-center">
          <span>📞 (11) 94722-1819</span>
          <span>✉ vendas@sekaidt.com.br</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Siga-nos:</span>
          <a href="#" className="hover:text-orange-500 transition">📘</a>
          <a href="#" className="hover:text-orange-500 transition">📸</a>
        </div>
      </div>
    )
  }
  