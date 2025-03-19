import LogoCloud from "../logo-cloud";
import { TextReveal } from "../magicui/text-reveal";

const About = () => {
  return (
    <section className="pt-20 lg:pT-28 bg-gradientTwo  w-full">
      <div className="  lg:flex lg:px-8">
        <h1 className="font-bebas text-quaternary  font-bold text-6xl lg:text-8xl text-center opacity-80 uppercase ">
          About Me.
        </h1>
        <div className="">
          <TextReveal>
            {"I'm a passionate front-end web developer with a strong foundation in building modern and responsive websites. I specialize in HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js. I love turning ideas into interactive, user-friendly digital experiences, and I'm always eager to learn and grow with new technologies."}
          </TextReveal>
        </div>
      </div>
      <div className="">
        <LogoCloud/>
      </div>
    </section>
  );
};

export default About;
