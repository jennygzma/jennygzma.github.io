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
            <a
              href="mailto:jennygzma@gmail.com"
              className="text-light-green font-semibold hover:font-bold"
            >
              [email]
            </a>
            <a
              href="https://github.com/jennygzma"
              className="text-light-green font-semibold hover:font-bold"
            >
              [github]
            </a>
            <a
              href="https://www.linkedin.com/in/jenny-ma-191b44143/"
              className="text-light-green font-semibold hover:font-bold"
            >
              [linkedin]
            </a>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
          <h1 className="title-font font-mono font-semibold text-green sm:text-4xl text-3xl mb-4">
            about me
          </h1>
          <p className="mb-8 leading-relaxed font-mono">
            Hi! 👋 I'm a full stack software engineer, born and raised in SF bay
            area, but currently based in NYC working at a series A devex startup
            called
            <a
              href="https://trunk.io/"
              className="text-light-green font-semibold hover:font-bold"
            >
              {" "}
              Trunk
            </a>
            . Previously, I worked at
            <a
              href="https://doordash.com/"
              className="text-light-green font-semibold hover:font-bold"
            >
              {" "}
              DoorDash{" "}
            </a>
            on the Category Expansion team as a backend SWE, helping expand
            DoorDash to include new verticals such as alcohol, retail, and
            pharmaceutical goods. I attended{" "}
            <span className="text-light-green font-semibold">
              Princeton University
            </span>{" "}
            for undergrad and majored in{" "}
            <span className="text-light-green font-semibold">
              Operations Research and Financial Engineering
            </span>{" "}
            with a minor in{" "}
            <span className="text-light-green font-semibold">
              computer science
            </span>
            . Feel free to{" "}
            <a
              href="mailto:jennygzma@gmail.com"
              className="text-light-green font-semibold hover:font-bold"
            >
              {" "}
              email me{" "}
            </a>
            if you want my resume or just to chat!
            <br /> <br /> In my spare time, I enjoy writing music, surfing, and
            hanging out with friends. I also try to run daily but don't really
            find that enjoyable 😬
          </p>
        </div>
      </div>
    </section>
  );
}
