import ReachOut from "../../../components/common/ReachOut";
import AboutMe from "./AboutMe";
import ThemeToggle from "../../../components/common/ThemeToggle";
import AnimatedEyes from "../../../components/common/AnimatedEyes";

export default function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Top-right Theme Toggle button fixed cleanly to viewport corner */}
      <div className="fixed top-5 right-5 sm:top-7 sm:right-7 z-30">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* LEFT SIDE: Eyes Artwork + Name + Subtitle (centered lockup) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-4 py-2">
          <div className="w-full flex justify-center">
            <AnimatedEyes className="w-48 sm:w-56 lg:w-64" />
          </div>

          <div className="space-y-1.5">
            <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-5xl font-zaslia font-normal tracking-wide text-[var(--text-primary)] transition-colors duration-300 whitespace-nowrap">
              Shweta Pandya
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-wide transition-colors duration-300">
              technical • business • analyst
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: About Me Bio + Links */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 lg:space-y-5 text-left py-2">
          <AboutMe />
          <div className="pt-1">
            <ReachOut showScrollUp={false} align="start" />
          </div>
        </div>
      </div>
    </div>
  );
}
