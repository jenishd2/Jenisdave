import React, { useState, useEffect } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Set initial theme
    document.documentElement.classList.add(theme);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (hash) => location.hash === hash;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header
      className={`w-[95%] px-5 font-preahvihear justify-between h-[50px] flex items-center mx-auto ${
        sticky
          ? "rounded max-ml:w-full max-ml:left-0 max-ml:p-4 fixed top-0 left-[2.5%] shadow-lg dark:bg-black bg-white"
          : "relative"
      } z-10 border-b-2 dark:border-0`}
    >
      <div>
        <NavLink smooth to="/">
          <h1 className="text-2xl ">Jenis Dave</h1>
        </NavLink>
      </div>
      <div className="flex items-center relative">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-4xl">
            <i
              className={`ri-${
                menuOpen ? "close" : "menu-3"
              }-line transition-all`}
            ></i>
          </button>
        </div>
      </div>
      <div
        className={`text-xl flex items-center gap-5 ${
          menuOpen ? "block" : "hidden"
        } md:flex max-sm:hidden `}
      >
        <NavLink
          smooth
          to="#home"
          className={
            isActive("#home")
              ? "text-purple-400"
              : "dark:text-white text-black "
          }
        >
          <h1>Home</h1>
        </NavLink>
        <NavLink
          smooth
          to="#about"
          className={
            isActive("#about")
              ? "text-purple-400"
              : "dark:text-white text-black"
          }
        >
          <h1>About</h1>
        </NavLink>
        <NavLink
          smooth
          to="#skills"
          className={
            isActive("#skills")
              ? "text-purple-400"
              : "dark:text-white text-black"
          }
        >
          <h1>Skills</h1>
        </NavLink>
        <NavLink
          smooth
          to="#projects"
          className={
            isActive("#projects")
              ? "text-purple-400"
              : "dark:text-white text-black"
          }
        >
          <h1>Projects</h1>
        </NavLink>
        <NavLink
          smooth
          to="#contact"
          className={
            isActive("#contact")
              ? "text-purple-400"
              : "dark:text-white text-black"
          }
        >
          <h1>Contact</h1>
        </NavLink>
      </div>
      <button
        onClick={toggleTheme}
        className="max-ml:text-3xl text-3xl mr-4 absolute top-2 -right-10 max-ml:right-10  "
      >
        {/* {theme === "light" ? `${<i className="ri-moon-fill"></i>}` : `${<i className="ri-sun-fill"></i>}`} */}
        <i
              className={`ri-${
                theme==="light" ? "moon" : "sun"
              }-fill transition-all`}
            ></i>
      </button>

      {menuOpen && (
        <div
          className={`absolute text-2xl dark:bg-black bg-white top-12 pr-6 py-5 z-30 right-0 rounded w-[100%] text-right shadow-lg ml:hidden transition-all`}
        >
          <NavLink
            smooth
            to="#home"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={
              isActive("#home")
                ? "text-purple-400"
                : "dark:text-white text-black"
            }
          >
            <h1>Home</h1>
          </NavLink>
          <NavLink
            smooth
            to="#about"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={
              isActive("#about")
                ? "text-purple-400"
                : "dark:text-white text-black"
            }
          >
            <h1>About</h1>
          </NavLink>
          <NavLink
            smooth
            to="#skills"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={
              isActive("#skills")
                ? "text-purple-400"
                : "dark:text-white text-black"
            }
          >
            <h1>Skills</h1>
          </NavLink>
          <NavLink
            smooth
            to="#projects"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={
              isActive("#projects")
                ? "text-purple-400"
                : "dark:text-white text-black"
            }
          >
            <h1>Projects</h1>
          </NavLink>
          <NavLink
            smooth
            to="#contact"
            onClick={() => {
              setMenuOpen(false);
            }}
            className={
              isActive("#contact")
                ? "text-purple-400"
                : "dark:text-white text-black"
            }
          >
            <h1>Contact</h1>
          </NavLink>
        </div>
      )}
    </header>
  );
}
