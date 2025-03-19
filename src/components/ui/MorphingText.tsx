import { MorphingText } from "../magicui/morphing-text";

const texts: string[] = [
  " Web developer",
  "Front-end deve",
  
];



export function MorphingTextDemo() {
  return (<div className="flex flex-col md:flex-row justify-center items-baseline gap-2 md:gap-4">
    <h3 className="text-quaternary text-2xl md:text-3xl font-semibold opacity-80">
        I'm
    </h3>
    <MorphingText 
        texts={texts} 
        className="text-3xl md:text-4xl font-bold text-quaternary font-mono" 
    />
</div>)
}
