import { useNavigate } from "react-router-dom";

export default function Vitals() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed-variant" dir="rtl" lang="ar">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 rtl:flex-row-reverse bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-surface-container-lowest shadow-inner">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsJ73rRGPdQ_ipfEijcn2BijwZFz83ag2AdNY2jlR0i5wNc4bymYoQBFEMxbWzeZvFlHZ4FSkvbg55ToiwiP4XHsiXOKwseqVy8ElzZJOkOF-QhIfh7Lk2C3HEIu_-auWkGmhp5NdjdTWsPRtq-QnrfZN7DIOTtn3Q2473tmv3nfFugiTkXVTqFCGPqkDHHBm4sPnsBXV2HtEMf679xDyQNmJ7GOA03Yi42LWKI1c33Vxrv19q394KxJz0rg5Swpp6FapLW_uqzKIs"
            />
          </div>
          <h1 className="text-2xl font-bold text-sky-900 dark:text-sky-100 font-headline">
            Aoun AI
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sky-800 dark:text-sky-400 font-label tracking-widest text-sm font-bold">
            AR | FR
          </span>
          <button
            onClick={() => navigate("/")}
            className="material-symbols-outlined text-sky-800 dark:text-sky-400 cursor-pointer p-2 hover:bg-sky-100/50 rounded-full transition-colors"
            title="Exit / Switch Role"
          >
            logout
          </button>
        </div>
      </header>
      <main className="pt-24 pb-32 px-4 max-w-lg mx-auto space-y-8">
        {/* Header Card: Trust Blue Gradient Glass */}
        <section className="glass-card bg-gradient-to-br from-primary to-primary-container p-8 rounded-xl shadow-[0_20px_40px_rgba(0,87,126,0.15)] text-on-primary">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-[72px] h-[72px] rounded-full border-4 border-white/20 overflow-hidden shadow-lg">
                <img
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Fe6LZR7GRGrVHJ_IT4XVokkj_PGGk-fuvmAbuUg1YdzcVF_NPo4axn5wbSSJu-g2zwuhU1DmxTp_0PA2r0Fnv7XXRHsg97hF47LuXs-Y27grl677RDAAlemE5nenkp-B4ptFGROjpBX6ZJFC0K0pBPbWzc8H3_He4w1EofZ3aNUInSpJXvuoin9d-cqA1SlgrVv_kKlvLlAzBkp1K3ms8mKlIA6Xy4smUcbhZk767q2vxHfdE_IGJZaiIuJg0pnlmHLYqlVDPqQR"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-secondary text-white rounded-full p-1 border-2 border-primary">
                <span
                  className="material-symbols-outlined text-xs"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold font-headline mb-1">
                أحمد المنصوري
              </h2>
              <div className="flex items-center gap-2">
                <span className="bg-tertiary text-on-tertiary px-3 py-0.5 rounded-full text-xs font-label font-bold tracking-tighter">
                  O+ POSITIVE
                </span>
                <span className="text-white/70 text-sm">34 Year Old</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center pt-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-white/60 text-[10px] uppercase font-label">
                Weight
              </p>
              <p className="font-label text-lg font-bold">78.5 kg</p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-[10px] uppercase font-label">
                Height
              </p>
              <p className="font-label text-lg font-bold">182 cm</p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-[10px] uppercase font-label">
                ID No.
              </p>
              <p className="font-label text-lg font-bold">#4920</p>
            </div>
          </div>
        </section>
        {/* Vitals Tracker: Horizontal Scroll */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              Vitals Monitor
            </h3>
            <span className="text-xs font-label text-outline uppercase tracking-wider">
              Live Sync
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
            {/* Heart Rate */}
            <div className="flex-shrink-0 w-40 glass-card bg-surface-container-low p-5 rounded-xl border-b-2 border-secondary-fixed shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span
                  className="material-symbols-outlined text-tertiary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <span className="text-[10px] font-label text-secondary font-bold">
                  +2%
                </span>
              </div>
              <p className="text-[10px] text-outline font-label uppercase mb-1">
                Heart Rate
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-label font-bold text-on-surface">
                  72
                </span>
                <span className="text-xs text-outline font-label">BPM</span>
              </div>
              <div className="mt-3 h-8 w-full bg-secondary-container/20 rounded flex items-end gap-[2px] p-1">
                <div className="h-1/2 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
                <div className="h-3/4 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
                <div className="h-2/3 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
                <div className="h-full w-full bg-secondary rounded-t-sm"></div>
              </div>
            </div>
            {/* Blood Pressure */}
            <div className="flex-shrink-0 w-40 glass-card bg-surface-container-low p-5 rounded-xl border-b-2 border-primary-fixed shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  speed
                </span>
                <span className="text-[10px] font-label text-outline font-bold">
                  Stable
                </span>
              </div>
              <p className="text-[10px] text-outline font-label uppercase mb-1">
                Pressure
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-label font-bold text-on-surface">
                  120/80
                </span>
                <span className="text-xs text-outline font-label">mmHg</span>
              </div>
              <div className="mt-3 h-8 w-full bg-primary-container/10 rounded flex items-center justify-center">
                <div className="w-full h-px bg-primary/20 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
            {/* SpO2 */}
            <div className="flex-shrink-0 w-40 glass-card bg-surface-container-low p-5 rounded-xl border-b-2 border-secondary-fixed shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  air
                </span>
                <span className="text-[10px] font-label text-secondary font-bold">
                  Optimal
                </span>
              </div>
              <p className="text-[10px] text-outline font-label uppercase mb-1">
                Oxygen
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-label font-bold text-on-surface">
                  98
                </span>
                <span className="text-xs text-outline font-label">%</span>
              </div>
              <div className="mt-3 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Grid (2x2): Core Info */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass-card bg-surface-container-lowest p-5 rounded-xl shadow-sm border-r-4 border-primary">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary text-xl">
                clinical_notes
              </span>
              <h4 className="font-headline font-bold text-sm">Conditions</h4>
            </div>
            <div className="space-y-2">
              <span className="block text-xs bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant">
                Hypertension
              </span>
              <span className="block text-xs bg-surface-container-high px-2 py-1 rounded-md text-on-surface-variant">
                Mild Asthma
              </span>
            </div>
          </div>
          <div className="glass-card bg-surface-container-lowest p-5 rounded-xl shadow-sm border-r-4 border-tertiary">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-tertiary text-xl">
                warning
              </span>
              <h4 className="font-headline font-bold text-sm">Allergies</h4>
            </div>
            <div className="space-y-2">
              <span className="block text-xs bg-error-container text-on-error-container px-2 py-1 rounded-md">
                Penicillin
              </span>
              <span className="block text-xs bg-error-container text-on-error-container px-2 py-1 rounded-md">
                Peanuts
              </span>
            </div>
          </div>
          <div className="glass-card bg-surface-container-lowest p-5 rounded-xl shadow-sm border-r-4 border-secondary">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-secondary text-xl">
                pill
              </span>
              <h4 className="font-headline font-bold text-sm">Medications</h4>
            </div>
            <div className="space-y-2">
              <span className="block text-xs bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md">
                Lisinopril 10mg
              </span>
              <span className="block text-xs bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md">
                Salbutamol
              </span>
            </div>
          </div>
          <div className="glass-card bg-surface-container-lowest p-5 rounded-xl shadow-sm border-r-4 border-surface-tint">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary text-xl">
                water_drop
              </span>
              <h4 className="font-headline font-bold text-sm">Blood Type</h4>
            </div>
            <div className="flex flex-col items-center justify-center h-12">
              <p className="text-3xl font-label font-bold text-tertiary tracking-tighter">
                O+
              </p>
              <p className="text-[10px] text-outline font-label uppercase">
                Positive
              </p>
            </div>
          </div>
        </section>
        {/* Medical History Timeline */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                history
              </span>
              Medical History
            </h3>
            <button className="text-primary text-sm font-semibold flex items-center gap-1">
              See All
              <span className="material-symbols-outlined text-sm">
                chevron_left
              </span>
            </button>
          </div>
          <div className="relative space-y-0 before:absolute before:right-6 before:top-2 before:bottom-2 before:w-px before:bg-surface-variant">
            {/* Timeline Item 1 */}
            <div className="relative pr-14 pb-8">
              <div className="absolute right-4 top-1 w-4 h-4 rounded-full bg-secondary border-4 border-surface ring-4 ring-secondary/10"></div>
              <div className="glass-card bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-sm">
                    Consultation: Cardiologist
                  </h5>
                  <span className="text-[10px] font-label text-outline">
                    OCT 24, 2025
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Routine check-up with Dr. Salim. Heart rhythm confirmed
                  stable. Adjusting Lisinopril dosage.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] bg-white px-2 py-1 rounded border border-outline-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">
                      attachment
                    </span>{" "}
                    report_v4.pdf
                  </span>
                </div>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative pr-14 pb-8">
              <div className="absolute right-4 top-1 w-4 h-4 rounded-full bg-tertiary border-4 border-surface ring-4 ring-tertiary/10"></div>
              <div className="glass-card bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-sm text-tertiary">
                    Emergency Alert
                  </h5>
                  <span className="text-[10px] font-label text-outline">
                    AUG 12, 2025
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  SOS triggered due to sudden tachycardia. Ambulance dispatched.
                  Stabilization achieved on-site.
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="text-[10px] font-bold text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      play_circle
                    </span>{" "}
                    VIEW AI LOGS
                  </button>
                </div>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative pr-14">
              <div className="absolute right-4 top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface ring-4 ring-primary/10"></div>
              <div className="glass-card bg-surface-container-low p-4 rounded-xl">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-sm">Lab Results: Blood Panel</h5>
                  <span className="text-[10px] font-label text-outline">
                    MAY 05, 2025
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Complete blood count (CBC) and Metabolic panel. All values
                  within clinical sanctuary range.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,87,126,0.08)] w-[90%] max-w-md rounded-full h-20 flex justify-around items-center px-4">
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">emergency</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Emergency
            </span>
          </button>
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Health Hub
            </span>
          </button>
          <button
            onClick={() => navigate("/help/ai")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              AI Assist
            </span>
          </button>
          {/* Active Tab: My Health */}
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center bg-sky-600 dark:bg-sky-500 text-white rounded-full w-14 h-14 shadow-lg scale-95 duration-150 ease-in-out"
          >
            <span className="material-symbols-outlined">monitor_heart</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              My Health
            </span>
          </button>
          <button
            onClick={() => navigate("/help/profile")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Profile
            </span>
          </button>
        </div>
      </nav>
      {/* Decorative Glow Element */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}
