import { data } from "@utils/data";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  CakeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Navbar({}: Props) {
  const [navbar, setNavbar] = useState<boolean>(false);
  return (
    <nav className="w-full">
      <div className="flex flex-row items-center mx-auto space-x-4 w-full max-w-7xl">
        <div className="logo">
          <img src={data.site_info.logo} className="h-24" alt="" />
        </div>
        <div className="md:flex hidden flex-row items-center flex-1 bg-slate-100 py-2 px-4 text-slate-500 rounded">
          <MagnifyingGlassIcon height={20} width={20} />
          <input type="text" className="flex-1 p-2 outline-none bg-slate-100" />
          <CakeIcon height={20} width={20} />
        </div>
        <div className="flex lg:px-12 md:px-8 px-2"></div>
        <div className="flex flex-row md:space-x-8 space-x-2">
          <a
            href=""
            className="bg-green-original md:flex hidden py-2 px-4 rounded-full text-white"
          >
            Click Here
          </a>
          <button
            type="button"
            className="relative inline-flex items-center text-sm font-medium text-center text-slate-700 rounded-lg"
          >
            <ShoppingBagIcon height={24} width={24} />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full bottom-0 -right-3 dark:border-gray-900">
              0
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
