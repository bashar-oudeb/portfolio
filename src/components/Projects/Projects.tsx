import { motion, useTransform, useScroll, hover } from "framer-motion";
import { useRef, useState } from "react";
import project from "../../assets/projects/project.png";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import { Link } from "react-router";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const cards = [
    {
      img: project,
      title: "Home-Smart Website",
      id: 1,
      view:'https://bank-hotel-s2o3.vercel.app/',
      github:'https://github.com/bashar-oudeb/BankHotel',
    },
    {
      img: project1,
      title: "Pay System Website",
      id: 2,
      view:'https://pay-system.netlify.app/',
      github:'https://github.com/bashar-oudeb/Pay-System',
    },
    {
      img: project2,
      title: "E-commerce Website",
      id: 3,
      view:'https://glowing-55.netlify.app/',
      github:'https://github.com/bashar-oudeb/Creative-eCommerce',
    },
    {
      img: project3,
      title: "FullStack E-Commerce",
      id: 4,
      view:'https://github.com/bashar-oudeb/e-commece',
      github:'https://github.com/bashar-oudeb/e-commece',
    },
    {
      url: project4,
      title: "Headphones Website",
      id: 5,
      view:'https://head-phones-jbl.netlify.app/',
      github:'https://github.com/bashar-oudeb/Headphones-Website',
    },
  ];

  return (
    <section
      ref={targetRef}
      className=" relative h-[300vh] bg-gradient dark:bg-black md:pt-2 -mb-1 -mt-1"
    >
      <div className="  absolute px-12 top-12   md:left-1/4 lg:left-0 lg:px-4 ">
        <h1 className="font-bebas text-quaternary font-bold text-6xl lg:text-8xl opacity-90 uppercase">
          Projects
        </h1>
      </div>

      <div className="sticky top-0 flex h-[101vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onHoverStart={() => setShowCursor(true)}
              onHoverEnd={() => setShowCursor(false)}
              onMouseMove={handleMouseMove}
            />
          ))}
        </motion.div>

        {/* Custom Cursor */}
        {showCursor && (
          <motion.div
            className=" hidden  fixed lg:flex justify-center items-center z-50 pointer-events-none text-white font-bold uppercase text-sm  h-16 w-16 bg-black backdrop-blur-sm rounded-full"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            style={{
              top: cursorPos.y,
              left: cursorPos.x,
              transform: "translate(-50%, -50%)",
            }}
          >
            View
          </motion.div>
        )}
      </div>
    </section>
  );
};

const Card = ({ card, onHoverStart, onHoverEnd, onMouseMove }) => {
  return (
    <Link to={card.view}  target="blank">
    <div className="">
      <div
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        onMouseMove={onMouseMove}
        className="group relative h-[450px] w-[400px] md:w-[450px]  overflow-hidden bg-neutral-200 cursor-none"
      
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        >
          <img src={card.img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className=" bg-gradientT">
        <h1 className="pt-1.5 text-quaternary font-mono uppercase text-2xl text-center ">
          {card.title}
        </h1>
        <div className="py-1.5 flex items-center gap-2.5 justify-center">
          <Link
            to={card.github}
            className="text-gray-400 hover:text-gray-200    dark:text-gray-300 dark:hover:text-white flex items-center gap-1 transition-all"
            target="blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                fillRule="evenodd"
              />
            </svg>
            <span>Github</span>
          </Link>

          <Link
            to={card.view}
            className="text-gray-400 hover:text-gray-200  transition-all dark:hover:text-white dark:text-gray-300 flex items-center gap-1"
            target="blank"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="currentColor"
            >
              <path d="M0 0h48v48H0z" fill="none"></path>
              <g id="Shopicon">
                <circle cx="24" cy="24" r="4"></circle>
                <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"></path>
              </g>
            </svg>
            <span>View</span>
          </Link>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Projects;
