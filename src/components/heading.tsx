import SvgCurve from "./stylings/svg-curve";

export default function Heading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative my-10 px-8 z-20">
      {/*Number*/}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-20 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>
      {/* heading text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[15vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title}
        </p>
        <p className="text-[15vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic">
          {subtitle}
        </p>
      </div>
      {/* Svg curve */}
      <SvgCurve />
    </div>
  );
}
