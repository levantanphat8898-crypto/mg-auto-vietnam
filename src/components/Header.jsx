import { useState } from 'react'

const navLinks = [
  { label: 'Dòng xe', href: '#san-pham' },
  { label: 'Khuyến mãi', href: '#khuyen-mai' },
  { label: 'Tư vấn', href: '#tu-van' },
  { label: 'Liên hệ', href: '#tu-van' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-mg-border/60 bg-mg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-white">
            MG
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-white/50 sm:inline">
            Bình Dương
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0394441713"
          className="hidden items-center gap-2 rounded-full bg-mg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-mg-red-dark md:flex"
        >
          <PhoneIcon />
          0394 441 713
        </a>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mở menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-mg-border bg-mg-dark px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-sm font-medium text-white/80"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0394441713"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-mg-red px-5 py-2.5 text-sm font-semibold text-white"
            >
              <PhoneIcon />
              0394 441 713
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
