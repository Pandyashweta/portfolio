import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 relative overflow-hidden text-center z-10 transition-colors duration-300">
      {/* Decorative Glow elements */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.02),transparent_60%)]" />

      <div className="max-w-md w-full space-y-8 relative z-10 flex flex-col items-center">
        {/* Glowing 404 Header */}
        <div className="relative select-none">
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#d4d4d8] to-[#27272a] drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] font-sans">
            404
          </h1>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-sans">
            Page Not Found
          </h2>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed font-sans font-normal max-w-sm mx-auto">
            The link you followed might be broken, or the page may have been removed. Let's get you back.
          </p>
        </div>

        {/* Back Button */}
        <div className="pt-2">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-[#e5e5e5] active:scale-98 font-semibold font-sans text-xs px-6 py-3 rounded-full transition-all shadow-md shadow-black/20 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-black" strokeWidth={2.5} />
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
