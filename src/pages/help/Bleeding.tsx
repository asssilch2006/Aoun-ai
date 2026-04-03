import { useNavigate } from "react-router-dom";

export default function Bleeding() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-roboto text-on-surface antialiased overflow-x-hidden">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,87,126,0.08)]">
        <div className="flex items-center justify-between px-6 h-16 w-full">
          <div className="flex items-center gap-4">
            <span
              onClick={() => navigate("/help/guides")}
              className="material-symbols-outlined text-sky-700 dark:text-sky-400 active:scale-95 duration-200 cursor-pointer"
            >
              arrow_back
            </span>
            <h1 className="font-roboto font-bold tracking-tight text-sky-700 dark:text-sky-400">
              EMERGENCY GUIDE
            </h1>
          </div>
          <span className="material-symbols-outlined text-sky-700 dark:text-sky-400">
            medical_services
          </span>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 h-[1px] opacity-15"></div>
      </header>
      <main className="pt-16 pb-32">
        {/* Critical Header Band */}
        <section className="bg-[#E74C3C] py-8 px-6 text-center shadow-lg">
          <h2 className="text-white font-roboto font-bold text-2xl md:text-3xl tracking-wide uppercase">
            SEVERE BLEEDING: IMMEDIATE ACTION REQUIRED
          </h2>
        </section>
        <div className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
          {/* Reassurance Note */}
          <div className="text-center py-2">
            <p className="font-roboto font-medium text-lg text-primary tracking-tight">
              STAY CALM. HELP IS ON THE WAY
            </p>
          </div>
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Step 1: APPLY DIRECT PRESSURE */}
            <div className="md:col-span-12 lg:col-span-7 glass-card noise-overlay rounded-lg p-8 shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20">
              <div className="flex items-start gap-6">
                <div className="bg-tertiary/10 p-4 rounded-full flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-tertiary text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    front_hand
                  </span>
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-xl md:text-2xl text-on-surface mb-2">
                    Step 1: APPLY DIRECT PRESSURE
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Use a clean cloth or your hands. Press down firmly on the
                    wound without stopping. Do not lift to check if bleeding has
                    stopped.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg overflow-hidden h-48 w-full bg-surface-container">
                <img
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                  alt="pressure"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDouQTWCK4vNrFmrzGr7Uzrs5-pfC3_ezz9n4LWdtJS2jBMgNOo8k0x-ERtqkvTZc0aUpM5jpATWEHVmCy7xqBFNLfRdJHd8DYFx0gERwDQbOEN7ffTut1FCr4zumudHtc9iTM2Z9q03lRYp7SSB-8QZMb_-joWWszrkh5yQ0m9sEOct5n7Phwp-MoZQbD8PTtcMfLgP2Z4LUjwRBAJhOvT6z4SaILrXXmrTARie61YPr16_BE4hC5VvKnF6GB-YEUcNepGYfew5wuY"
                />
              </div>
            </div>
            {/* Step 2: ELEVATE WOUND */}
            <div className="md:col-span-6 lg:col-span-5 bg-surface-container-low rounded-lg p-8 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    upload
                  </span>
                </div>
                <h3 className="font-roboto font-bold text-lg text-on-surface">
                  Step 2: ELEVATE WOUND
                </h3>
              </div>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                If possible, raise the injured limb above the level of the heart
                to slow the blood flow through gravity.
              </p>
              <div className="rounded-lg bg-white/50 p-4 flex justify-center">
                <span className="material-symbols-outlined text-primary-container text-8xl">
                  accessibility_new
                </span>
              </div>
            </div>
            {/* Step 3: USE TOURNIQUET */}
            <div className="md:col-span-6 lg:col-span-12 bg-surface-container-high rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-tertiary-container p-6 rounded-full">
                  <span
                    className="material-symbols-outlined text-white text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-roboto font-bold text-xl text-on-surface mb-2">
                    Step 3: USE TOURNIQUET IF NEEDED
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    If bleeding is life-threatening and direct pressure fails,
                    apply a tourniquet 2-3 inches above the wound (between the
                    wound and the heart).
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Warning Section */}
          <section className="bg-[#F1C40F] rounded-lg p-8 mt-12 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-on-surface font-bold">
                warning
              </span>
              <h3 className="font-roboto font-bold text-xl uppercase tracking-tighter">
                WARNINGS &amp; KEY NOTES:
              </h3>
            </div>
            <ul className="space-y-3 font-roboto font-bold text-on-surface">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-2 w-2 rounded-full bg-on-surface"></span>
                Do NOT remove original dressing - if blood soaks through, add
                more layers on top.
              </li>
              <li className="flex items-start gap-2 text-tertiary">
                <span className="mt-1 block h-2 w-2 rounded-full bg-tertiary"></span>
                Call Emergency Services (911/112) NOW.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-2 w-2 rounded-full bg-on-surface"></span>
                Keep the person warm and lying flat to prevent shock.
              </li>
            </ul>
          </section>
          {/* Emergency Contact Button */}
          <div className="mt-12 mb-8">
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-roboto font-bold py-5 rounded-full shadow-[0_20px_40px_rgba(0,87,126,0.15)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
              <span className="material-symbols-outlined">call</span>
              EMERGENCY CONTACTS
            </button>
          </div>
        </div>
      </main>
      {/* Bottom Navigation Shell */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[2rem]">
        <button
          onClick={() => navigate("/help/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">
            Home
          </span>
        </button>
        <button
          onClick={() => navigate("/help/guides")}
          className="flex flex-col items-center justify-center bg-sky-100/50 dark:bg-sky-900/40 text-sky-900 dark:text-sky-100 rounded-full px-5 py-2 active:scale-90 transition-transform duration-200"
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">
            Guides
          </span>
        </button>
        <button
          onClick={() => navigate("/help/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">e911_emergency</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">
            SOS
          </span>
        </button>
        <button
          onClick={() => navigate("/help/sos/call")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 transition-colors active:scale-90 duration-200"
        >
          <span className="material-symbols-outlined">call</span>
          <span className="font-label text-[10px] uppercase tracking-widest mt-1">
            Contact
          </span>
        </button>
      </nav>
    </div>
  );
}
