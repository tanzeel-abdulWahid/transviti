"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { navItems } from "@/constants/navItems";

import Logo from "../../public/icons/logo.svg";
import User from "../../public/icons/user.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo and navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="h-10 w-10 relative cursor-pointer">
                  <Image
                    src={Logo}
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 xl:flex md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-2 text-base text-nowrap  ${
                    item.active
                      ? "text-primary font-medium"
                      : "text-gray-500 font-normal"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search bar and CTA buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-light-gray" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2  border-0 rounded-md leading-5 bg-[#F6F9FF] text-gray-900 placeholder-light-gray focus:outline-none focus:placeholder-gray-400 focus:ring-0 sm:text-sm"
              />
            </div>

            <button className="bg-primary text-nowrap cursor-pointer px-4 py-2 text-white font-normal rounded-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Resume Builder
            </button>

            <div className="flex-shrink-0">
              <div className="h-8 w-8 relative rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src={User}
                  alt="User profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} xl:hidden `}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                item.active
                  ? "bg-primary/5 text-primary"
                  : "text-gray-500 hover:bg-gray-50 "
              }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 relative rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src={User}
                  alt="User profile"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-700">
                User Name
              </div>
              <div className="text-sm font-normal text-gray-500">
                user@example.com
              </div>
            </div>
          </div>

          <div className="mt-3 px-2 space-y-1">
            <div className="relative mb-3 px-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-light-gray" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-light-gray focus:outline-none focus:placeholder-gray-400 focus:ring-0  sm:text-sm"
              />
            </div>

            <button className="w-full flex justify-center bg-primary px-4 py-2 text-white font-medium rounded-md hover:bg-primary/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Resume Builder
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
