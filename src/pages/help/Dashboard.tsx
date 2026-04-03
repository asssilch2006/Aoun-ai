import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0d1b2a] text-white font-body min-h-screen selection:bg-tertiary selection:text-white">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-900/70 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1a2b3c] flex items-center justify-center overflow-hidden border border-outline-variant/20">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdtJyQtvrSFWbIzIWRYYs8VWbjwr11FUv95JkBdErBhV6WltygBndjh4oHVOGvwKoX8yJI8mvny_r4SZuB9T_gqvzYcpQHQNVzWSWO1q2ATgCfrqzqHxblbAHyRRUH9t1VEtFNPzVc5EW5SVBQQf-NvAJvFxTqbaD-GkCZkTIa1zl2wtLFuNHKSxIxkfU5dEFwfi_1uVQGQCwlOlZZyr233XCaR5keINOJOM2oLGiumJq-RIFjiWqvqdlhu018gER4gr6F4sWWz0vt"
            />
          </div>
          <div>
            <h2 className="text-sm font-headline font-bold text-sky-100 leading-tight">
              Stay calm, Ahmed
            </h2>
            <div className="flex items-center gap-1.5 bg-secondary/10 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[10px] font-label uppercase tracking-wider text-secondary">
                Sétif, Algeria
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-xs font-label text-sky-400 font-bold bg-primary-container/10 px-3 py-1.5 rounded-full hover:bg-sky-800/50 transition-colors">
            AR | FR
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            title="Exit / Switch Role"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
          </button>
        </div>
      </header>
      <main className="pt-24 pb-40 px-6 max-w-lg mx-auto min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 noise-grain"></div>
        {/* Main SOS Centerpiece */}
        <section className="flex flex-col items-center justify-center py-12 relative">
          {/* Concentric Pulsing Rings */}
          <div className="absolute w-[320px] h-[320px] border border-tertiary/10 rounded-full"></div>
          <div className="absolute w-[280px] h-[280px] border border-tertiary/20 rounded-full"></div>
          <div className="absolute w-[240px] h-[240px] border border-tertiary/30 rounded-full"></div>
          {/* The SOS Button */}
          <button className="relative w-48 h-48 rounded-full bg-tertiary shadow-[0_0_60px_rgba(161,24,17,0.4)] flex flex-col items-center justify-center group active:scale-95 transition-transform duration-200">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-tertiary to-red-400 opacity-50 blur-xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-white text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
            </div>
          </button>
          {/* Labels */}
          <div className="mt-12 text-center space-y-2">
            <p className="text-white/80 font-label text-sm tracking-[3px] uppercase font-bold">
              HOLD FOR EMERGENCY
            </p>
            <p className="text-white/40 text-xs font-body">
              Hold 3 seconds to activate
            </p>
          </div>
        </section>
        {/* Quick Action Glass Cards */}
        <section className="grid grid-cols-2 gap-4 mt-8">
          <div
            onClick={() => navigate("/help/sos/video")}
            className="bg-white/5 backdrop-blur-2xl p-5 rounded-lg border border-white/5 flex flex-col items-start gap-4 hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-fixed-dim">
              <span className="material-symbols-outlined">videocam</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-sm">
                Video Analysis
              </h3>
              <p className="text-[11px] text-white/50 mt-1">Live AI assessment</p>
            </div>
          </div>
          <div
            onClick={() => navigate("/help/sos/call")}
            className="bg-white/5 backdrop-blur-2xl p-5 rounded-lg border border-white/5 flex flex-col items-start gap-4 hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-fixed-dim">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-sm">Voice Call</h3>
              <p className="text-[11px] text-white/50 mt-1">Talk to dispatch</p>
            </div>
          </div>
        </section>
        {/* First Aid Guide Horizontal Scroll */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-white/60">
              First Aid Guides
            </h4>
            <button
              onClick={() => navigate("/help/guides")}
              className="text-[10px] font-label text-primary-fixed-dim"
            >
              SEE ALL
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-2 px-2">
            <div
              onClick={() => navigate("/help/guides/cpr")}
              className="flex-none w-40 bg-[#1a2b3c] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="h-24 w-full bg-slate-800 relative">
                <img
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOKWi0xSewkiqZg7YBnvqhf45-jPy5llZaTRk361Ce871tI_nzZC1uj8duRMeJry5E-Gfst3wFT8FtpwDElkAVvBQI1_V9uVlyXXOHlCzNczm3CQwrN806zFuxaAZv6QCIDDoHrY6uHYuKZud0szg4iHPPx6XuRKCMTi3AT3uZYFfXC8eGEHlLiR9-onfmpDRuSZlDJK4wZijvlvv3EStcKAM3WoCyHN5ZZHIMksb3jXVbVUGQBNsOCl4hejvRbmGIh3rq8TD5Y_0m"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c] to-transparent"></div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold leading-tight">
                  CPR Procedures
                </p>
                <p className="text-[10px] text-white/40 mt-1">2 min read</p>
              </div>
            </div>
            <div
              onClick={() => navigate("/help/guides/bleeding")}
              className="flex-none w-40 bg-[#1a2b3c] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="h-24 w-full bg-slate-800 relative">
                <img
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBglDvZzgOAj0ma3NVybMxTUy_WDlRmrucrjg1XPpypMzr12raABOyhOELZc9Iaugj4QswMytrzyQGQ5ohE2J9BcSwUfqG1giPKh7-zNtXsTIEHxBmIFFTX0zbCRoKxQrsEhmiYOXiJMD6hQQiwih4hbM6IM3SjbFELUUpOKTfNEm3RybHoiPAdoeKu9ZBF3qukkq-29_Z6ZxwL9pWJ3yMM3M4uZ76rDUHvr5TxQhQXkF_1hyjCzoMf13GkBvX9RC4NXNG7SffZd3sJ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c] to-transparent"></div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold leading-tight">
                  Severe Bleeding
                </p>
                <p className="text-[10px] text-white/40 mt-1">1 min read</p>
              </div>
            </div>
            <div className="flex-none w-40 bg-[#1a2b3c] rounded-xl overflow-hidden group cursor-pointer">
              <div className="h-24 w-full bg-slate-800 relative">
                <img
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlvdw7vqjBawlorn9BCX9LtN2oWWcO8uv5gwrqygdrvdFrGJCUwAErs7NZxPw2hKSFHCTID4sV6DYpqC-csK-kaGBvih3uGzvIMJ-OD5IB0y1Aqxi8nxa83o8hM5jW0Fn7tebu6BDqG_H1zuHQtw34TZZTgTffBV3-Gx3yRBlr9Y20UMJdtcoKPAeUfNf_aO32YBQpqHigIHP9TZqXH_bW-QzGijRELQnbX2AXWSzz17hhCvYEeqNPLGVZZ_f2Gs8Qz7sFxLYse6Vl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c] to-transparent"></div>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold leading-tight">
                  Choking Help
                </p>
                <p className="text-[10px] text-white/40 mt-1">3 min read</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Navigation Shell */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,87,126,0.08)] rounded-full w-[90%] max-w-md h-20 flex justify-around items-center relative border border-white/5">
          <div className="absolute inset-0 noise-grain rounded-full"></div>
          {/* Active Tab: Emergency */}
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center bg-tertiary text-white rounded-full w-14 h-14 shadow-lg scale-110 relative z-10 transition-transform"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emergency
            </span>
            <span className="text-[8px] uppercase tracking-tighter mt-0.5">
              SOS
            </span>
          </button>
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
              Health
            </span>
          </button>
          <button
            onClick={() => navigate("/help/ai")}
            className="flex flex-col items-center justify-center text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
              AI Assist
            </span>
          </button>
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">monitor_heart</span>
            <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
              Vitals
            </span>
          </button>
          <button
            onClick={() => navigate("/help/profile")}
            className="flex flex-col items-center justify-center text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
              Profile
            </span>
          </button>
        </div>
      </nav>
      {/* Visual Vitals Background Effect */}
      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-tertiary/10 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
}
