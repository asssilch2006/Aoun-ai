import { useNavigate } from "react-router-dom";

export default function CPR() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/help/guides")}
            className="p-2 hover:bg-sky-100/50 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-2xl">
              arrow_back
            </span>
          </button>
          <h1 className="text-2xl font-bold text-sky-900 font-headline">
            CPR Procedures
          </h1>
        </div>
        <div className="bg-primary px-4 py-1.5 rounded-full">
          <span className="text-white text-sm font-bold font-body">
            Step 3 of 7
          </span>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-32 px-6 max-w-2xl mx-auto w-full flex flex-col items-center">
        {/* Progress Rail */}
        <div className="w-full flex justify-center gap-2 mb-8">
          <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
          <div className="h-1.5 w-12 rounded-full bg-primary"></div>
          <div className="h-1.5 w-2 rounded-full bg-surface-variant"></div>
          <div className="h-1.5 w-2 rounded-full bg-surface-variant"></div>
          <div className="h-1.5 w-2 rounded-full bg-surface-variant"></div>
          <div className="h-1.5 w-2 rounded-full bg-surface-variant"></div>
        </div>
        {/* Illustration Zone */}
        <div className="w-full h-[240px] glass-panel rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] flex items-center justify-center mb-10 overflow-hidden bg-surface-container-lowest">
          <img
            alt="Medical demonstration of hand placement for CPR"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBdhi4bcilXhC00PcQKbg1weXphPFAi09BUGJyXmvOJC-TrG_KyPrBt5dujkat0FHbJNcL1btuUl40Zy4RgtjSAhH5E5uHIY9TZqADCf0cGR3xxpheYYm6M6bwY4m0yvp8M-yXz92dYUy6x47U-O0lbJD9n6hu-uSNIP1ZGzqQ0Rfm1Yr2eHfr1dOnvKpz8yxxbdoahmqbvr3jnM1nG8XkasZcGIZh1cDFYacBiGpfecDRTlnfUxehbZzdJ7R1Vzr4bTpInnIIYRxV"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        </div>
        {/* Instruction Section */}
        <div className="text-center mb-10">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-3 tracking-tight">
            Push 30 times
          </h2>
          <p className="text-on-surface-variant text-lg font-medium">
            Place your hands here.
          </p>
        </div>
        {/* Timer/Metronome Component */}
        <div className="relative group">
          <div className="w-[140px] h-[140px] rounded-full border-4 border-primary/10 flex items-center justify-center animate-[pulse-bg_0.6s_infinite_alternate]">
            <div className="w-[120px] h-[120px] bg-surface-container-lowest rounded-full shadow-lg flex flex-col items-center justify-center">
              <span className="font-mono text-4xl font-medium text-primary leading-none">
                100
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">
                BPM
              </span>
            </div>
            {/* Animated Progress Ring Decoration */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                className="text-primary"
                cx="70"
                cy="70"
                fill="none"
                r="66"
                stroke="currentColor"
                strokeDasharray="414"
                strokeDashoffset="100"
                strokeWidth="4"
              ></circle>
            </svg>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary px-3 py-1 rounded-full shadow-sm">
            <span className="text-white text-[10px] font-bold uppercase tracking-wider">
              Metronome Active
            </span>
          </div>
        </div>
      </main>
      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          <button className="flex-1 py-4 px-6 rounded-full border-2 border-outline/20 font-bold text-primary hover:bg-surface-container-low transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Previous
          </button>
          <button className="flex-[1.5] py-4 px-6 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Next Step
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        {/* Footer Strip */}
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-on-surface-variant rtl:flex-row-reverse">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <span>Help is on the way</span>
          <span className="text-outline mx-1">·</span>
          <span className="font-mono">12 min</span>
        </div>
      </div>
    </div>
  );
}
