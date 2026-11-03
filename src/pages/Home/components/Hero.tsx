import AboutMe from "./AboutMe";
import ThemeToggle from "../../../components/common/ThemeToggle";
import AnimatedEyes from "../../../components/common/AnimatedEyes";

export default function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto py-1 sm:py-2">
      {/* Top-right Theme Toggle button fixed cleanly to viewport corner */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-center">
        {/* LEFT SIDE: Eyes Artwork + Name + Subtitle (centered lockup) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-3 py-1">
          <div className="w-full flex justify-center">
            <AnimatedEyes className="w-36 sm:w-44 lg:w-48 xl:w-52" />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-zaslia font-normal tracking-wide text-[var(--text-primary)] transition-colors duration-300 whitespace-nowrap">
              Shweta Pandya
            </h1>
            <p className="text-xs font-mono text-[var(--text-muted)] tracking-wide transition-colors duration-300">
              technical • business • analyst
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: About Me Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-3 lg:space-y-3.5 text-left py-1">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
