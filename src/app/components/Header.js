"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import TopBar from "../sections/TopBar";

const navItems = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT", href: "/about-us" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Cash for junk Cars", href: "/services/cash-for-junk-cars" },
      { name: "Scrap Car removal", href: "/services/scrap-car-removal" },
    ],
  },
  {
    name: "Locations",
    href: "#",
    dropdown: [
      { name: "Calgary", href: "/locations/calgary" },
      { name: "Airdrie", href: "/locations/airdrie" },
      { name: "Okotoks", href: "/locations/okotoks" },
      { name: "Cochrane", href: "/locations/cochrane" },
      { name: "Chestermere", href: "/locations/chestermere" },
      { name: "High River", href: "/locations/high-river" },
      { name: "Strathmore", href: "/locations/strathmore" },
      { name: "Canmore", href: "/locations/canmore" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // mobile accordion state: store expanded top-level items and expanded nested items
  const [expanded, setExpanded] = useState(new Set()); // holds top-level item names
  const [subExpanded, setSubExpanded] = useState(new Set()); // holds keys like "Services|Other Services"

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleExpand = (name) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleSubExpand = (key) => {
    setSubExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // close helper that also collapses accordions
  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpanded(new Set());
    setSubExpanded(new Set());
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isSticky ? "shadow-md py-4" : "py-3"
      } !py-0 `}
    >
      <TopBar />
      <div className=" px-4 sm:px-8 md:px-12 lg:px-20 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <Image alt="YYC Cash for Cars"
              src={"/images/yyc-car-logo.png"}
              width={310}
              height={96}
              className="h-24 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center dark:text-black">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown(item.name)}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-base font-bold uppercase transition-colors hover:text-primary-red ${
                      item.active ? "text-primary-red" : "text-dark-text"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180 font-bold" />
                    )}
                  </Link>

                  {item.dropdown && (
                    /* FIRST-LEVEL DROPDOWN */
                    <ul
                      className={`absolute left-0 top-full mt-4 w-52 bg-white shadow-lg rounded-md py-3
                       transition-all duration-300 transform first-level-dropdown ${
                         desktopDropdown === item.name
                           ? "opacity-100 visible translate-y-0"
                           : "opacity-0 invisible translate-y-2"
                       }`}
                    >
                      {item.dropdown.map((subItem) => (
                        /* sub-item is NOT a Tailwind `group` for controlling its submenu */
                        <li key={subItem.name} className="relative sub-item p-1">
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-5 py-2 rounded-md text-sm text-gray-text font-bold hover:bg-primary/30 hover:text-secondary transition-all duration-200"
                            aria-haspopup={!!subItem.dropdown}
                            aria-expanded={
                              subItem.dropdown ? "false" : undefined
                            }
                          >
                            <span>{subItem.name}</span>

                            {subItem.dropdown && (
                              <svg
                                className="ml-2 h-3 w-3 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                              >
                                <path
                                  d="M9 6l6 6-6 6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </Link>

                          {/* SECOND-LEVEL DROPDOWN — controlled by CSS :hover on .sub-item */}
                          {subItem.dropdown && (
                            <ul
                              className="absolute left-full top-0 ml-2 w-max bg-white shadow-lg rounded-md py-3
                               submenu"
                            >
                              {subItem.dropdown.map((subSub) => (
                                <li key={subSub.name}>
                                  <Link
                                    href={subSub.href}
                                    className="block px-5 py-2 text-sm text-gray-text hover:bg-light-background hover:text-primary-red"
                                  >
                                    {subSub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center relative">
              {/* <button
                type="button"
                aria-label="Open search"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Search className="h-5 w-5 text-black" />
              </button> */}
              {/*isSearchOpen && (
                <form
                  action="/search"
                  method="GET"
                  className="absolute right-0 top-12 z-50 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-lg"
                >
                  <input
                    type="search"
                    name="s"
                    placeholder="Search..."
                    className="bg-transparent text-sm text-black placeholder:text-gray-500 focus:outline-none w-44"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Go
                  </button>
                </form>
              )*/}
            </div>
            <Link href="/contact" className="hidden lg:block">
              <div className="rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm py-[14px] px-8 transition-all duration-300 hover:bg-dark-text">
               Get a Quote Now
              </div>
            </Link>
            <button
              className="lg:hidden p-2 dark:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------
          MOBILE SLIDING PANEL (right -> left)
         --------------------------- */}
      {/* rendered always so close animation stays smooth */}
      <div className="lg:hidden">
        {/* backdrop overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } bg-black`}
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        />

        {/* sliding panel */}
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[480px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          {/* header inside panel */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-3">
              <Image
                src={"/images/yyc-car-logo.png"}
                width={310}
                height={90}
                alt="logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <button onClick={closeMenu} aria-label="Close menu" className="p-2">
              <X className="h-6 w-6 dark:text-black" />
            </button>
          </div>

          {/* scrollable menu area */}
          <nav className="overflow-y-auto h-[calc(100vh-64px)] p-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-gray-200 pb-2 dark:text-black"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.name)}
                        className="w-full flex items-center justify-between py-3 text-sm font-semibold uppercase"
                        aria-expanded={expanded.has(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded.has(item.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* animated accordion panel for first-level */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expanded.has(item.name)
                            ? "max-h-[1000px] opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-3">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name} className="py-2">
                              {subItem.dropdown ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleSubExpand(
                                        `${item.name}|${subItem.name}`
                                      )
                                    }
                                    className="w-full flex items-center justify-between text-sm"
                                    aria-expanded={subExpanded.has(
                                      `${item.name}|${subItem.name}`
                                    )}
                                  >
                                    <span>{subItem.name}</span>
                                    <ChevronDown
                                      className={`h-3 w-3 transition-transform ${
                                        subExpanded.has(
                                          `${item.name}|${subItem.name}`
                                        )
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                      subExpanded.has(
                                        `${item.name}|${subItem.name}`
                                      )
                                        ? "max-h-[800px] opacity-100 mt-2"
                                        : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <ul className="pl-3">
                                      {subItem.dropdown.map((subSub) => (
                                        <li key={subSub.name} className="py-1">
                                          <Link
                                            href={subSub.href}
                                            onClick={closeMenu}
                                            className="block text-sm"
                                          >
                                            {subSub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  onClick={closeMenu}
                                  className="block text-sm"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3 text-sm font-semibold uppercase"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA at bottom of menu */}
            <div className="mt-6 px-2 flex justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <div
                  onClick={closeMenu}
                  className="rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm py-[14px] px-8 w-full text-center"
                >
                  Get an Instant Quote Now
                </div>
              </Link>
            </div>
          </nav>
        </aside>
      </div>
      {/* ---------------------------
          END MOBILE PANEL
         --------------------------- */}
    </header>
  );
};

export default Header;
