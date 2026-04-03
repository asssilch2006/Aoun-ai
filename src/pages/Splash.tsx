import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/select-user");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#0D1B2A] font-body flex items-center justify-center min-h-screen overflow-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Radial Background Layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#0A4F75_0%,_#0D1B2A_100%)] z-0"></div>
      {/* Noise Grain Texture Overlay */}
      <div className="fixed inset-0 noise-grain pointer-events-none z-10"></div>
      {/* Main Content Wrapper */}
      <main className="relative z-20 flex flex-col items-center justify-center w-full max-w-lg px-8 text-center cursor-pointer" onClick={() => navigate("/select-user")}>
        {/* Logo Section */}
        <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
          {/* Pulsing Rings */}
          <div className="absolute border border-primary/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-[1.2] opacity-20"></div>
          <div className="absolute border border-primary/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-[1.5] opacity-10"></div>
          {/* Glass Logo Anchor */}
          <div className="bg-white/5 backdrop-blur-[20px] saturate-[120%] shadow-[0_20px_40px_rgba(0,87,126,0.2)] border border-white/10 w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Trust Blue Glow */}
            <div className="absolute inset-0 bg-primary opacity-20 blur-xl"></div>
            {/* Stylized Crescent/Cross Logo */}
            <div className="relative flex items-center justify-center text-white scale-110">
              <span
                className="material-symbols-outlined text-6xl"
                style={{
                  fontVariationSettings: "'FILL' 1",
                  filter: "drop-shadow(0 0 10px rgba(138, 206, 255, 0.6))",
                }}
              >
                health_metrics
              </span>
              {/* Secondary Icon Overlay for "Crescent" hint */}
              <div className="absolute -top-1 -right-1 opacity-60">
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  brightness_2
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Typography Section */}
        <div className="space-y-4">
          <h1 className="font-headline font-bold text-6xl text-white tracking-tight leading-none">
            عون
          </h1>
          <h2 className="font-headline font-normal text-2xl text-white/70 tracking-wide">
            Aoun AI
          </h2>
          <p className="font-body text-sm font-medium text-white/50 uppercase tracking-[0.2em] mt-8">
            Every second counts.
          </p>
        </div>
        {/* Bottom Loading State */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            {/* Loading Bar */}
            <div className="h-full bg-primary-fixed-dim w-1/3 rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
