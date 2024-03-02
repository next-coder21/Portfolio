import React from "react";
import "./Hero.css";
import User from "../logou.png";

function Hero() {
  return (
    <>
      <section class=" dark:bg-white text-white p-6 dark:text-zinc-700">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-vh lg:items-center example-style std">
          <div class="mx-auto max-w-3xl text-center ">
            <h1 class="text-sky-500 dark:text-red-500  text-3xl font-extrabold sm:text-5xl ">
              I'm
              <br />
              LIJISH WILSON S<br />
              <span class="sm:block pt-2"> Full Stack Developer </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              I'm a Full Stack Developer, I can build it, deploy it, and make it
              scale!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border image-cropper border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:ring-offset-fuchsia-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Resume
              </a>

              <a
                class="block w-full rounded border image-cropper border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Know More
              </a>
            </div>
          </div>
          <img
            src={User}
            className="-lg  h-96 xs:h-92 w-auto pr-6 mx-auto image-cropper"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
