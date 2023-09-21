import React, { useState } from "react";
import { BsGift, BsBell } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 w-full lg:absolute flex items-center justify-between flex-wrap p-6 bg-black/30">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <a href="/">
          <img
            src="/images/DRAMATIC.png"
            className="w-100 h-10 mr-2 mx-5"
            alt="Logo"
          />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-  mx-5 text-xl"
          >
            HOME
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  mx-5 text-xl"
          >
            TV SHOW
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white  mx-5 text-xl"
          >
            MOVIES
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mx-5 text-xl"
          >
            NEW
          </a>
        </div>

        <div className="text-sm lg:flex space-x-10 items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-100 bg-white/30 border-0 rounded-lg text-white text-xl mt-4"
          />
          <BsGift className="text-2xl mt-4" />
          <BsBell className="text-2xl mt-4" />
          <BiUserCircle className="text-4xl rounded-full border-4 border-amber-500 text-amber-500 mt-4" />
        </div>
        <div></div>
      </div>
    </nav>
  );
}
export default Header;
