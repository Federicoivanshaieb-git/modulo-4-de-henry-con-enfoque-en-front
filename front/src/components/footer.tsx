

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#D3D3D3] border-t-4 border-black py-8 mt-12 font-(family-name:--font-vt323)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="text-2xl font-bold uppercase tracking-tighter text-black">
          © 1984-2026 / FEDERICO IVAN SHAIEB
        </div>

        
        <div className="flex gap-4">
          
          <a 
            href="https://github.com/Federicoivanshaieb-git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black border-2 border-black px-4 py-2 text-xl font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1"
          >
            GITHUB
          </a>
          <a 
            href="https://www.instagram.com/federicoshaieb/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black border-2 border-black px-4 py-2 text-xl font-bold hover:bg-[#E1306C] hover:text-white transition-colors shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
