import React from "react";
import hospital from "../../../assets/images/hospital.png";
import patrol from "../../../assets/images/patrol.jpeg";
import Audios from "../../../assets/images/Audios.png";
import prelij from "../../../assets/images/prelij.jpg";
import Ashish from "../../../assets/images/ashish.jpg";
import weslee from "../../../assets/images/weslee.jpg";
import ajith from "../../../assets/images/ajith.jpg";
import Alas from "../../../assets/images/Alas.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faRocket } from "@fortawesome/free-solid-svg-icons";

function project() {
  return (
    <>
      <div className=" pt-8">
        <h1 className="text-4xl font-extrabold pt-10 pb-8 text-center text-cyan-600">
          <span className="text-white dark:text-zinc-700">My</span> Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10">
          <div className="text-center std h92 p-2 image-cropper">
            <img src={hospital} className="pt-3 pr-3 pl-3 rounded-lg " />
            <div className="mt-4 px-1 sta">
              <h1 className="block text-lg font-semibold text-white text-center tracking-wide pt-2">
                HOSPITAL FRONTEND
              </h1>
              <p className="text-white text-sm pt-2">
                The hospital website will work with the desktop devices in which
                has contain all the forms for sending and receiving application
              </p>
              <p className="pl-2 pt-2 text-start text-sm text-zinc-300">
                <span className="font-bold">Skills :</span> HTML, CSS, JS, React
                js, Bootstrap.
              </p>
              <div className="flex justify-between mt-3 pb-2">
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a
                    href="https://github.com/next-coder21/Hospital-frontend"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>

                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid ">
                  <a
                    href="https://hospital-frontend-three.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faRocket} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center std image-cropper p-2">
            <img
              src={patrol}
              className="pt-3 pr-3 pl-3 rounded-lg w-screen h-52"
            />
            <div className="mt-4 px-1 sta ">
              <h1 className="block text-lg font-semibold text-white text-center tracking-wide pt-2">
                Patrol Robot to Improve Safety in Blind Spots
              </h1>
              <p className="text-white text-sm pt-2">
                Objective To design an IoT device for patroling and monitoring
                blind spots along with image processing technology .
              </p>

              <p className="pl-2 pt-2 text-start text-sm text-zinc-300">
                <span className="font-bold ">Skills :</span> Python, Raspberry
                pi, Node MCU, Facial Recognition, IoT.
              </p>
              <div className="flex justify-between mt-3 pb-2">
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a
                    href="https://github.com/next-coder21/Patrol-Robot-to-Improve-Safety-in-Blind-Spots"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <div className="flex rtl:space-x-reverse -space-x-3 justify-center mx-auto">
                    <img
                      className="h-7 w-7 border-2 border-white rounded-full dark:border-gray-800"
                      src={prelij}
                      alt=""
                    />
                    <img
                      className="h-7 w-7 border-2 border-white rounded-full dark:border-gray-800"
                      src={Ashish}
                      alt=""
                    />
                    <img
                      className="h-7 w-7 border-2 border-white rounded-full dark:border-gray-800"
                      src={weslee}
                      alt=""
                    />
                    <img
                      className="h-7 w-7 border-2 border-white rounded-full dark:border-gray-800"
                      src={ajith}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a
                    href="https://youtu.be/_YcVq6kvkh8?si=F7Ps8RcGbkZJuZ7M"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faRocket} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center std h92 p-2 image-cropper">
            <img src={Audios} className="pt-3 pr-3 pl-3 rounded-lg " />
            <div className="mt-4 px-1 sta">
              <h1 className="block text-lg font-semibold text-white text-center tracking-wide pt-2">
                Audios Player
              </h1>
              <p className="text-white text-sm pt-2">
                Simple audio player developed using HTML5, CSS3, JavaScript.
                where audios are uploaded and linked using json.
              </p>
              <p className="pl-2 pt-2 text-start text-sm text-zinc-300">
                <span className="font-bold">Skills :</span> HTML, CSS, JS,
                Bootstrap.
              </p>
              <div className="flex justify-between mt-3 pb-2">
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a
                    href="https://github.com/next-coder21/Audios"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>

                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid ">
                  <a
                    href="https://next-coder21.github.io/Audios/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faRocket} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center std h92 p-2 image-cropper">
            <img src={Alas} className="pt-3 pr-3 pl-3 rounded-lg " />
            <div className="mt-4 px-1 sta">
              <h1 className="block text-lg font-semibold text-white text-center tracking-wide pt-2">
                ALAS Cipher
              </h1>
              <p className="text-white text-sm pt-2">
                A simple application which encrypts and decrypts the text and
                symbols. usind DNA algorithm.
              </p>
              <p className="pl-2 pt-2 text-start text-sm text-zinc-300">
                <span className="font-bold">Skills :</span> HTML, CSS, JS,
                Bootstrap.
              </p>
              <div className="flex justify-between mt-3 pb-2">
                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a
                    href="https://github.com/next-coder21/alasv2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>

                <div className="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid ">
                  <a
                    href="https://next-coder21.github.io/alasv2/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faRocket} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
