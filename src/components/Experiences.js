import React from "react";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            experiences
          </h1>
          <p className="mb-8 leading-relaxed">
          Hi! 👋 I'm a software engineer currently looking for open roles. Previously, I worked at DoorDash on the Category Expansion team. 
          I attended Princeton University, majoring in Operations Research and Financial Engineering with a minor in computer science.
          </p>
        </div>
      </div>
    </section>
  );
}