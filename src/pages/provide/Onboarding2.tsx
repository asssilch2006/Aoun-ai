import { useNavigate } from "react-router-dom";

export default function ProvideOnboarding2() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen" dir="rtl" lang="ar">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/70 backdrop-blur-xl shadow-sm rtl:flex-row-reverse">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-sky-900 font-headline">
            Aoun AI
          </span>
        </div>
        <div className="flex items-center gap-2 text-sky-800 font-medium">
          <span>AR | FR</span>
        </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex justify-between items-center px-1">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Step 02 / 04
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
              In Progress
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-secondary transition-all duration-700 ease-out rounded-full"></div>
          </div>
        </div>
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-headline font-bold text-on-surface leading-tight mb-4 tracking-tight">
            Where and when can you help?
          </h1>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed">
            Provide your practice location and working hours to help us connect
            you with patients in your area.
          </p>
        </header>
        {/* Form Sections */}
        <div className="space-y-8">
          {/* Location Details Bento Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 glass-panel p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20">
              <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-4">
                Workplace Identity
              </label>
              <div className="relative group">
                <input
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant py-4 px-1 focus:border-primary focus:bg-primary/5 transition-all text-lg font-body placeholder:text-outline/50"
                  placeholder="Hospital/Clinic Name"
                  type="text"
                />
                <span className="absolute left-0 bottom-4 text-outline/30 material-symbols-outlined">
                  local_hospital
                </span>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20">
              <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-4">
                Wilaya
              </label>
              <select className="w-full bg-transparent border-b-2 border-outline-variant py-4 px-1 focus:border-primary text-lg font-body appearance-none cursor-pointer">
                <option>Alger (16)</option>
                <option>Oran (31)</option>
                <option>Constantine (25)</option>
                <option>Setif (19)</option>
              </select>
            </div>
            <div className="glass-panel p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20">
              <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-4">
                Commune/District
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-outline-variant py-4 px-1 focus:border-primary text-lg font-body placeholder:text-outline/50"
                placeholder="Enter district..."
                type="text"
              />
            </div>
          </section>
          {/* Home Visit Toggle */}
          <section className="glass-panel p-6 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20 flex items-center justify-between bg-primary-container/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">home_health</span>
              </div>
              <div>
                <h3 className="font-bold text-on-surface">
                  Available for home visits
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Patients can request visits at their location
                </p>
              </div>
            </div>
            {/* Custom Toggle Pill */}
            <button className="w-16 h-8 rounded-full bg-primary relative transition-colors duration-300">
              <span className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-0"></span>
            </button>
          </section>
          {/* Availability Section */}
          <section className="glass-panel p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] border border-white/20">
            <div className="flex justify-between items-center mb-8">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary">
                Weekly Availability
              </label>
              <span className="text-xs font-label text-on-surface-variant">
                Select operating days
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              <button className="px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95">
                السبت (Sat)
              </button>
              <button className="px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95">
                الأحد (Sun)
              </button>
              <button className="px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95">
                الاثنين (Mon)
              </button>
              <button className="px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95">
                الثلاثاء (Tue)
              </button>
              <button className="px-5 py-3 rounded-full bg-surface-container text-on-surface-variant font-medium border border-outline-variant/20 hover:bg-surface-variant transition-all">
                الأربعاء (Wed)
              </button>
              <button className="px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md transition-all hover:scale-105 active:scale-95">
                الخميس (Thu)
              </button>
              <button className="px-5 py-3 rounded-full bg-surface-container text-on-surface-variant font-medium border border-outline-variant/20 hover:bg-surface-variant transition-all">
                الجمعة (Fri)
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-body font-semibold">Active Range</span>
                <span className="font-label text-primary font-bold">
                  08:00 AM — 06:00 PM
                </span>
              </div>
              <div className="relative h-12 flex items-center">
                <div className="absolute w-full h-3 bg-surface-container rounded-full"></div>
                <div className="absolute right-[10%] left-[30%] h-3 bg-primary-container rounded-full"></div>
                {/* Range Handles */}
                <div className="absolute right-[10%] w-8 h-8 bg-white border-4 border-primary rounded-full shadow-lg cursor-pointer z-10"></div>
                <div className="absolute left-[30%] w-8 h-8 bg-white border-4 border-primary rounded-full shadow-lg cursor-pointer z-10"></div>
              </div>
              <div className="flex justify-between font-label text-[10px] text-outline uppercase">
                <span>12:00 AM</span>
                <span>12:00 PM</span>
                <span>11:59 PM</span>
              </div>
            </div>
          </section>
        </div>
        {/* CTA Action Area */}
        <footer className="mt-16 flex flex-col items-center gap-6">
          <button
            onClick={() => navigate("/provide/dashboard")}
            className="w-full py-5 rounded-full bg-secondary text-on-secondary text-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Next
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => navigate("/provide/dashboard")}
            className="text-on-surface-variant font-body font-medium hover:text-primary transition-colors"
          >
            Skip for now, I'll set this later
          </button>
        </footer>
      </main>
      {/* Map Visualization Backdrop */}
      <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="Map"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5KVjsjoy0Fy99PIs-S-aKSCT3xMuWomEkqsPP-fu80PhHVaWUrbomy8fvzD_T_SR9MTDmLsb1o15qzOiSCDOdBCfXyqomASeiy_jygKsocO8y91iNcvCx3Enmj5bmnNoMN9rOooppie1DhKL5TCrSOy6n1g7vKmrjB2Zpls9KtDnp1zApVWXwSdTlbVgVLcvQAkP5dGcgyIQnh1s8mr7EoDHPvel-WfWXqTYT-a_avqEI99URcvunJGUBJznoShnt9ldWFZ2GXrqJ"
        />
      </div>
    </div>
  );
}
