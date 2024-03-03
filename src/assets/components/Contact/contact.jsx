import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { faLocationDot, faPhone ,faEnvelope } from "@fortawesome/free-solid-svg-icons";

function contact() {
  return (
    <>
      <div className="pb-10 pt-8">
        <h1 className="text-4xl font-extrabold pt-10 pb-8 text-center text-cyan-600">
          <span className="text-white dark:text-zinc-700">Contact</span> Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 p-6">
          
            <div className="grid grid-cols-1 pl-12 lg:mx-auto">
              <div>
                <h3 className="text-lg text-white dark:text-gray-800 ">
                  <FontAwesomeIcon icon={faLocationDot} />
                </h3>
                <p className="text-white dark:text-gray-800">_____</p>
              </div>
              <div>
                <h5 className="text-md text-white dark:text-gray-800 font-semibold pt-3 text-sm-lg">
                  Location
                </h5>
                <h5 className="text-sm text-white dark:text-gray-800 font-medium">
                  Nagercoil, India
                </h5>
              </div>
            </div>
            <div className="grid grid-cols-1 pl-12 lg:mx-auto">
            <a href="mailto:lijishwilson@gmail.com">
              <div>
                <h3 className="text-lg text-white dark:text-gray-800 " >
                <FontAwesomeIcon icon={faEnvelope} />
                </h3>
                <p className="text-white dark:text-gray-800">_____</p>
              </div>
              <div>
                <h5 className="text-md text-white dark:text-gray-800 font-semibold pt-3 text-sm-lg">
                  Email
                </h5>
                <h5 className="text-sm text-white dark:text-gray-800 font-medium">
                  lijishwilson@gmail.com
                </h5>
              </div>
              </a>
            </div>
            <div className="grid grid-cols-1 pl-12 lg:mx-auto">
            <a href="tel:+918056753142">
              <div>
                <h3 className="text-lg text-white dark:text-gray-800">
                  <FontAwesomeIcon icon={faPhone} />
                </h3>
                <p className="text-white dark:text-gray-800">_____</p>
              </div>
              <div>
                <h5 className="text-md text-white dark:text-gray-800 font-semibold pt-3 text-sm-lg">
                  Phone
                </h5>
                <h5 className="text-sm text-white dark:text-gray-800 font-medium">
                  +91 805 675 3142
                </h5>
              </div>
              </a>
            </div>
          </div>
        
      </div>

      {/* <div>


    <ReactTyped strings={["Here you can find anything","Photographer",
        "Code Chef Problem Solving",
        "Full Stack Developer",]} typeSpeed={50} backSpeed={30} loop/>
    <br />

    <ReactTyped
      strings={[
        "Photographer",
        "Code Chef Problem Solving",
        "Full Stack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div> */}
    </>
  );
}

export default contact;
