import { RevealSkills } from "./magicui/reveal-skills";

export default function LogoCloud() {
  return (
    <section className="-mt-16 lg:px-3 ">
      <h1 className="font-bebas text-quaternary  font-bold text-6xl lg:text-8xl text-center lg:text-start opacity-90 uppercase ">
        My skills.
      </h1>

      <div className="pt-10 ">
        <RevealSkills>
          {
            '.HTML .CSS .JAVASCRIPT .REACT.JS .TAILWIND .NEXT.JS .TYPESCRIPT .GIT .REDUX '
          }
        </RevealSkills>
      </div>
    </section>
  );
}
