import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 bg-white/30 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1.5">
          <Link
            to="/game"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/game-logo.jpg"
              className="h-10"
              alt="game-logo"
            />
     
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex  text-blue-500 items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:bg-neutral-primary">
              <li>
                <NavLink
                  to="/game"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-600 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  All Games
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/genre"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-600 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Genres
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
