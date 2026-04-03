import { useNavigate } from "react-router-dom";

export default function Onboarding2() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col" dir="rtl" lang="ar">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm rtl:flex-row-reverse">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWQIN_JaL_7y0aNYrLdAHWooDacvLcULIbYYPBH3eT0A2kveI6vgb4wG7gl8dUk-iRA82LHUwud08eAVWuoXEzPOZcUcG6jFNlqpzkz_GjicvCdvwawtx-gbtb_DnS64YsFgc5j_HtdjWcprLB9oLevgcBN0HomIXwRMCQtyUBn2HqnaVygnRE6rNNZtHB5wyKBTQVgYpcEB4W8H5yd3aVReAsZwrRosWBXJ_LbRXrIJx9q3SqGOQ7ZXRY7g2RZrMnnkYhnfm-Og2"
            />
          </div>
          <span className="text-2xl font-bold text-sky-900 dark:text-sky-100 font-headline">
            Aoun AI
          </span>
        </div>
        <button className="text-sky-800 dark:text-sky-400 font-label font-medium px-4 py-2 hover:bg-sky-100/50 rounded-full transition-colors">
          AR | FR
        </button>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-12 px-6 max-w-2xl mx-auto w-full">
        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary font-label text-xs uppercase tracking-widest font-bold">
              Step 2 of 4
            </span>
            <span className="text-primary font-label text-xs font-bold">
              50% Complete
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/2 rounded-full shadow-[0_0_12px_rgba(0,87,126,0.3)] transition-all duration-500"></div>
          </div>
        </div>
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-3">
            Your health matters
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            This information can save your life during an emergency. Please
            provide accurate medical details.
          </p>
        </div>
        {/* Form Sections */}
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/help/onboarding/3");
          }}
        >
          {/* Section 1: Blood Type */}
          <section className="glass-card p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                water_drop
              </span>
              <h2 className="text-xl font-bold font-headline">Blood Type</h2>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-tertiary text-on-tertiary shadow-lg scale-105 border-2 border-white/20 transition-all"
                type="button"
              >
                A+
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                A-
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                B+
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                B-
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                AB+
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                AB-
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                O+
              </button>
              <button
                className="h-14 flex items-center justify-center rounded-full font-label text-lg font-bold bg-surface-container-low text-on-surface-variant hover:bg-surface-variant transition-colors"
                type="button"
              >
                O-
              </button>
            </div>
          </section>
          {/* Section 2: Chronic Diseases & Allergies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chronic Diseases */}
            <section className="glass-card p-6 rounded-lg shadow-sm border border-white/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 font-headline">
                Chronic Diseases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all shadow-md flex items-center gap-2">
                  Diabetes{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </span>
                <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-primary-container hover:text-white cursor-pointer transition-all">
                  Asthma
                </span>
                <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium transition-all shadow-md flex items-center gap-2">
                  Hypertension{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </span>
                <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-primary-container hover:text-white cursor-pointer transition-all">
                  Heart Disease
                </span>
              </div>
            </section>
            {/* Allergies */}
            <section className="glass-card p-6 rounded-lg shadow-sm border border-white/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 font-headline">
                Allergies
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-primary-container hover:text-white cursor-pointer transition-all">
                  Penicillin
                </span>
                <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md flex items-center gap-2">
                  Peanuts{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </span>
                <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium hover:bg-primary-container hover:text-white cursor-pointer transition-all">
                  Latex
                </span>
                <button
                  className="px-3 py-2 rounded-full border border-dashed border-outline-variant text-on-surface-variant text-sm font-medium flex items-center gap-1 hover:border-primary hover:text-primary transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>{" "}
                  Add Other
                </button>
              </div>
            </section>
          </div>
          {/* Section 3: Current Medications */}
          <section className="glass-card p-8 rounded-lg shadow-sm border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                prescriptions
              </span>
              <h2 className="text-xl font-bold font-headline">
                Current Medications
              </h2>
            </div>
            <div className="relative group">
              <textarea
                className="w-full min-h-[120px] bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 focus:bg-primary-fixed-dim/10 p-4 font-label text-on-surface placeholder-on-surface-variant/50 transition-all custom-scrollbar outline-none rounded-t-lg"
                placeholder="List any medications you take regularly, including dosage..."
              ></textarea>
              <div className="absolute bottom-0 right-0 left-0 h-[2px] bg-outline-variant/30 group-hover:bg-primary/30"></div>
            </div>
            <p className="mt-2 text-xs text-on-surface-variant italic font-body">
              Example: Metformin 500mg (Daily), Ventolin inhaler (As needed)
            </p>
          </section>
          {/* CTA Button Section */}
          <div className="pt-6">
            <button
              className="w-full h-16 bg-gradient-to-r from-primary to-primary-container text-white text-xl font-bold rounded-full shadow-[0_20px_40px_rgba(0,87,126,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              type="submit"
            >
              Next
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button
              className="w-full mt-4 h-12 text-on-surface-variant font-medium rounded-full hover:bg-surface-container transition-colors"
              type="button"
              onClick={() => navigate("/help/onboarding/3")}
            >
              I'll complete this later
            </button>
          </div>
        </form>
      </main>
      {/* Contextual Health Tips */}
      <div className="fixed bottom-10 right-10 hidden xl:flex items-center gap-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10 max-w-xs">
        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            security
          </span>
        </div>
        <div>
          <p className="text-xs font-bold text-secondary uppercase font-headline">
            Privacy First
          </p>
          <p className="text-[11px] text-on-surface-variant">
            Your medical data is encrypted and only shared with emergency
            responders when SOS is triggered.
          </p>
        </div>
      </div>
    </div>
  );
}
