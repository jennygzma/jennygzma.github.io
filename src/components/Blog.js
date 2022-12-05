import React from "react";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-mono font-semibold text-green sm:text-4xl text-3xl mb-4">
            cs blog
          </h1>
          <p className="mb-8 leading-relaxed">
            ✨ coming soon! ✨
          </p>
        </div>
      </div>
    </section>
  );
}