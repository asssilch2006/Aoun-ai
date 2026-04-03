import { useNavigate } from "react-router-dom";

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen" dir="rtl" lang="ar">
      {/* Ambient Lighting Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[5%] -left-[5%] w-[40%] h-[40%] bg-secondary/10 blur-[100px] rounded-full"></div>
      </div>
      {/* Main Content Canvas */}
      <main className="max-w-xl mx-auto px-6 pt-12 pb-32 min-h-screen flex flex-col">
        {/* Onboarding Progress Bar */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-2 w-8 rounded-full bg-primary shadow-sm shadow-primary/20"></div>
          <div className="h-2 w-2 rounded-full bg-surface-variant"></div>
          <div className="h-2 w-2 rounded-full bg-surface-variant"></div>
          <div className="h-2 w-2 rounded-full bg-surface-variant"></div>
        </div>
        {/* Header */}
        <header className="mb-10 text-right">
          <h1 className="font-headline font-bold text-4xl text-on-surface leading-tight tracking-tight">
            Tell us about you
          </h1>
          <p className="text-on-surface-variant mt-2 text-lg">
            Let's set up your clinical profile for Aoun AI.
          </p>
        </header>
        {/* Form Section */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/help/onboarding/2");
          }}
        >
          {/* Full Name with Toggle */}
          <div className="relative group">
            <div className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center transition-all focus-within:ring-2 focus-within:ring-primary/20">
              <div className="flex-grow flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-wider text-primary font-bold">
                  Full Name
                </span>
                <input
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline-variant/50 placeholder:font-normal"
                  placeholder="Enter your full name"
                  type="text"
                />
              </div>
              <button
                className="bg-surface-container-highest/50 px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-colors"
                type="button"
              >
                AR | EN
              </button>
            </div>
          </div>
          {/* Date of Birth */}
          <div className="relative">
            <div className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center">
              <div className="flex-grow flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-wider text-primary font-bold">
                  Date of Birth
                </span>
                <input
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold [color-scheme:light]"
                  type="date"
                />
              </div>
              <span className="material-symbols-outlined text-outline">
                calendar_today
              </span>
            </div>
          </div>
          {/* Phone Number */}
          <div className="relative">
            <div
              className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center gap-3"
              dir="ltr"
            >
              <div className="flex items-center gap-2 border-r border-outline-variant/30 pr-3">
                <img
                  alt="Flag of Algeria"
                  className="w-6 rounded-sm shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQLTdgC8PsURRbh_WhpvFzoTCLOKXfKMC2LMGsOlzIY6a7LDFp5SUXxmI_UouVBGiYYdE9qC3BfEwYKIVS1NqVMBRwmG4huEfqgrqNo02kRiT9jTsMwBGAdPdAhBJHTrT41CUuCXWh6BARYErfkmlQ9WDCnRc5KT11zy9L5A_LV4TUoNMII8ljqJ-sbrwf8QN_Hjh3nV1lnL9pAG3OCAKGXkd7XD2lIybCuptiB-4HR8M31I7Pz_gKnbWWahW-0tloucWwhygPWdSY"
                />
                <span className="font-label font-bold text-on-surface-variant">
                  +213
                </span>
              </div>
              <div className="flex-grow flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-wider text-primary font-bold">
                  Phone Number
                </span>
                <input
                  className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold font-label tracking-widest placeholder:text-outline-variant/50 placeholder:font-normal"
                  placeholder="5XX XX XX XX"
                  type="tel"
                />
              </div>
            </div>
          </div>
          {/* Wilaya Dropdown */}
          <div className="relative">
            <div className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center">
              <div className="flex-grow flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-wider text-primary font-bold">
                  Wilaya
                </span>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold appearance-none w-full">
                  <option value="19">19 - Sétif</option>
                  <option value="16">16 - Alger</option>
                  <option value="31">31 - Oran</option>
                  <option value="25">25 - Constantine</option>
                </select>
              </div>
              <span className="material-symbols-outlined text-outline">
                expand_more
              </span>
            </div>
          </div>
          {/* Emergency Contact Group */}
          <div className="pt-4">
            <label className="block text-sm font-bold text-on-surface-variant mb-4 px-1">
              Emergency Contact Details
            </label>
            <div className="space-y-4">
              {/* Contact Name */}
              <div className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center">
                <div className="flex-grow flex flex-col">
                  <span className="text-[10px] font-label uppercase tracking-wider text-tertiary font-bold">
                    Contact Name
                  </span>
                  <input
                    className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold placeholder:text-outline-variant/50"
                    placeholder="Relative or friend name"
                    type="text"
                  />
                </div>
                <span className="material-symbols-outlined text-outline">
                  person_alert
                </span>
              </div>
              {/* Contact Phone */}
              <div className="glass-panel h-14 w-full rounded-2xl bg-surface-container-low px-4 flex items-center">
                <div className="flex-grow flex flex-col">
                  <span className="text-[10px] font-label uppercase tracking-wider text-tertiary font-bold">
                    Contact Phone
                  </span>
                  <input
                    className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-semibold font-label tracking-wider placeholder:text-outline-variant/50"
                    placeholder="+213..."
                    type="tel"
                  />
                </div>
                <span className="material-symbols-outlined text-outline">
                  emergency_share
                </span>
              </div>
            </div>
          </div>
          {/* Action Area */}
          <div className="pt-10">
            <button
              className="w-full h-16 bg-primary text-white rounded-full font-headline font-bold text-lg shadow-[0_20px_40px_rgba(0,87,126,0.2)] active:scale-95 transition-transform flex items-center justify-center gap-3"
              type="submit"
            >
              Next
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                arrow_back
              </span>
            </button>
            <p className="text-center text-outline text-xs mt-6 px-8 leading-relaxed">
              By clicking next, you allow Aoun AI to process your medical data
              for emergency assistance.
            </p>
          </div>
        </form>
      </main>
      {/* Bottom Info / Visual Anchor */}
      <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-surface to-transparent"></div>
    </div>
  );
}
