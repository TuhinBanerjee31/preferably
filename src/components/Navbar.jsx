import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="font-poppins">
      <nav className="bg-white relative w-full z-40 top-0 start-0 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            reloadDocument
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Preferably Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#000514]">
              Preferably
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="button-89">Contact Us</button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <Link
                  reloadDocument
                  to={"/"}
                  className="block py-2 px-3 text-[#666] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-[#000] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to={"/companies"}
                  className="block py-2 px-3 text-[#666] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-[#000] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to={"/salaries"}
                  className="block py-2 px-3 text-[#666] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-[#000] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Salaries
                </Link>
              </li>
              <li>
                <Link
                  reloadDocument
                  to={"/news"}
                  className="block py-2 px-3 text-[#666] rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-[#000] md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
