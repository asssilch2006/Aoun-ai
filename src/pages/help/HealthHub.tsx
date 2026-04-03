import { useNavigate } from "react-router-dom";

export default function HealthHub() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body min-h-screen pb-32" dir="rtl" lang="ar">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 rtl:flex-row-reverse bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner overflow-hidden">
            <img
              alt="User profile avatar of a healthcare professional"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJovqNMcAC8J664hfOAzgnV93CP6HvYXOZjCAKqSmL1xIjRf-Ul_R2ceBuy4CcLcnPV51TCyPL09IEy29LBGUPfLE-R93FXpH89jFghYX07ZCbEVWKDba7mvHLYuztjf2OjSF2air5RhUmg8Ld5buCmH9aiX9BZxHC_8-O0u1bsaPyOes6f-JMcsKpcmUP0YHre1o1MQyeK7nMsTUHr8o5XFyytNd7nqyS4f1Ew6xrLdYZ6ooqxh5cqhyLt2upRytL905LHJDrsnNG"
            />
          </div>
          <span className="text-2xl font-bold text-sky-900 dark:text-sky-100 font-headline">
            Aoun AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sky-800 dark:text-sky-400 font-medium px-3 py-1 rounded-full hover:bg-sky-100/50 transition-colors">
            AR | FR
          </button>
          <span className="material-symbols-outlined text-sky-800 dark:text-sky-400 cursor-pointer p-2 hover:bg-sky-100/50 rounded-full transition-colors">
            map
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
      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-2">
            Health Hub
          </h1>
          <p className="text-on-surface-variant text-lg">
            Find care across Algeria.
          </p>
        </section>
        {/* Search Bar */}
        <section className="mb-6">
          <div className="relative flex items-center h-[52px] glass-card bg-surface-container-low rounded-full px-5 shadow-sm">
            <span className="material-symbols-outlined text-outline ml-3">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline-variant font-medium"
              placeholder="Search by name, specialty, or city..."
              type="text"
            />
            <span className="material-symbols-outlined text-primary">tune</span>
          </div>
        </section>
        {/* Filter Row */}
        <section className="mb-8 overflow-x-auto no-scrollbar flex items-center gap-3 py-2 -mx-6 px-6">
          <button className="flex-shrink-0 px-6 py-2 rounded-full bg-primary text-on-primary font-semibold text-sm transition-all shadow-md">
            All
          </button>
          <button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-variant transition-colors">
            Cardiologist
          </button>
          <button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-variant transition-colors">
            Pediatrician
          </button>
          <button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-variant transition-colors">
            Neurologist
          </button>
          <button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-variant transition-colors">
            Dermatologist
          </button>
        </section>
        {/* Doctor Directory List */}
        <section className="space-y-4">
          {/* Doctor Card 1 */}
          <div className="glass-card h-[100px] flex items-center justify-between p-4 rounded-lg shadow-sm group hover:bg-surface-container-lowest transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-16 h-16 flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Portrait of Dr. Amine Benali"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmTBTTnOZ7nzWykA9s5HvRxOgPdmXO4svxP5TJkXsEh2Nc0OkHlmZ0S6lk7hau8bvcB5pHfkCEWrQYlgOQeciUq05veh2R0br-nGH77wZAwTIeYxkmb3Tlmlwt-OfmzO4q_sCySnVt-ajZwPdoxFFBqPEhBGDWGSL3y0kUDyVaJjalilSZoK7eL8lL4KmR1lOMgRqSdnp7plVorKML7mUTH5ejOanbPczRa5v-GfdXAO9aK3tTttdoFUpn4dFr9tFuaQH4PotzeZu5"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-on-surface font-headline leading-tight">
                  Dr. Amine Benali
                </h3>
                <span className="text-primary font-semibold text-sm">
                  Cardiologist
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-on-surface-variant text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    Algiers Central Hospital
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1 font-label">
                    <span
                      className="material-symbols-outlined text-yellow-500 text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    4.9
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all">
              Book
            </button>
          </div>
          {/* Doctor Card 2 */}
          <div className="glass-card h-[100px] flex items-center justify-between p-4 rounded-lg shadow-sm group hover:bg-surface-container-lowest transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-16 h-16 flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Portrait of Dr. Sarah Kaci"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzQC2WD0haLdNf4x3rN5w7OvM6pcDK4E2jM9PbNV-wvqj1w5JHgiDbpn7akhp-BQEz7Mtdf6ltr4g8OzPt4JfWaN_uVFdXx9SNW_4vwfPIcw-8VCJrfNvaKcFnGXTCIqXem4eaEWADtohCOI3hshhpbLw3mT8XeTeDf3jzv5jifRji8oaZTV38Z2WKlyBaIZfDj1SxGWTzPOcxK-bvl4u9Q9sAoArmgqcvhDmLHKg23W0iXWk2P7pTw02eKEbQ7g_dQhG8H-B-S_-W"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-on-surface font-headline leading-tight">
                  Dr. Sarah Kaci
                </h3>
                <span className="text-primary font-semibold text-sm">
                  Pediatrician
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-on-surface-variant text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    Oran Clinic East
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1 font-label">
                    <span
                      className="material-symbols-outlined text-yellow-500 text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    4.8
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all">
              Book
            </button>
          </div>
          {/* Doctor Card 3 */}
          <div className="glass-card h-[100px] flex items-center justify-between p-4 rounded-lg shadow-sm group hover:bg-surface-container-lowest transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-16 h-16 flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Portrait of Dr. Yacine Brahimi"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4XYUhvDtt2nNBbJCBjLMzD8fNWDxU7C3PpgnbJizz38ZaBC97oUiFJfS4kIQsY0p1pr1XqVAHraXz03jXkoUXSVdQ6Tp_M183ue4xZZ8NvIa4K1UDM7SSLGCPLwyCJEiTavXWn8IqQasrkDpVlmsWpWF_aCsmwGJW42H4HETrHi7kYg5CeeVi_30tbW05BJPbLvsoQXS_79v0foxZsGKQJRB-px-ueKJ28RuHogARszfR5GUVNP6m0SF1a7SHaPG7lgBbkjWKChhO"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-on-surface font-headline leading-tight">
                  Dr. Yacine Brahimi
                </h3>
                <span className="text-primary font-semibold text-sm">
                  Neurologist
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-on-surface-variant text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    Constantine Medical
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1 font-label">
                    <span
                      className="material-symbols-outlined text-yellow-500 text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all">
              Book
            </button>
          </div>
          {/* Doctor Card 4 */}
          <div className="glass-card h-[100px] flex items-center justify-between p-4 rounded-lg shadow-sm group hover:bg-surface-container-lowest transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-16 h-16 flex-shrink-0">
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Portrait of Dr. Myriam Mansouri"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTORWB16p6DjGA50xg7NzSEUNRwF9BDwqnJKt51CWKbUaw_23QuHqlh-xKHp0FF3618FP5CLStiZsPMq6lErDhrBCLW993SKbSDHz6xKSdhbUejeR5NXFL7_DioPcFJA4RD60j5yCmm1db3G2i382dCB7BsEvhdSPw2-8IJ46OTAkWoPcLajaXc_FWCFXELpli-NCOAkMfb7jjfefm9Fu5HhJvJoH04H2DPSiSimS5pJD1Q4Z5psT1WBUgPwK3MMuhEDu3GqgUxflN"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-outline-variant border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-on-surface font-headline leading-tight">
                  Dr. Myriam Mansouri
                </h3>
                <span className="text-primary font-semibold text-sm">
                  Dermatologist
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-on-surface-variant text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      location_on
                    </span>
                    Algiers Skin Clinic
                  </span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="text-on-surface-variant text-xs flex items-center gap-1 font-label">
                    <span
                      className="material-symbols-outlined text-yellow-500 text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    4.7
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all">
              Book
            </button>
          </div>
        </section>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,87,126,0.08)] rounded-full h-20 w-[90%] max-w-md flex justify-around items-center border border-white/20">
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">emergency</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Emergency
            </span>
          </button>
          {/* Health Hub (ACTIVE) */}
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center bg-sky-600 dark:bg-sky-500 text-white rounded-full w-14 h-14 shadow-lg scale-95"
          >
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-0.5">
              Health
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
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined">monitor_heart</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              History
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
    </div>
  );
}
