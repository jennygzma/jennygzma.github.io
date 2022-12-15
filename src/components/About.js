import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-2/5 md:w-1/4 h-2/6 items-center">
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            alt="jm"
            src="./profile.png"
          />
          <div className="mx-auto flex py-10 space-x-4 justify-center">
            <a href="mailto:jennygzma@gmail.com" className="text-light-green font-semibold hover:font-bold">[email]</a>
            <a href="https://github.com/jennygzma" className="text-light-green font-semibold hover:font-bold">[github]</a>
            <a href="https://www.linkedin.com/in/jenny-ma-191b44143/" className="text-light-green font-semibold hover:font-bold">[linkedin]</a>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
          <h1 className="title-font font-mono font-semibold text-green sm:text-4xl text-3xl mb-4">
            about me
          </h1>
          <p className="mb-8 leading-relaxed font-mono">
            Hi! 👋 I'm a software engineer, born and raised in SF bay area, but currently based in NYC looking for open roles. Previously, I worked at <strong className="text-light-green">DoorDash </strong> 
            on the Category Expansion team as a <strong className="text-light-green">backend SWE</strong>, working to expand DoorDash to include new verticals 
            such as alcohol, retail, and pharmaceutical goods. I attended <strong className="text-light-green">Princeton University</strong> for undergrad and 
            majored in <strong className="text-light-green">Operations Research and Financial Engineering</strong> with a minor in <strong className="text-light-green">computer science</strong>.
            <br/> <br/> For my next role, I'm open to remote, NYC, or SF-based backend engineering, and am also open to full-stack. My main goal is to join a company where
            I am aligned with the product and have opportunity for ownership and impact. Feel free to <a href="mailto:jennygzma@gmail.com" className="text-light-green font-semibold hover:font-bold">[email me] </a> 
            if you want my resume, letters of rec from my previous managers/teammates, or just to chat!
            <br/> <br/> In my spare time, I enjoy writing music, surfing, and hanging out with friends. I also try to run daily but don't really find that enjoyable  😬 
          </p>
        </div>
      </div>
    </section>
  );
}