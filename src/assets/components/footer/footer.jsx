import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <>
      
      <section className="w-screen border-t-2 border-t-slate-100 dark:border-t-slate-900">
        <div className="px-8 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div className="col-span-6 ">
              <a
                href="#_"
                className="text-xl font-black leading-none text-sky-500 select-none "
              >
                <span className="text-white dark:text-red-600 ">LIJI</span>
                .Dev
              </a>

              <div className="flex pt-4 text-xl text-white gap-5 dark:text-zinc-700">
                <a
                  href="https://www.linkedin.com/in/lijish-wilson-s/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/next-coder21" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/im_lijish/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/LijishWilson" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
              <p className="my-4 text-xs leading-normal text-gray-500">
                Created using Html, Css, Reactjs, Tailwind css.
              </p>
            </div>
            <nav className="col-span-8 md:col-span-1 lg:col-span-6 text-white dark:text-zinc-700">
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Attributions - from
              </p>
              <a
                href="https://icons8.com/icons"
                target="_blank"
                className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-200 dark:dark:text-zinc-700 md:mb-2 hover:text-primary"
              >
                icons8
              </a>
              <a
                href="https://www.flaticon.com/free-icons/rest"
                target="_blank"
                className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-200 dark:dark:text-zinc-700 md:mb-2 hover:text-primary"
              >
                Freepik - flaticon
              </a>
              <a
                href="https://headlessui.com/"
                target="_blank"
                className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-200 dark:dark:text-zinc-700 md:mb-2 hover:text-primary"
              >
                Headless ui
              </a>
              <a
                href="https://fontawesome.com/"
                target="_blank"
                className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-200 dark:dark:text-zinc-700 md:mb-2 hover:text-primary"
              >
                Fontawesome
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 dark:border-black md:flex-row md:items-center">
            <p className="mb-6 text-sm text-left text-gray-600 md:mb-0 dark:text-zinc-700">
              © Copyright 2024 liji.dev. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default footer;
