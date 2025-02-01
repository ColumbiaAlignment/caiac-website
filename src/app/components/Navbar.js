"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const isSectionActive = (paths) => {
    return paths.some(path => pathname === path || pathname.startsWith(path + '/'));
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24"> {/* Increased height */}
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Columbia AI Safety"
                className="h-16 w-auto" /* Increased logo size */
              />
            </Link>
          </div>

          {/* MOBILE NAVIGATION */}
          <MobileNavbar />

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:block"> 
            <ul className="flex items-center space-x-12"> {/* Increased spacing */}
              {/* ABOUT */}
              <li className="relative group">
                <span className={`cursor-pointer py-3 text-lg text-gray-600 hover:text-[#023a87] transition-colors ${
                  isSectionActive(['/', '/about']) ? 'text-[#023a87]' : ''
                }`}>
                  About
                </span>
                <ul className="absolute left-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 
                              group-hover:translate-y-0">
                  <li>
                    <Link href="/" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/") ? "text-[#023a87]" : ""}`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/team" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/about/team") ? "text-[#023a87]" : ""}`}>
                      Team
                    </Link>
                  </li>
                  {/*
                  <li>
                    <Link href="/about/mission" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/about/mission") ? "text-[#023a87]" : ""}`}>
                      Mission
                    </Link>
                  </li>
                  * */}
                </ul>
              </li>

              {/* RESEARCH */}
              <li>
                <Link href="/research" className={`py-3 text-lg text-gray-600 hover:text-[#023a87] transition-colors
                  ${isActive("/research") ? "text-[#023a87]" : ""}`}>
                  Research
                </Link>
              </li>

              {/* GET INVOLVED */}
              <li className="relative group">
                <span className={`cursor-pointer py-3 text-lg text-gray-600 hover:text-[#023a87] transition-colors ${
                  isSectionActive(['/get_involved']) ? 'text-[#023a87]' : ''
                }`}>
                  Get Involved
                </span>
                <ul className="absolute left-0 mt-3 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 
                              group-hover:translate-y-0">
                  <li>
                    <Link href="/get_involved/technical-fellowship" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/get_involved/technical-fellowship") ? "text-[#023a87]" : ""}`}>
                      Technical Fellowship
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/get_involved/policy-fellowship" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/get_involved/policy-fellowship") ? "text-[#023a87]" : ""}`}>
                      Policy Fellowship
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/get_involved/research-groups" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/get_involved/research-groups") ? "text-[#023a87]" : ""}`}>
                      Research Groups
                    </Link>
                  </li>
                </ul>
              </li>

              {/* RESOURCES */}
              <li className="relative group">
                <span className={`cursor-pointer py-3 text-lg text-gray-600 hover:text-[#023a87] transition-colors ${
                  isSectionActive(['/resources']) ? 'text-[#023a87]' : ''
                }`}>
                  Resources
                </span>
                <ul className="absolute left-0 mt-3 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible 
                              group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 
                              group-hover:translate-y-0">
                  <li>
                    <Link href="/resources/blog" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/resources/blog") ? "text-[#023a87]" : ""}`}>
                      Blog
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/resources/policy-resources" className={`block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 
                      ${isActive("/resources/policy-resources") ? "text-[#023a87]" : ""}`}>
                      Policy Resources
                    </Link>
                  </li>
                </ul>
              </li>



            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}