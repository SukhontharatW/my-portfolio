import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-blue-950 p-4">
      <div className="m-auto flex max-w-screen-xl justify-between">
        <a
          href="#"
          className=" text-lg font-semibold uppercase  text-orange-400  "
        >
          sukhontharat
        </a>
        <div className=" flex">
          <ul className="hidden gap-6 sm:flex">
            <li>
              <a
                // onClick={toggleNav}
                className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                // onClick={toggleNav}
                className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                // onClick={toggleNav}
                className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                href="#project"
              >
                Project
              </a>
            </li>
            <li>
              <a
                // onClick={toggleNav}
                className="cursor-pointer rounded-md text-lg  font-semibold uppercase text-teal-500 hover:text-teal-600"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {showNav && (
            <div className=" absolute left-0 right-0 top-0 transition-all duration-1000">
              <ul className="toggleNav flex h-screen w-screen flex-col items-center justify-center gap-6 bg-blue-950">
                <li>
                  <a
                    onClick={toggleNav}
                    className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleNav}
                    className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleNav}
                    className="cursor-pointer rounded-md text-lg  font-semibold uppercase  text-orange-400  hover:text-orange-500"
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleNav}
                    className="cursor-pointer rounded-md text-lg  font-semibold uppercase text-teal-500 hover:text-teal-600"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                <button
                  onClick={toggleNav}
                  className=" absolute right-6 top-4 text-2xl text-orange-400 hover:text-orange-500"
                >
                  <FaTimes />
                </button>
              </ul>
            </div>
          )}
          <button
            onClick={toggleNav}
            className=" text-2xl text-orange-400 hover:text-orange-500 sm:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
