import profile from "../../assets/profile1.png";

const Loader = () => {
  return (
    <div className="relative w-56 h-56 flex items-center justify-center">
      {/* Spinning border ring */}
      <div
        className=" absolute inset-0 rounded-full animate-pulse
 bg-gradient-to-tr from-primary via-tertiary to-secondary  blur-sm shadow"
      >
        {/* Inner solid circle to create border effect */}
        <div className="w-full h-full bg-[#242424] rounded-full" />
      </div>

      {/* Static image inside the circle */}
      <img
        src={profile}
        alt="Loader"
        className="w-full h-full object-cover rounded-full z-10"
        loading="lazy"
        style={{ filter: "blur(10px)", transition: "filter 0.5s ease-in-out" }}
        onLoad={(e) => (e.target.style.filter = "blur(0)")} 
      />
    </div>
  );
};

export default Loader;
