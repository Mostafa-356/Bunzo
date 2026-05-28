import { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialMediaBox from "./SocialMediaBox";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-center items-center sticky top-0 z-[50] backdrop-blur-3xl inter border-b border-black/20 bg-white">
      <div className="py-8 w-[90%] max-w-[1440px] flex gap-2.5 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 lobster-regular">
              Bunzo
            </h1>
            <p className="text-xs md:text-sm text-emerald-600 font-medium">
              Egyptian Street Burgers
            </p>
          </div>
        </div>

        <button
          className="sm:hidden flex flex-col gap-1.5 items-center justify-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-full h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Backdrop overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-[55] sm:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <nav
          className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 fixed top-0 right-0 h-screen w-72 sm:w-auto sm:h-auto sm:static bg-white sm:bg-transparent shadow-2xl sm:shadow-none p-8 pt-20 sm:p-0 transition-transform duration-300 ease-in-out z-[60] ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full sm:translate-x-0"
          }`}
        >
          {/* Close button inside the menu */}
          <button
            className="sm:hidden absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-xs sm:text-sm md:text-base transition-colors py-1 md:py-2 px-2 md:px-3 rounded-lg ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-800 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to={"/burgers"}
            className={({ isActive }) =>
              `text-xs sm:text-sm md:text-base transition-colors py-1 md:py-2 px-2 md:px-3 rounded-lg ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-800 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              `text-xs sm:text-sm md:text-base transition-colors py-1 md:py-2 px-2 md:px-3 rounded-lg ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-800 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `text-xs sm:text-sm md:text-base transition-colors py-1 md:py-2 px-2 md:px-3 rounded-lg ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-800 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden sm:block">
          <SocialMediaBox />
        </div>
      </div>
    </header>
  );
}
