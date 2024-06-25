import React from "react";
import "./Hero.css";

import Resume from "../../../images/Resume.pdf";

function Hero() {
  return (
    <>
      <section className=" dark:bg-white text-white p-6 dark:text-zinc-700 ">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-vh lg:items-center example-style std">
          <div className="mx-auto max-w-3xl text-center ">
            <h1 className="text-sky-500 dark:text-red-500  text-3xl font-extrabold sm:text-5xl ">
              I'm
              <br />
              LIJISH WILSON S<br />
              <span className="sm:block pt-2"> Full Stack Developer </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              I'm a Full Stack Developer, I can build it, deploy it, and make it
              scale!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border image-cropper border-blue-600 bg-blue-600 dark:bg-red-500 px-12 py-3 text-sm font-medium text-white hover:ring-offset-fuchsia-400 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href={Resume}
                download="liji resume"
                target="_blank"
              >
                Resume
              </a>

             
            </div>
          </div>
          <img
            className="rounded-lg w-96 h-96 mx-auto igcs image-cropper"
            src="https://ucarecdn.com/474fb129-5b37-4031-8730-cbcd5a9de0c8/-/preview/1000x1000/"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
