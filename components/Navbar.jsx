"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import "../styles/annimations.css";

const Menu = () => (
  <>
    {" "}
    <p className=" hover:text-green-900">
      <a href="#Breakfast">Breakfast</a>
    </p>
    <p className=" hover:text-green-900">
      <a href="#Lunch">Lunch</a>
    </p>
    <p className=" hover:text-green-900">
      <a href="#Dinner">Dinner</a>
    </p>
    <p className=" hover:text-green-900">
      <a href="#burgerpizza">Burger & Pizza</a>
    </p>
    <p className=" hover:text-green-900">
      <a href="#winebeer">Wine & Beer</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed w-full z-10">
      {" "}
      <div className=" flex gap-5 items-center  px-2 md:pt-6 pb-3 sm:mb-4 mb-3 sm:pt-4 pt-2 text-xl font-cormorant font-semibold drop-shadow-lg rounded-b-sm  bg-navbg dark:bg-slate-900 text-lightgray dark:text-gray">
        <div className="flex flex-1 gap-8  justify-start items-center">
          <div className="flex justify-start ">
            {/* <img src={""} alt="logo" /> */}
            <p className=" xl:pl-2 pl-4 sm:pl-12  text-3xl text-slate-800 dark:text-slate-400">
              Hotel's Logo
            </p>
          </div>
          <div className="hidden md:block">
            <div className=" flex flex-row  gap-4  ">
              <Menu />
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="cursor-pointer  hover:text-green-900 pl-4">
            {theme === "light" ? (
              <MdOutlineDarkMode size={25} onClick={() => setTheme("dark")} />
            ) : (
              <MdOutlineLightMode size={25} onClick={() => setTheme("light")} />
            )}
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="ml-1 pr-8  relative  sm:hidden ">
          {toggleMenu ? (
            <RiCloseLine
              className=" text-lightgray dark:text-gray"
              //color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              className=" text-lightgray dark:text-gray"
              //color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className=" flex flex-col  absolute  m-1  drop-shadow-lg items-center  scale-up-center">
              <div className=" absolute items-start text-left pl-3 pr-10   bg-navbg dark:bg-slate-900">
                <Menu />
                {}
                <div className="cursor-pointer mx-8 py-2  justify-center ">
                  {theme === "light" ? (
                    <MdOutlineDarkMode
                      size={25}
                      onClick={() => setTheme("dark")}
                    />
                  ) : (
                    <MdOutlineLightMode
                      size={25}
                      onClick={() => setTheme("light")}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
      {/* <hr className="h-[1px] mx-16 flex items-center  sm:mb-4 text-lightgray dark:text-gray" /> */}
    </nav>
  );
};

export default Navbar;
