import React from "react";
import {HiOutlineCog} from "react-icons/hi";


export default function Menu() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between p-1 bg-white border-b">
            <div className="w-full px-4 mx-auto grid grid-cols-3 items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                  href="#pablo"
                >
                  lightBlue Starter Menu
                </a>
              </div>
              <form action=""><input type="text" placeholder="search" className="bg-gray-100 border px-2 py-1 rounded w-full" /></form>
              <div
                className={
                  "flex items-center justify-end" 
                }
                id="example-navbar-info"
              >
                  <a
                    className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug p-1 rounded hover:text-blue-700 hover:bg-gray-100"
                    href="#pablo"
                  >
                    <HiOutlineCog />
                  </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
