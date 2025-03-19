
export const Btn = () => {
  return (
    <div className=" flex justify-center lg:justify-start mt-5">
    <a
      href="#"
      className="relative inline-block border-2 border-black px-6 py-3 text-[13px] font-bold tracking-wide text-black transition-all duration-300 hover:bg-black group"
    >
      <span className="absolute left-6 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-black transition-all duration-300 group-hover:w-3.5 group-hover:bg-white"></span>
      <span className="relative block text-left text-[1.125em] leading-[1.33333em] pl-5 uppercase text-quaternary opacity-70 font-poppins  transition-all duration-300 group-hover:text-white group-hover:pl-6">
        My Resume
      </span>
      <span className="absolute top-[-2px] left-2.5 h-[2px] w-6 bg-gray-200 transition-all duration-500 group-hover:left-[-2px] group-hover:w-0"></span>
      <span className="absolute bottom-[-2px] right-[30px] h-[2px] w-6 bg-gray-200 transition-all duration-500 group-hover:right-0 group-hover:w-0"></span>
      <span className="absolute bottom-[-2px] right-2.5 h-[2px] w-2.5 bg-gray-200 transition-all duration-500 group-hover:right-0 group-hover:w-0"></span>
    </a>
  </div>
  );
};

export default Btn;
