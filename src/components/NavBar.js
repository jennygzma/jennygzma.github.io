import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-mono font-semibold text-green hover:font-bold mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            jenny ma
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experiences" className="mr-5 font-mono text-green hover:font-semibold">
            experiences
          </a>
          <a href="#news" className="mr-5 font-mono text-green hover:font-semibold">
            news
          </a>
          <a href="#blog" className="mr-5 font-mono text-green hover:font-semibold">
            cs blog
          </a>
        </nav>
      </div>
    </header>
  );
}