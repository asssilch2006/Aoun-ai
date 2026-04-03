import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="text-on-surface antialiased pb-32 bg-surface font-body" dir="rtl" lang="ar">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 rtl:flex-row-reverse bg-slate-50/70 backdrop-blur-xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="User profile photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqw7Q7cjzHWOCryWEmjMEaNjZRT-B9cC-tdypkr0TBWpSDfKOd65KlSRQhiG_6zZDDO0ioWpwxh7mc02sJK556az-0A-OIjksGf0KG67g_ILcdKcTWJ8SLLh2gkdJ_op_D7bJSuZmqS7qybIy2CcQg1IMYLfedw1K0KJ4L-rTy580RWV5rfe9MjFNRBYzLcSw3-QYbSN-SKjaSe-V-mSj0e3azbwIR9EmAMqLN94P_Z5ygZc1J-E_6q9tfXI4KkRGnfcmsGHmWzSJ9"
            />
          </div>
          <span className="text-2xl font-bold text-sky-900 font-headline">
            Aoun AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sky-800 font-medium hover:bg-sky-100/50 px-3 py-1 rounded-full transition-colors">
            AR | FR
          </button>
          <button
            onClick={() => navigate("/")}
            className="material-symbols-outlined text-sky-800 cursor-pointer p-2 hover:bg-sky-100/50 rounded-full transition-colors"
            title="Exit / Switch Role"
          >
            logout
          </button>
        </div>
      </header>
      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold font-headline text-primary mb-8 tracking-tight">
          Profile &amp; Settings
        </h1>
        {/* Profile Hero Section */}
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="glass-panel p-8 rounded-lg shadow-[0_20px_40px_rgba(0,87,126,0.08)] flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary mb-4">
              <img
                className="w-full h-full object-cover rounded-full border-4 border-white"
                alt="Large profile portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaXh8XRnZeyrJfMJZ18pkyoEz7n96ZFTWK3yUgIDuccnn37RDLhms8V0QnA7UMo00H7PDZ5zmyQ0iH8Nf9GKKtRcqaNFw82dpvfspjlx-Km7OfD0hMHdvsEgpfF6gBEH5PUvVZIb4aei9vBakaYyCqPihfcbUuShvtLlRNryx3oll4Lntodlz1HGV9okAK2Gq_aViRUFgFit97vp4Gd0J5NecM0Yto39uzePgZjYsdA1zzGNYdN2mFaPFF6SWMIR6pTWMqZtDatg8n"
              />
            </div>
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              Ahmed Ben Ali
            </h2>
            <p className="text-on-surface-variant font-mono text-sm mt-1 uppercase tracking-widest">
              ID: AOUN-8829-PX
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
                Blood: O+
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                Age: 34
              </span>
            </div>
          </div>
        </div>
        {/* Settings List */}
        <div className="space-y-4">
          {/* Account Info */}
          <div className="glass-panel p-6 rounded-lg flex items-center justify-between hover:bg-white/90 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">
                  Account Info
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Personal details and security
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">
              chevron_left
            </span>
          </div>
          {/* Health Data Permissions */}
          <div className="glass-panel p-6 rounded-lg flex items-center justify-between hover:bg-white/90 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">
                  Health Data Permissions
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Manage AI diagnostic access
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">
              chevron_left
            </span>
          </div>
          {/* Language Toggle */}
          <div className="glass-panel p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">
                    Language Toggle
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Selected: Arabic
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-1 bg-surface-container-low rounded-full gap-1">
              <button className="flex-1 py-2 text-sm font-bold bg-white shadow-sm rounded-full text-primary">
                AR
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                FR
              </button>
              <button className="flex-1 py-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                EN
              </button>
            </div>
          </div>
          {/* App Preferences */}
          <div className="glass-panel p-6 rounded-lg flex items-center justify-between hover:bg-white/90 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">
                  settings_suggest
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-on-surface">
                  App Preferences
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Notifications and display theme
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">
              chevron_left
            </span>
          </div>
          {/* Emergency Contact Settings */}
          <div className="glass-panel p-6 rounded-lg border-r-4 border-tertiary/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    contact_emergency
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface">
                    Emergency Contact Settings
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    3 contacts active
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant">
                chevron_left
              </span>
            </div>
          </div>
        </div>
        {/* Footer Actions */}
        <div className="mt-12 mb-20 text-center">
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 mb-4 border-2 border-outline-variant text-on-surface font-bold rounded-full hover:bg-surface-variant/50 transition-all active:scale-95"
          >
            Log out
          </button>
          <p className="text-outline text-xs font-mono tracking-widest uppercase">
            Version 2.4.0-Clinical (Stable)
          </p>
        </div>
      </main>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="bg-white/70 backdrop-blur-2xl w-[90%] max-w-md rounded-full h-20 shadow-[0_20px_40px_rgba(0,87,126,0.08)] flex justify-around items-center px-2 relative overflow-hidden">
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center text-slate-500 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">
              emergency
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Emergency
            </span>
          </button>
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center text-slate-500 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">
              medical_services
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Health Hub
            </span>
          </button>
          <button
            onClick={() => navigate("/help/ai")}
            className="flex flex-col items-center justify-center text-slate-500 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">
              smart_toy
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              AI Assist
            </span>
          </button>
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center text-slate-500 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">
              monitor_heart
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              My Health
            </span>
          </button>
          <button
            onClick={() => navigate("/help/profile")}
            className="flex flex-col items-center justify-center bg-sky-600 text-white rounded-full w-14 h-14 shadow-lg scale-95 transition-all"
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              person
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body hidden">
              Profile
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
