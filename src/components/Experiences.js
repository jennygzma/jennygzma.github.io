import React from "react";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-mono font-semibold text-green sm:text-4xl text-3xl mb-4">
            experiences
          </h1>
          <table class="table-fix border-separate [border-spacing:1.5rem]">
            <thead>
              <th className="w-1/3"/>
              <th/>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center content-center">
                    <div className="w-1/2"> <p><strong>DoorDash</strong> <br/> nyc 🗽</p></div> 
                    <div className="flex items-right content-right"> <p><em>08/21-11/22</em></p></div> 
                  </div>
                  <div className="flex py-4"> <h1>skills:</h1></div>
                  <div class="grid grid-cols-2 gap-1 flex justify-center items-center content-center">
                      <div class="font-bold text-light-green">kotlin</div>
                      <div class="font-bold text-light-green">gRPC</div>
                      <div class="font-bold text-light-green">kubernetes</div>
                      <div class="font-bold text-light-green">cassandra</div>
                      <div class="font-bold text-light-green">postgres</div>
                      <div class="font-bold text-light-green">scalyr</div>
                  </div>
                </td>
                <td> 
                  <ul class="list-outside list-disc"> 
                    <li>
                      Integrated HSA/FSA items to Doordash, 
                      leading design and implementation for reimbursable receipts, 
                      unlocking $41M in revenue
                    </li>
                    <li>
                      Fixed dropoff preference bug that had weekly loss of $30k. Investigated 
                      different behaviors and multiple sources of truth in reading dropoff preferences, 
                      charting a path forward to consolidate the SOT, leading meetings and working across 5+ core teams
                    </li>
                    <li>
                      Implemented Dasher scanned ID verification, lowering failed alcohol 
                      deliveries by 40% and increasing internal sting rate by 49%
                    </li>
                    <li>
                      Added support for flexible item hours, allowing merchants to sell alcohol 
                      at varying hours, increasing volume by more than 3%
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center content-center">
                    <div className="w-1/2"> <p><strong>Capital One</strong> <br/> nyc 🗽</p></div> 
                    <div className="flex items-right content-right"> <p><em>06/20-08/20</em></p></div> 
                  </div>
                  <div className="flex py-1"> <h1>skills:</h1></div>
                  <div class="grid grid-cols-2 gap-1 flex justify-center items-center content-center">
                      <div class="font-bold text-light-green">javascript</div>
                      <div class="font-bold text-light-green">express</div>
                      <div class="font-bold text-light-green">node.js</div>
                      <div class="font-bold text-light-green">angular</div>
                  </div>
                </td>
                <td> 
                  <ul class="list-outside list-disc"> 
                    <li>
                      Integrated SSO authentication scheme to Teller 2, an enterprise-wide software 
                      deployed across financial branch locations
                    </li>
                    <li>
                      Created set of authentication APIs with Express and Node that take requests from Teller 2, 
                      using test-driven development with Jest
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center content-center">
                    <div className="w-1/2"> <p><strong>DataVisor</strong> <br/> mountain view, <br/> ca ☀️</p></div> 
                    <div className="flex items-right content-right"> <p><em>05/19-08/19</em></p></div> 
                  </div>
                  <div className="flex py-1"> <h1>skills:</h1></div>
                  <div class="grid grid-cols-2 gap-1 flex justify-center items-center content-center">
                      <div class="font-bold text-light-green">cassandra</div>
                      <div class="font-bold text-light-green">java</div>
                  </div>
                </td>
                <td> 
                  <ul class="list-outside list-disc"> 
                    <li>
                      Developed an internal service to detect inefficient Cassandra queries to optimize error 
                      handling time with Java and CQL
                    </li>
                    <li>
                      Used Cassandra tables to create data models with real-world data and wrote 10+ functions to 
                      aggregate real-world datasets
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}