import { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialMediaBox from "./SocialMediaBox";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center items-center sticky top-0 z-[50] inter bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="py-4 w-[90%] max-w-[1440px] flex gap-2.5 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 lobster-regular leading-tight">
              Bunzo
            </h1>
            <p className="text-xs text-emerald-600 font-semibold tracking-wide">
              Egyptian Street Burgers
            </p>
          </div>
        </div>

        <button
          className="sm:hidden flex flex-col gap-1.5 items-center justify-center w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        <div className={`fixed inset-0 bg-black/40 z-[55] sm:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} />

        <nav className={`flex flex-col sm:flex-row gap-1 fixed top-0 right-0 h-screen w-72 sm:w-auto sm:h-auto sm:static bg-white sm:bg-gray-50/80 sm:backdrop-blur-sm shadow-2xl sm:shadow-none p-8 pt-20 sm:p-1.5 sm:rounded-full sm:border sm:border-gray-200/80 transition-transform duration-300 ease-in-out z-[60] ${isMenuOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}>
          <button className="sm:hidden absolute top-6 right-6 w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 bg-gray-100 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {[
            { to: "/", label: "Home", end: true },
            { to: "/burgers", label: "Menu", end: false },
            { to: "/blog", label: "Blog", end: false },
            { to: "/contact", label: "Contact", end: false },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 py-2 px-4 rounded-full ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden sm:block">
          <SocialMediaBox />
        </div>
      </div>
    </header>
  );
}
