import React from "react";

export default function News() {
  return (
    <section id="news">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-mono font-semibold text-green sm:text-4xl text-3xl mb-4">
            news
          </h1>
          <div>
            <table class="table-fix border-separate [border-spacing:1rem]">
              <thead>
                <th className="w-1/6" />
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">[01/2023]</td>
                  <td>
                    {" "}
                    joined series a devex startup{" "}
                    <a
                      href="https://trunk.io/"
                      className="text-light-green font-semibold hover:font-bold"
                    >
                      [Trunk]
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">[10/2021]</td>
                  <td>
                    {" "}
                    joined{" "}
                    <strong className="font-semibold text-light-green">
                      convenience and health
                    </strong>{" "}
                    pod to launch pharmaceutical goods on DoorDash from ground
                    up
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">[08/2021]</td>
                  <td>
                    started job at DoorDash on Category Expansion as a backend
                    eng on the{" "}
                    <strong className="font-semibold text-light-green">
                      alcohol compliance
                    </strong>{" "}
                    pod
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">[05/2021]</td>
                  <td>
                    graduated from{" "}
                    <strong className="font-semibold text-light-green">
                      Princeton University
                    </strong>{" "}
                    with an ORFE degree and CS minor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
