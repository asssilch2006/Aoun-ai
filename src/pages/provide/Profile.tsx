import { useNavigate } from "react-router-dom";

export default function ProvideProfile() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(16,112,160,0.05)]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              alt="Doctor profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-secondary"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH4ODBZTFMzv-Gm1yzqc5k8GOgwSz6l3f6UKOtMtQ7NBEK6nFZ9qEf5bIOPxIidatAKiJ5LGyHVHtx7kOYcRyT7YveFCkaLTXUKhsgpRsm7SFZnO3KZeL7nJvt7sbiq6fSKUbUc03f9rqcaKSzNiX16C3lJVM4ZXYQoCUbcg2pKq1_ob0v5ICjrb2MdbTHg-oX7na2flgsNTTVQiI1leRaR9N5WFau7DKAylQNMB9Y1fyhKI6bpoeIPlQ7MWxd4Yypl9mUhA7Oy2_Q"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></span>
          </div>
          <span className="font-['Sora'] font-bold text-sky-800 dark:text-sky-300 tracking-tight text-xl">
            Aoun AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-500 hover:bg-sky-50 p-2 rounded-full transition-colors">
            notifications
          </button>
          <button className="material-symbols-outlined text-slate-500 hover:bg-sky-50 p-2 rounded-full transition-colors">
            settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="material-symbols-outlined text-slate-500 hover:bg-sky-50 p-2 rounded-full transition-colors"
            title="Exit / Switch Role"
          >
            logout
          </button>
        </div>
      </header>
      <main className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-8">
        {/* Profile Hero Section */}
        <section className="glass-panel rounded-lg p-8 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,87,126,0.08)]">
          <div className="relative group">
            <div className="w-40 h-40 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                alt="Doctor profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDsbnGaShiPuap6sojLBVIw3z_eOLkbto15VrFmDjvYrf0Lcikr4YyIL-QCjOCd7OUnFmTvgBthB95VXE2jdlHcHcjZn2C1Lpg4jnPCNLROa0ScbfTbOc3DBfFxLCOcYrufvfc-qbvcbxqc7Ue_ZnuEeVwaRoLflqkwWqqMDOiEiXN4LsphAJhVoNvyBHVpkBSLCsKKQyQ-EUYljO5WuC4WNo-aMDIbKthMHUiaaYdy8iZMeS58NJvOUjctOCNmgYdGrwH5xF-y9Z-"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-on-secondary px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border-4 border-surface">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label text-xs font-bold tracking-wider uppercase">
                Verified Expert
              </span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right space-y-4">
            <div className="space-y-1">
              <h1 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
                Dr. Amine Mansouri
              </h1>
              <p className="font-body text-on-surface-variant text-lg">
                Senior Consultant Specialist
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <div className="bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
                <span className="font-label text-xs font-bold text-primary tracking-widest uppercase">
                  12 Years Experience
                </span>
              </div>
              <div className="bg-secondary-container/30 px-4 py-2 rounded-full border border-secondary/10">
                <span className="font-label text-xs font-bold text-on-secondary-container tracking-widest uppercase">
                  Active Duty
                </span>
              </div>
            </div>
            <div className="flex gap-4 pt-4 justify-center md:justify-end">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:scale-95 transition-transform flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                Book Consultation
              </button>
              <button className="bg-white border border-outline-variant/30 text-primary px-4 py-3 rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </section>
        {/* Bento Grid Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Specialty Card */}
          <div className="md:col-span-2 glass-panel rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-container/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">
                    emergency
                  </span>
                </div>
                <h3 className="font-headline font-bold text-xl text-primary">
                  Specialty &amp; Clinical Focus
                </h3>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Expertise in Emergency Medicine and Trauma Care. Specialized in
                acute cardiac events, respiratory failure management, and rapid
                diagnostic protocols for neurological emergencies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium">
                  ER Protocols
                </span>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium">
                  Trauma Surgery
                </span>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-medium">
                  Internal Medicine
                </span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">
                  description
                </span>
                <span className="font-body font-semibold">
                  Medical Credentials.pdf
                </span>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                View CV{" "}
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </button>
            </div>
          </div>
          {/* Vitals Monitor Style Stats */}
          <div className="bg-surface-container-highest rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent animate-pulse"></div>
            <div className="space-y-8 relative z-10">
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Patient Satisfaction
                </span>
                <div className="flex items-end gap-1">
                  <span className="font-['DM_Mono'] text-4xl font-bold text-secondary">
                    98
                  </span>
                  <span className="font-['DM_Mono'] text-xl text-secondary mb-1">
                    %
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Successful Cases
                </span>
                <div className="flex items-end gap-1">
                  <span className="font-['DM_Mono'] text-4xl font-bold text-primary">
                    2.4k
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Avg. Response Time
                </span>
                <div className="flex items-end gap-1">
                  <span className="font-['DM_Mono'] text-4xl font-bold text-tertiary">
                    14
                  </span>
                  <span className="font-['DM_Mono'] text-xl text-tertiary mb-1">
                    MIN
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Service Area Map */}
          <div className="md:col-span-3 glass-panel rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200">
              <img
                alt="Map of Algiers"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQlRdopI859i0YHqgYXFd_rH-vancIOiO7pSQKZxEQCj5Swckmvj0CuBuMltnWw3t36kC9ts_eRcsHb0tYieHcF8mUkbpmsTzt6e-R5roi4t-omP1rs19sUC7eb5RT7YYwsrFpzPE3ztm7F764BFhq4QHXmJ0SmH0xTlhJW_VcV9ww0z59RSTH572hxqQbdLgeiyMQilTU-htaMNgCGntJi-ikrQmtbINHxJGWCvA5sdnOeaEd9KnPDn9QURHu-5Gd8KJejVWBsk1"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-container/20 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-secondary">
                    distance
                  </span>
                </div>
                <h3 className="font-headline font-bold text-xl text-primary">
                  Service Coverage
                </h3>
              </div>
              <p className="font-body text-on-surface-variant">
                Providing emergency home visits and on-site consultations across
                major Algiers metropolitan areas.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 font-body text-sm font-semibold text-primary">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  Hydra
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  El Biar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  Ben Aknoun
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  Sidi Yahia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  Kouba
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                  Bir Mourad Raïs
                </li>
              </ul>
              <div className="pt-4">
                <button className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
          {/* Reviews Section */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="font-headline font-bold text-2xl text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">stars</span>
              Patient Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-lg space-y-4 border border-outline-variant/5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">
                      SM
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-sm">Sami Merbah</h4>
                      <p className="text-[10px] text-slate-500 font-label uppercase">
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                </div>
                <p className="font-body text-on-surface-variant italic leading-relaxed">
                  "Dr. Mansouri was incredibly precise during my emergency call.
                  His calm demeanor and expert knowledge gave my family peace of
                  mind."
                </p>
              </div>
              <div className="glass-panel p-6 rounded-lg space-y-4 border border-outline-variant/5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">
                      LB
                    </div>
                    <div>
                      <h4 className="font-body font-bold text-sm">
                        Leila Belkacem
                      </h4>
                      <p className="text-[10px] text-slate-500 font-label uppercase">
                        1 week ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                </div>
                <p className="font-body text-on-surface-variant italic leading-relaxed">
                  "Highly professional. The CV verification on this platform makes
                  it easy to trust specialized doctors like him."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl rounded-t-[2.5rem] z-50 shadow-[0_-15px_40px_rgba(0,87,126,0.08)]">
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Dashboard
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">work</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Jobs
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Calendar
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/ai")}
          className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            AI Assistant
          </span>
        </button>
        <button
          onClick={() => navigate("/provide/profile")}
          className="flex flex-col items-center justify-center bg-sky-100/50 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 rounded-full px-5 py-2 scale-105 shadow-inner transition-transform duration-300"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            person
          </span>
          <span className="font-['DM_Mono'] text-[10px] uppercase tracking-widest mt-1">
            Profile
          </span>
        </button>
      </nav>
    </div>
  );
}
