export const Btn = () => {
  return (
    <div className=" flex justify-center ">
      <a
        className="relative inline-block  px-3 py-1  text-black transition-all duration-300 hover:bg-secondary hover:rounded-full group"
        href="https://drive.google.com/file/d/1jzncfFcNTzPwP3VdbE99OX3VtoJcovYP/view?usp=sharing"
        target="blank"
      >
        <span className="relative block text-left text-[1em] leading-[1.33333em]  uppercase text-quaternary hover:opacity-50  font-poppins  transition-all duration-300 group-hover:text-white ">
          Resume
        </span>
        <span className="absolute top-[-2px] left-2.5 h-[2px] w-6 bg-gray-200 transition-all duration-500 group-hover:left-[-2px] group-hover:w-0"></span>
        <span className="absolute bottom-[-2px] right-[30px] h-[2px] w-6 bg-gray-200 transition-all duration-500 group-hover:right-0 group-hover:w-0"></span>
        <span className="absolute bottom-[-2px] right-2.5 h-[2px] w-2.5 bg-gray-200 transition-all duration-500 group-hover:right-0 group-hover:w-0"></span>
      </a>
    </div>
  );
};

export default Btn;
