import React, { useState } from "react";
import htop from "../Header/html.png";
import css3 from "../Header/css-3.png";
import jvs from "../Header/js.png";
import Tw from "../Header/tailwind.png";
import rect from "../Header/React.png";
import java from "../Header/java.png";
import cpp from "../Header/cpp.png";
import bts from "../Header/bootstrap.png";
import spring from "../Header/Sptring.png";
import python from "../Header/python.png";

function Skillset() {
  return (
    <>
      <div className="pb-10 pt-8">
        <h1 className="text-4xl font-extrabold pt-10 pb-8 text-center text-cyan-600">
          <span className="text-white dark:text-zinc-700">My</span> Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 p-10">
          <div className="text-center cde">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950  overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={htop} className="h-24 mx-auto pt-4" />
                  <div class="mt-3 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      HTML - 5
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center cde">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={css3} className="h-24 mx-auto pt-4" />
                  <div class="mt-3 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      CSS - 3
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={jvs} className="h-24 mx-auto pt-4" />
                  <div class="mt-3 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Java Script
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={Tw} className="h-24 mx-auto pt-4" />
                  <div class="mt-3 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Tailwind CSS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={rect} className="h-24 mx-auto pt-4" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      React JS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={java} className="h-24 mx-auto pt-4" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Java
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={cpp} className="h-24 mx-auto pt-4" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      C++
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={bts} className="h-24 mx-auto pt-4 invert" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Bootstrap
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={spring} className="h-24 mx-auto pt-4" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Springboot
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div class="flex justify-center items-center min-h-84">
              <div>
                <div class="w-[230px] max-w-sm bg-sky-950 overflow-hidden shadow-xl shadow-sky-200/30 ring-1 ring-sky-200/10 transition-all duration-500 ease-in-out p-2 hover:scale-105 rounded-2xl">
                  <img src={python} className="h-24 mx-auto pt-4" />
                  <div class="mt-4 px-1 py-2.5">
                    <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                      Python
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillset;
