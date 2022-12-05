import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap px-10 py-20 flex-col md:flex-row items-center">
        <a className="title-font font-mono font-semibold text-green hover:font-bold mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-5xl">
            jenny ma
          </a>
        </a>
        <div className="ml-auto lg:w-2/5">
          <nav className="md:mr-auto md:ml-4 md:py-1	flex flex-wrap items-center text-base justify-center">
            <div>
              <a href="#experiences" className="mr-5 font-mono text-green hover:font-semibold">
                experiences
              </a>
            </div>
            <div>
              <a href="#news" className="mr-5 font-mono text-green hover:font-semibold">
                news
              </a>
            </div>
            <div>
              <a href="#blog" className="mr-5 font-mono text-green hover:font-semibold">
                cs blog
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}