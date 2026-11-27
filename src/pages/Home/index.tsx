import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowDown, ArrowRight } from "lucide-react";
import HanssenShell from "../../components/layout/HanssenShell";
import SocialBento from "../../components/common/SocialBento";
import AnimatedEyes from "../../components/common/AnimatedEyes";
import uiuxCover from "../../assets/images/uiux-folder-cover.png";
import codingCover from "../../assets/images/coding-folder-cover.png";
import creative1 from "../../assets/images/creative/creative-1.webp";
import creative2 from "../../assets/images/creative/creative-2.webp";
import creative3 from "../../assets/images/creative/creative-3.webp";

const workCategories = [
  {
    id: "developer",
    title: "Developer",
    image: codingCover,
    to: "/projects?category=developer",
  },
  {
    id: "uiux",
    title: "UI/UX",
    image: uiuxCover,
    to: "/projects?category=uiux",
  },
];

const creativeSlides = [
  { id: "creative-1", image: creative1, alt: "Creative artwork 01" },
  { id: "creative-2", image: creative2, alt: "Creative artwork 02" },
  { id: "creative-3", image: creative3, alt: "Creative artwork 03" },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { hash } = useLocation();
  const slides = creativeSlides;

  useEffect(() => {
    document.title = "pandyashweta";
  }, []);

  useEffect(() => {
    if (hash === "#about") {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const leftPanel = (
    <div
      className="relative w-full h-full overflow-hidden bg-[var(--bg-card)] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Horizontal Sliding Track */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <Link
            key={slide.id}
            to="/creative"
            className="w-full h-full shrink-0 block"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </Link>
        ))}
      </div>

      {/* Prev / Next Slight Glass Controls */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous creative artwork"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-black/25 hover:bg-black/50 backdrop-blur-md border border-white/15 text-white opacity-70 hover:opacity-100 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next creative artwork"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-lg bg-black/25 hover:bg-black/50 backdrop-blur-md border border-white/15 text-white opacity-70 hover:opacity-100 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom-Left View Creative Glass Button */}
      <Link
        to="/creative"
        className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-black/35 hover:bg-black/55 backdrop-blur-md border border-white/15 px-3.5 py-2 text-[14px] font-medium text-white transition-colors"
      >
        <span>View Creative</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>

      {/* Bottom-Center Pagination Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 px-2.5 py-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlideIndex(idx)}
              aria-label={`Show ${s.alt}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === slideIndex ? "w-4 bg-white" : "w-1.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <HanssenShell leftPanel={leftPanel} bottomRightLabel="Creative">
      {/* Top Bento Row: Bio Card + Socials Stack */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_1fr] gap-3">
        {/* Bio Card */}
        <div className="rounded-2xl bg-[var(--bg-card)] p-6 flex flex-col justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center overflow-hidden p-2 shrink-0">
              <AnimatedEyes className="w-full" />
            </div>
            <div>
              <h1 className="text-[20px] sm:text-[22px] font-medium tracking-tight leading-tight text-[var(--text-primary)]">
                Shweta Pandya
              </h1>
              <p className="text-[14px] text-[var(--text-secondary)] mt-0.5">
                technical • business • analyst
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-[14.5px] leading-[1.6] text-[var(--text-secondary)]">
            <p>
              Hi, I&apos;m Shweta. My experience spans{" "}
              <span className="text-[var(--text-primary)] font-medium">web development</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">business operations</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">data analysis</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">UI/UX design</span>, and{" "}
              <span className="text-[var(--text-primary)] font-medium">backend technologies</span>.
            </p>
            <p>
              I&apos;m interested in{" "}
              <span className="text-[var(--text-primary)] font-medium">cybersecurity</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">research</span>, and{" "}
              <span className="text-[var(--text-primary)] font-medium">environmental issues</span>—combining
              analytical thinking and creativity to build practical products.
            </p>
          </div>
        </div>

        {/* Socials & Contact Stack */}
        <SocialBento layout="stack" />
      </div>

      {/* Latest Work Header Bar */}
      <div className="rounded-xl bg-[var(--bg-card)] px-5 py-3.5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[15px] font-normal text-[var(--text-primary)]">
          <span>Latest Work</span>
          <ArrowDown className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
        </span>

        <Link
          to="/projects"
          className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4 transition-colors"
        >
          View All
        </Link>
      </div>

      {/* 2-Column Category Grid (UI/UX & Developer) with Inverted Top-Left Title Cutouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {workCategories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.to}
            className="group relative aspect-[16/10] block"
          >
            {/* Inverted Top-Left Corner Title Tab */}
            <span className="hanssen-cutout-tl absolute top-0 left-0 z-20 inline-flex items-center gap-1.5 pl-2 pr-4 pt-1 pb-2 text-[15px] font-normal text-[var(--text-primary)]">
              <span>{cat.title}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </span>

            <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--bg-card)]">
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:blur-[2px]"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* All Projects Full-Width Bar */}
      <Link
        to="/projects"
        className="group rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-transparent hover:border-[var(--border-color)] px-5 py-3.5 flex items-center justify-between text-[15px] font-normal text-[var(--text-primary)] transition-all duration-200"
      >
        <span>All Projects</span>
        <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all" />
      </Link>

      {/* About Bento Card */}
      <section
        id="about"
        className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-7 space-y-4"
      >
        <h2 className="text-[18px] sm:text-[20px] font-medium tracking-tight text-[var(--text-primary)]">
          About
        </h2>
        <div className="space-y-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
          <p>
            My experience spans{" "}
            <span className="text-[var(--text-primary)] font-medium">web development</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">business operations</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">data analysis</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">UI/UX design</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">backend technologies</span>, and{" "}
            <span className="text-[var(--text-primary)] font-medium">product database management</span>.
          </p>
          <p>
            I&apos;m interested in{" "}
            <span className="text-[var(--text-primary)] font-medium">cybersecurity</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">technology</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">research</span>, and{" "}
            <span className="text-[var(--text-primary)] font-medium">environmental issues</span>. I enjoy
            combining analytical thinking, technical skills, and creativity to work on practical
            projects and explore new ideas.
          </p>
          <p>
            Outside of work, I&apos;m usually coding, learning something new, sketching, editing
            videos, reading, writing, or exploring whatever interests me that week. I like reading
            books, that&apos;s one of my consistent hobbies.
          </p>
        </div>
      </section>

      {/* Bottom Socials & Contact */}
      <SocialBento layout="grid" />
    </HanssenShell>
  );
}
