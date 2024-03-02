import React from "react";
import hospital from "../../../assets/images/hospital.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook , faRocket } from "@fortawesome/free-solid-svg-icons";

function project() {
  return (
    <>
      <div className="pb-10 pt-8">
        <h1 className="text-4xl font-extrabold pt-10 pb-8 text-center text-cyan-600">
          <span className="text-white dark:text-zinc-700">My</span> Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-10">
          <div className="text-center std h92 p-2 image-cropper">
            <img src={hospital} className="pt-3 pr-3 pl-3 rounded-lg" />
            <div class="mt-4 px-1 sta">
              <h1 class="block text-lg font-semibold text-white text-center tracking-wide pt-2">
                HOSPITAL FRONTEND
              </h1>
              <p className="text-white text-sm">
                The hospital website will work with the desktop devices in which
                has contain all the forms for sending and receiving application
              </p>
              <p className=""></p>
              <div class="flex justify-between mt-3 pb-2">
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <a href="https://github.com/next-coder21/Hospital-frontend"  target="_blank">
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>

                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid ">
                <a href="https://hospital-frontend-three.vercel.app/"  target="_blank">
                <FontAwesomeIcon icon={faRocket} /> Demo 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center std image-cropper p-2">
          <img src={hospital} className="pt-3 pr-3 pl-3 rounded-lg" />
            <div class="mt-4 px-1 sta">
              <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                Patrol Robot to Improve Safety in Blind Spots
              </h1>
              <p className="text-white text-sm">
              Objective To design an IoT device for patroling and monitoring blind spots along with image processing technology . Our system sends an message along with GPS location with buzzer sounding in the device.
              </p>
              <div class="flex justify-between mt-5">
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                <a href="https://github.com/next-coder21/Patrol-Robot-to-Improve-Safety-in-Blind-Spots"  target="_blank">
                    <FontAwesomeIcon icon={faBook} /> GitHub Link
                  </a>
                </div>
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <span class="text-sm block">5</span>
                  <span class="text-xs">Contributors</span>
                </div>
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                <a href="https://youtu.be/_YcVq6kvkh8?si=F7Ps8RcGbkZJuZ7M"  target="_blank">
                <FontAwesomeIcon icon={faRocket} /> Demo 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center std">
            <img></img>
            <div class="mt-4 px-1 sta ">
              <h1 class="block text-lg font-semibold text-white text-center tracking-wide">
                UNIVERSE OF UI
              </h1>
              <div class="flex justify-between mt-5">
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70  [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <span class="text-sm block">2626</span>
                  <span class="text-xs">UI elements</span>
                </div>
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <span class="text-sm block">100%</span>
                  <span class="text-xs">Free for use</span>
                </div>
                <div class="flex-[30%] text-center text-sky-200 p-1 [&:nth-child(2)]:border-x-sky-700/70 [&:nth-child(2)]:border-l [&:nth-child(2)]:border-solid [&:nth-child(2)]:border-r">
                  <span class="text-sm block">38,631</span>
                  <span class="text-xs">Contributers</span>
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
