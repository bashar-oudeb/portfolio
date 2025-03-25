import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink } from "react-router";
import Btn from "../ui/btn/Btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative z-50 ">
      <nav className=" flex justify-between items-center py-4  px-6">
        <div className=" ">
          <NavLink to="/" className="center gap-1">
            <h1 className="h-7 w-7 center font-bold text- bg-quaternary rounded-full hover:bg-secondary dark:hover:bg-primary hover:text-quaternary transition-all opacity-">
              B
            </h1>
            <h1 className="link font-poppins pt-0.5 ">Oudeb</h1>
          </NavLink>
        </div>
        <div className=" hidden lg:flex lg:items-center tracking-widest gap-2.5 ">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "about" },
            { name: "Portfolio", path: "portfolio" },
            { name: "Contact", path: "contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="link font-bebas"
              onClick={() => scrollToSection(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" flex gap-1 ">
          <div className="  flex items-center gap-1">
            <button className="" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <svg
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  width={"40px"}
                  className="cursor-pointer  opacity-"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.125 12C15.125 13.4497 13.9497 14.625 12.5 14.625C11.0503 14.625 9.875 13.4497 9.875 12C9.875 10.5503 11.0503 9.375 12.5 9.375C13.9497 9.375 15.125 10.5503 15.125 12Z"
                      stroke="#f9f6f6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M19.5 12.75C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25V12.75ZM17.75 11.25C17.3358 11.25 17 11.5858 17 12C17 12.4142 17.3358 12.75 17.75 12.75V11.25ZM7.25 12.75C7.66421 12.75 8 12.4142 8 12C8 11.5858 7.66421 11.25 7.25 11.25V12.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75V11.25ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM11.75 6.75C11.75 7.16421 12.0858 7.5 12.5 7.5C12.9142 7.5 13.25 7.16421 13.25 6.75H11.75ZM13.25 17.25C13.25 16.8358 12.9142 16.5 12.5 16.5C12.0858 16.5 11.75 16.8358 11.75 17.25H13.25ZM11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM17.9803 7.58033C18.2732 7.28744 18.2732 6.81256 17.9803 6.51967C17.6874 6.22678 17.2126 6.22678 16.9197 6.51967L17.9803 7.58033ZM15.6817 7.75767C15.3888 8.05056 15.3888 8.52544 15.6817 8.81833C15.9746 9.11122 16.4494 9.11122 16.7423 8.81833L15.6817 7.75767ZM9.31833 16.2423C9.61122 15.9494 9.61122 15.4746 9.31833 15.1817C9.02544 14.8888 8.55056 14.8888 8.25767 15.1817L9.31833 16.2423ZM7.01967 16.4197C6.72678 16.7126 6.72678 17.1874 7.01967 17.4803C7.31256 17.7732 7.78744 17.7732 8.08033 17.4803L7.01967 16.4197ZM8.08033 6.51967C7.78744 6.22678 7.31256 6.22678 7.01967 6.51967C6.72678 6.81256 6.72678 7.28744 7.01967 7.58033L8.08033 6.51967ZM8.25767 8.81833C8.55056 9.11122 9.02544 9.11122 9.31833 8.81833C9.61122 8.52544 9.61122 8.05056 9.31833 7.75767L8.25767 8.81833ZM16.7433 15.1827C16.4504 14.8898 15.9756 14.8898 15.6827 15.1827C15.3898 15.4756 15.3898 15.9504 15.6827 16.2433L16.7433 15.1827ZM16.9197 17.4803C17.2126 17.7732 17.6874 17.7732 17.9803 17.4803C18.2732 17.1874 18.2732 16.7126 17.9803 16.4197L16.9197 17.4803ZM19.5 11.25H17.75V12.75H19.5V11.25ZM7.25 11.25H5.5V12.75H7.25V11.25ZM11.75 5V6.75H13.25V5H11.75ZM11.75 17.25V19H13.25V17.25H11.75ZM16.9197 6.51967L15.6817 7.75767L16.7423 8.81833L17.9803 7.58033L16.9197 6.51967ZM8.25767 15.1817L7.01967 16.4197L8.08033 17.4803L9.31833 16.2423L8.25767 15.1817ZM7.01967 7.58033L8.25767 8.81833L9.31833 7.75767L8.08033 6.51967L7.01967 7.58033ZM15.6827 16.2433L16.9197 17.4803L17.9803 16.4197L16.7433 15.1827L15.6827 16.2433Z"
                      fill="#f9f6f6"
                    ></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  fill="#ffffff"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xmlSpace="preserve"
                  stroke="#ffffff"
                  className=" size-6 mt-1  cursor-pointer hover:opacity-80 transition-all"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      id="Moon"
                      d="M63.4374046,38.4606323c-0.4258003-0.2060013-0.9384995-0.0848999-1.2276001,0.2910995 c-1.2803001,1.6650009-2.9452972,3.2001991-4.9501991,4.5625c-11.6180992,7.8808022-27.544899,4.9248009-35.4971008-6.5956993 c-7.8154011-11.3204002-4.9902-26.9736996,6.2968998-34.8936005c0.3799-0.2666,0.5263996-0.7588,0.3544998-1.1895001 c-0.1728001-0.4316-0.625-0.6835-1.0771008-0.6181c-4.6474991,0.6953-9.2070999,2.4902-13.1875,5.1893997 C6.9706059,10.0759325,2.1415057,17.427433,0.5526057,25.9079323c-1.582,8.4414024,0.2402,16.9932022,5.1308002,24.0791016 c6.2872,9.1054993,16.4864006,14.0058975,26.8554993,14.0058975c6.3173981,0,12.6982994-1.819397,18.2939987-5.6161995 c6.5800018-4.461998,11.2461014-11.1298981,13.1406021-18.7753983 C64.0877075,39.142334,63.8631058,38.6657333,63.4374046,38.4606323z M49.7098045,56.7224312 c-13.8710976,9.410099-32.8847961,5.8828011-42.3798981-7.872097c-4.5858998-6.642601-6.2948999-14.660202-4.8114996-22.5742016 C4.0086055,18.3239326,8.5379057,11.4294329,15.2723055,6.861033c2.5801001-1.75,5.4189997-3.0937002,8.3643007-3.9726 c-9.3916006,9.0702991-11.1416006,23.9258003-3.5205002,34.9668007 c8.5741997,12.4188995,25.7422009,15.6094017,38.2666016,7.1133003c0.8260994-0.5606003,1.5996017-1.149498,2.3182983-1.764698 C58.4803047,48.6472321,54.6766052,53.3542328,49.7098045,56.7224312z"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
            <Btn />
          </div>
          <div className=" lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                width={"40px"}
                className="cursor-pointer relative z-50  "
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                width={"40px"}
                className="cursor-pointer opacity-80 "
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Menu_Alt_01">
                    {" "}
                    <path
                      id="Vector"
                      d="M12 17H19M5 12H19M5 7H19"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            )}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden fixed  top-0 left-0 origin-top w-full h-full bg-primary bg-opacity-90 flex flex-col items-center justify-center gap-4 overflow-hidden"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              className=""
            >
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/Portfolio" },
                { name: "Contact", path: "/Contact" },
              ].map((link, index) => (
                <motion.div variants={linkVars} className="">
                  <NavLink
                    key={index}
                    to={link.path}
                    className="link font-bebas text-6xl text-center "
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
