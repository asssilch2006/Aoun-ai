import { useNavigate } from "react-router-dom";

export default function ProvideDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(16,112,160,0.05)] flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed-dim">
            <img
              alt="Dr. Sofia"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQUQTLHjF5-vd9_vtdv4FEzxi2JpVpYBYVUxrfBwRtWyI-b2u0NSjRccC2z44KshNFL1w99Jyqytd61nTy4CmrO6pbPm82tPZZW0KQCUYoC5sIs82ABZZZC_PkIK9ry31Jyr_m1ydjLs3IAKR5EZRIzA-rMDpxkdQ2IMoCBLa2aRhiha5UlUCOlO02c2MmLhH8uXm534bFp6qP2uiJ9jRFjbECaBtUjmrCQJJMvx774jJCCAfOAj9LL8yyfmANkg_tsi1EsH6Ms99a"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-['Sora'] font-bold text-sky-800 tracking-tight text-lg">
              Aoun AI
            </span>
            <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
              Medical Command
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a className="text-sky-700 font-semibold transition-colors" href="#">
              Dashboard
            </a>
            <a className="text-slate-500 hover:text-sky-600 transition-colors" href="#">
              Jobs
            </a>
            <a className="text-slate-500 hover:text-sky-600 transition-colors" href="#">
              Schedule
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-sky-50 transition-colors relative">
            <span className="material-symbols-outlined text-sky-700">
              notifications
            </span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
          </button>
          <div className="hidden sm:flex bg-surface-container-low rounded-full px-4 py-1.5 items-center gap-2 border border-outline-variant/15">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="text-xs font-semibold text-secondary">Active</span>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center p-2 rounded-full hover:bg-sky-50 transition-colors text-slate-500 hover:text-sky-700"
            title="Exit / Switch Role"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
          </button>
        </div>
      </header>
      <main className="pt-28 pb-32 px-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">
                Welcome back, Dr. Sofia
              </h1>
              <p className="text-on-surface-variant max-w-md">
                Your clinical sanctuary is ready. You have 3 pending consultations
                and 1 urgent notification.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container rounded-lg p-4 flex items-center gap-4 border border-outline-variant/15">
                <div className="p-3 bg-primary-fixed rounded-full">
                  <span className="material-symbols-outlined text-primary">
                    diversity_3
                  </span>
                </div>
                <div>
                  <div className="text-sm font-label text-on-surface-variant">
                    Patients Helped
                  </div>
                  <div className="font-headline font-bold text-xl text-on-surface">
                    1,284
                  </div>
                </div>
              </div>
              <div className="bg-surface-container rounded-lg p-4 flex items-center gap-4 border border-outline-variant/15">
                <div className="p-3 bg-secondary-container rounded-full">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    trending_up
                  </span>
                </div>
                <div>
                  <div className="text-sm font-label text-on-surface-variant">
                    Impact Score
                  </div>
                  <div className="font-headline font-bold text-xl text-on-surface">
                    98%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Patient Requests */}
          <div className="md:col-span-8 glass-panel rounded-lg p-8 border border-outline-variant/15 shadow-[0_20px_40px_rgba(0,87,126,0.05)] overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold mb-4">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  3 NEW REQUESTS
                </div>
                <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  New Patient Requests
                </h2>
                <p className="text-on-surface-variant text-sm">
                  Patients awaiting your immediate clinical guidance.
                </p>
              </div>
              <button className="bg-secondary text-white rounded-full px-6 py-3 font-semibold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                Review Queue
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5 flex items-center gap-5 border border-outline-variant/15">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img
                    alt="Patient"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdTBlw9FyHK6JECFVuUl2QqwrkAqSygDpATIzjMTzKkGnpN9BzwAJoL7S9zcgR0ttlFzUhQ4Uuz9_-Qo7xf7OPErim1gzUEa4n28vFkWkrastIpU7DXX93EqH5amCiBUxGwMzAxsYP1Y_mQT-g9vl5iQMR1uuNI2tbQ--fdeGrG1DzIlRWo_WRYkijMrnNKTCf0qDE5IlX-kH5edWDi1Q4iKOsqkvhT_txiTHiWTsK2fGjXHuSUaq-kKpCRZjHqUoPOvTRWMXBsNcF"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-on-surface">Elara Vance</span>
                    <span className="text-xs font-label text-secondary font-bold">
                      CARDIOLOGY
                    </span>
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    Symptoms: Rapid heartbeat, dizziness. AI-Triaged: Level 2
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  chevron_right
                </span>
              </div>
              <div className="bg-white/50 rounded-xl p-5 flex items-center gap-5 border border-outline-variant/15">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img
                    alt="Patient"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl0Rs8iV6kYqzYcZEha4oSHNOmnAJ774ghxLaE-_g1XJC-ek0GRDz5tI4UAjBjRxP3v_BFZ9nEnRPhfW_0qy2lq0J2fo-AZJX35Xh-4cjUdguuFr2os3faTh_PK3T2cH-6Koc2t3DgAC1Lsch2V8rh6dsH7al5MDlhg-Eqde9G1xI9q3f4LLSD2SXWOlwdG7Jm8YSKEeJhBdeSMBjUT0yGFZyvTnM-iBz0s-p_Q8cmCGeddSdvQVVwxrcpvZHfKhBWNbV9mH4bTtUV"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-on-surface">Mark J.</span>
                    <span className="text-xs font-label text-primary font-bold">
                      FOLLOW-UP
                    </span>
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    Post-op recovery check-in. Vitals stable.
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
          {/* Stats/Earnings Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-primary-container text-on-primary-container rounded-lg p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-white">
                    payments
                  </span>
                </div>
                <span className="text-xs font-label bg-white/20 px-2 py-1 rounded-full">
                  +12% this week
                </span>
              </div>
              <div className="text-sm opacity-80 mb-1">Weekly Earnings</div>
              <div className="text-3xl font-headline font-bold mb-4">
                $4,850.00
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-white rounded-full"></div>
              </div>
              <div className="mt-2 text-xs opacity-70">
                Payout expected in 2 days
              </div>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-6 border border-outline-variant/15 relative">
              <h3 className="font-headline font-bold text-on-surface mb-4">
                Availability
              </h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Instant Consultations</span>
                <div className="w-12 h-6 bg-secondary rounded-full relative p-1 flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="text-xs text-on-surface-variant leading-relaxed">
                Currently receiving Tier 1 and Tier 2 urgent requests only.
              </div>
            </div>
          </div>
          {/* Job Opportunities */}
          <div className="md:col-span-6 glass-panel rounded-lg p-8 border border-outline-variant/15 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-fixed rounded-lg">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  work
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold">
                Job Opportunities
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-surface rounded-xl flex justify-between items-center group cursor-pointer hover:bg-primary-fixed/30 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      local_hospital
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">St. Jude Regional</div>
                    <div className="text-xs text-on-surface-variant">
                      Shift Lead • Remote Triage
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">$180/hr</div>
                  <div className="text-[10px] font-label uppercase tracking-wider text-on-surface-variant">
                    Immediate
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface rounded-xl flex justify-between items-center group cursor-pointer hover:bg-primary-fixed/30 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">
                      biotech
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Aethel AI Research</div>
                    <div className="text-xs text-on-surface-variant">
                      Clinical Validator
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">$220/hr</div>
                  <div className="text-[10px] font-label uppercase tracking-wider text-on-surface-variant">
                    Contract
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Active Consultations */}
          <div className="md:col-span-6 bg-surface-container-low rounded-lg p-8 border border-outline-variant/15 relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary-container rounded-lg">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    medical_services
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold">
                  Active Sessions
                </h3>
              </div>
              <span className="text-xs font-label text-secondary font-bold">
                2 LIVE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 opacity-50"></div>
                <div className="flex justify-between mb-3 relative z-10">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">
                    Live Monitor
                  </span>
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                </div>
                <div className="font-label text-2xl font-bold text-on-surface relative z-10">
                  118 <span className="text-xs text-on-surface-variant font-normal">SYS</span>
                </div>
                <div className="text-xs font-medium text-on-surface-variant relative z-10">
                  Patient: J. Thompson
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex justify-between mb-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                    Follow-up
                  </span>
                  <span className="material-symbols-outlined text-xs text-primary">
                    chat
                  </span>
                </div>
                <div className="font-label text-2xl font-bold text-on-surface">
                  08 <span className="text-xs text-on-surface-variant font-normal">MIN</span>
                </div>
                <div className="text-xs font-medium text-on-surface-variant">
                  Scheduled: S. Lee
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Stats Overlay Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/15">
            <span className="material-symbols-outlined text-sky-700 text-3xl">
              calendar_month
            </span>
            <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">
              Upcoming
            </span>
            <span className="font-headline font-bold text-lg">12 Today</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/15">
            <span className="material-symbols-outlined text-secondary text-3xl">
              star
            </span>
            <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">
              Rating
            </span>
            <span className="font-headline font-bold text-lg">4.9 / 5.0</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/15">
            <span className="material-symbols-outlined text-primary text-3xl">
              psychology
            </span>
            <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">
              AI Accuracy
            </span>
            <span className="font-headline font-bold text-lg">99.4%</span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/15">
            <span className="material-symbols-outlined text-tertiary text-3xl">
              history
            </span>
            <span className="text-xs font-label uppercase text-on-surface-variant tracking-widest">
              Avg. Response
            </span>
            <span className="font-headline font-bold text-lg">4.2 min</span>
          </div>
        </section>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl rounded-t-[2.5rem] z-50 shadow-[0_-15px_40px_rgba(0,87,126,0.08)]">
        <button
          onClick={() => navigate("/provide/dashboard")}
          className="flex flex-col items-center justify-center bg-sky-100/50 text-sky-800 rounded-full px-5 py-2 scale-105"
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
        <button
          onClick={() => navigate("/provide/ai")}
          className="flex flex-col items-center justify-center text-slate-400 px-5 py-2 hover:text-sky-600 transition-colors"
        >
          <span className="material-symbols-outlined">smart_toy</span>
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
      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform duration-300 z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
