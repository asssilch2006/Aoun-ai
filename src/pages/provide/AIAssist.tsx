import { useNavigate } from "react-router-dom";

export default function ProvideAIAssist() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed antialiased min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(16,112,160,0.05)] flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              alt="Doctor profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQzN6aRTjzfkp5T9N7AQQ9GB874wr7FjjeJdAV3MS_fJLXxVTKnLlBX6p0OfxmF9P2gvkob2sDMOq6paaKoshbc8WYKSO71MRJ9UKXe9XXJW3ysyfXpIsb4e1AZ02WskwUOWnDfM_8k4r6Wl2oGEA7ZqXkY_ijLNjUcXUUW0iiLU-G-yXeOuAAgkvtyOK4J-sjAvMKbxiE-tIGRV6jvAYSK1KUZQ27ESoCKVezyZyJD9dqEi7lhWCdahkuLDTcBrxmN-bhIjv_dxFO"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Sora'] font-bold text-sky-800 tracking-tight leading-none">
              Aoun AI
            </span>
            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mt-1">
              Clinical Assistant v2.6
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-500 hover:bg-sky-50 transition-colors p-2 rounded-full">
            notifications
          </button>
          <button className="material-symbols-outlined text-slate-500 hover:bg-sky-50 transition-colors p-2 rounded-full">
            settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="material-symbols-outlined text-slate-500 hover:bg-sky-50 transition-colors p-2 rounded-full"
            title="Exit / Switch Role"
          >
            logout
          </button>
        </div>
      </header>
      <main className="pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto min-h-screen">
        {/* Welcome Section */}
        <section className="mb-10 text-center md:text-left">
          <h1 className="font-sora text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
            Good afternoon, Dr. Aris
          </h1>
          <p className="text-on-surface-variant font-body max-w-xl">
            Ready for real-time clinical verification. How can I assist with your
            rounds today?
          </p>
        </section>
        {/* Bento Grid Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <button className="group p-6 rounded-lg bg-surface-container-low hover:bg-primary-fixed transition-all duration-300 text-left flex flex-col justify-between h-40 shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/40">
            <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
              medication
            </span>
            <div>
              <h3 className="font-sora font-semibold text-on-surface">
                Check Dosage
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 font-body">
                Pediatric &amp; Geriatric adjustments
              </p>
            </div>
          </button>
          <button className="group p-6 rounded-lg bg-surface-container-low hover:bg-secondary-container transition-all duration-300 text-left flex flex-col justify-between h-40 shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/40">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
              clinical_notes
            </span>
            <div>
              <h3 className="font-sora font-semibold text-on-surface">
                Latest Medical Guidelines 2026
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 font-body">
                Cardiology &amp; Oncology updates
              </p>
            </div>
          </button>
          <button className="group p-6 rounded-lg bg-surface-container-low hover:bg-tertiary-fixed transition-all duration-300 text-left flex flex-col justify-between h-40 shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/40">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4 group-hover:scale-110 transition-transform">
              summarize
            </span>
            <div>
              <h3 className="font-sora font-semibold text-on-surface">
                Summarize Patient History
              </h3>
              <p className="text-xs text-on-surface-variant mt-1 font-body">
                Extract key metrics from EHR
              </p>
            </div>
          </button>
        </div>
        {/* Chat Container */}
        <div className="flex flex-col gap-6 mb-20">
          {/* User Message */}
          <div className="flex justify-end ml-12">
            <div className="bg-primary-container text-on-primary-container px-6 py-4 rounded-xl rounded-tr-none shadow-[0_20px_40px_rgba(0,87,126,0.08)] max-w-lg">
              <p className="font-body leading-relaxed">
                Check drug interactions between Lisinopril 10mg and Spironolactone
                25mg for a 64 y/o patient with Stage 3 CKD.
              </p>
              <span className="text-[10px] font-mono opacity-60 mt-2 block text-right">
                14:22 PM
              </span>
            </div>
          </div>
          {/* AI Response */}
          <div className="flex justify-start mr-12 gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white shadow-lg">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                smart_toy
              </span>
            </div>
            <div className="glass-panel border border-white/30 rounded-xl rounded-tl-none shadow-[0_20px_40px_rgba(0,87,126,0.08)] p-6 max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-mono font-bold tracking-widest uppercase">
                  Verified Response
                </span>
                <span className="h-1 w-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] font-mono text-on-surface-variant">
                  SOURCE: NICE GUIDELINES 2025
                </span>
              </div>
              <p className="font-body text-on-surface mb-4 leading-relaxed">
                Interaction detected:{" "}
                <span className="text-tertiary font-bold">Moderate-Severe</span>.
                Combination significantly increases risk of{" "}
                <span className="bg-tertiary/10 text-tertiary px-1 rounded">
                  Hyperkalemia
                </span>
                .
              </p>
              <div className="bg-surface-container-highest/40 rounded-lg p-4 border-l-4 border-primary mb-4">
                <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2">
                  Vitals &amp; Monitoring
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-on-surface-variant font-label">
                      EST. K+ LEVEL
                    </span>
                    <span className="font-mono text-lg text-on-surface">
                      5.2 mEq/L
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-on-surface-variant font-label">
                      GFR ESTIMATE
                    </span>
                    <span className="font-mono text-lg text-on-surface">
                      42 mL/min
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-on-surface-variant list-none p-0">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    check_circle
                  </span>
                  <span>
                    Monitor serum potassium within 3 days of co-administration.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">
                    info
                  </span>
                  <span>
                    Consider reducing Spironolactone to 12.5mg EOD.
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-label hover:bg-primary-fixed transition-colors">
                  Add to EHR
                </button>
                <button className="px-4 py-2 rounded-full border border-outline-variant text-xs font-label hover:bg-primary-fixed transition-colors">
                  Print Summary
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Suggested Commands */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs hover:bg-primary-fixed transition-all border border-transparent hover:border-primary/20">
            Alternative Medications?
          </button>
          <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs hover:bg-primary-fixed transition-all border border-transparent hover:border-primary/20">
            CKD Stage 3 protocol
          </button>
          <button className="px-4 py-2 rounded-full bg-surface-container text-on-surface-variant text-xs hover:bg-primary-fixed transition-all border border-transparent hover:border-primary/20">
            Patient lab trends
          </button>
        </div>
      </main>
      {/* Bottom Action Bar (Input) */}
      <div className="fixed bottom-0 left-0 w-full z-40 px-4 pb-8 pt-4 bg-gradient-to-t from-surface via-surface/90 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center bg-surface-container-lowest glass-panel shadow-[0_20px_40px_rgba(0,87,126,0.08)] rounded-full p-2 border border-white/50">
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body px-2"
              placeholder="Type clinical query or medication..."
              type="text"
            />
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Shell */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-2xl rounded-t-[2.5rem] z-50 shadow-[0_-15px_40px_rgba(0,87,126,0.08)] hidden md:flex">
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-sky-600 transition-colors"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Dashboard
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-sky-600 transition-colors"
        >
          <span className="material-symbols-outlined">work</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Jobs
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-sky-600 transition-colors"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Calendar
          </span>
        </button>
        {/* ACTIVE TAB: AI Assistant */}
        <button
          onClick={() => navigate("/provide/ai")}
          className="flex flex-col items-center justify-center bg-sky-100/50 text-sky-800 rounded-full px-5 py-2 scale-105"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            smart_toy
          </span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            AI Assistant
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/profile")}
          className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-sky-600 transition-colors"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Profile
          </span>
        </button>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-2xl rounded-t-[2.5rem] z-50 shadow-[0_-15px_40px_rgba(0,87,126,0.08)]">
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-2 py-1"
        >
          <span className="material-symbols-outlined text-xl">dashboard</span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-2 py-1"
        >
          <span className="material-symbols-outlined text-xl">work</span>
        </button>
        <button
          onClick={() => navigate("/provide/ai")}
          className="flex flex-col items-center justify-center bg-sky-100 text-sky-800 rounded-full w-12 h-12"
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            smart_toy
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 px-2 py-1"
        >
          <span className="material-symbols-outlined text-xl">
            calendar_today
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/profile")}
          className="flex flex-col items-center justify-center text-slate-400 px-2 py-1"
        >
          <span className="material-symbols-outlined text-xl">person</span>
        </button>
      </nav>
    </div>
  );
}
