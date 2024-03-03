import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setEnabled(!enabled);
  };

  return (
    <>
      <nav className="  sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-2 border-b-slate-100 dark:border-b-slate-900">
        <div className="flex justify-between p-5 ">
          <h2 className="text-2xl dark:text-zinc-700 text-white font-extrabold">
            LIJI.Dev
          </h2>
          <ul className="inline-flex p-1 gap-9">
            <li className="inline-flex p-2">
              <label className="relative   cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  onChange={handleToggle}
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li>
            <a href="https://github.com/next-coder21" target="_blank">
                <p className="text-white dark:text-zinc-700 font-semibold text-2xl">
                  <FontAwesomeIcon icon={faGithub} />
                </p>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lijish-wilson-s/" target="_blank">
              
                <p className="text-white dark:text-zinc-700 font-semibold text-2xl">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </p>
              </a>
            </li>
          </ul>
        </div>
       
      </nav>
    </>
  );
}

export default Navbar;
