import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 h-5/6">
          <img
            className="object-cover object-center rounded-full object-scale-down h-70 w-70"
            alt="hero"
            src="./profile.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
          <h1 className="title-font font-mono font-bold text-green sm:text-4xl text-3xl mb-4 text-white">
            about me
          </h1>
          <p className="mb-8 leading-relaxed font-mono">
            Hi! 👋 I'm a software engineer currently looking for open roles. Previously, I worked at DoorDash on the Category Expansion team, 
            working to expand DoorDash to include new vertical such as alcohol, retail, and pharmaceutical goods. 
            I attended Princeton University and graduated in 2021, majoring in Operations Research and Financial Engineering with a minor in computer science.
            <br/> <br/> In my spare time, I enjoy writing music, surfing, hanging out with friends and I try to run but don't really find that enjoyable.
          </p>
          <div className="flex space-x-10"> 
            <a href="jennygzma@gmail.com" className="text-light-green hover:font-bold">[email]</a>
            <a href="https://github.com/jennygzma" className="text-light-green hover:font-bold">[github]</a>
            <a href="https://www.linkedin.com/in/jenny-ma-191b44143/" className="text-light-green hover:font-bold">[linkedin]</a>
          </div>
        </div>
      </div>
    </section>
  );
}