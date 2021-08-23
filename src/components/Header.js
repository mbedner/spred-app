import React from "react";
import {HiOutlineCog} from "react-icons/hi";


export default function Menu() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between p-1 bg-white border-b">
            <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                  lightBlue Starter Menu
                </a>
              </div>
              <div
                className={
                  "flex items-center" 
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug p-1 rounded hover:text-blue-700 hover:bg-gray-100"
                      href="#pablo"
                    >
                      <HiOutlineCog />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
