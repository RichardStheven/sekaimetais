export default function TopBar() {
  return (
    <div className="bg-[#121212] text-white text-xs md:text-sm py-1.5 px-6 flex justify-between items-center border-b border-neutral-800">
      <div className="flex gap-6 items-center">
        <span>📞 (11) 94722-1819</span>
        <span>✉ vendas@sekaidt.com.br</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">Siga-nos:</span>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sekaidistribuicaoetecnologia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-orange-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white hover:fill-orange-500" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1.1.7 1.6 1.3.4.4.8 1 .9 1.6.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1.1-1.3 1.6-.4.4-1 .8-1.6.9-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1.1-.7-1.6-1.3-.4-.4-.8-1-.9-1.6-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.7-1.1 1.3-1.6.4-.4 1-.8 1.6-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm6.4-0.4a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 18.4 5.4z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="http://linkedin.com/in/sekai-distribuidora-441a87361/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-orange-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white hover:fill-orange-500" viewBox="0 0 24 24">
            <path d="M20.447 20.452H17.2V15.6c0-1.154-.021-2.64-1.608-2.64-1.609 0-1.855 1.254-1.855 2.548v4.944H10.5V9h3.112v1.561h.044c.433-.82 1.49-1.682 3.065-1.682 3.278 0 3.882 2.158 3.882 4.967v6.606zM5.337 7.433a1.814 1.814 0 1 1 0-3.628 1.814 1.814 0 0 1 0 3.628zm1.639 13.019H3.697V9h3.279v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
