import { useNavigate } from "react-router-dom";

export default function Guides() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary/20" dir="rtl" lang="ar">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 rtl:flex-row-reverse bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden border-2 border-surface-container-highest">
            <img
              alt="Doctor Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7itEztwVuGn4MubUNiZ0xkxchGk0zaPcDC1ZpxBmS1-OoVz_qP_j6gCBSpVw5C7p8EJQE-dwrrmJdEKCO8zJO9qAsYU3P5C_RUsKp0lwr5afofzPYxIercHbtzJhmxgAWl-fwfpkHnLXFqYnF0rUzFpLOpkI87YBzu7BRbVkswy6S58wVZlrsW0-kzlVvb6hCAqIWF4UBmRThllx-gi-8oUg0oKeEAQ7SuUs6i8ChAa3iWuO4ht_eBigqrpMaW-xHXfZvqZOkpVEG"
            />
          </div>
          <span className="text-2xl font-bold text-sky-900 dark:text-sky-100 font-headline">
            Aoun AI
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sky-800 dark:text-sky-400 font-label text-sm font-medium">
            AR | FR
          </span>
          <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-sky-100/50 rounded-full transition-colors">
            search
          </button>
          <button
            onClick={() => navigate("/help/dashboard")}
            className="material-symbols-outlined text-sky-800 p-2 hover:bg-sky-100/50 rounded-full transition-colors"
          >
            arrow_forward
          </button>
        </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        {/* Header Section */}
        <section className="mb-10 text-right">
          <h1 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-2">
            دليل الإسعافات الأولية
          </h1>
          <p className="text-on-surface-variant text-lg font-light">
            اختر الحالة للحصول على إرشادات فورية دقيقة.
          </p>
        </section>
        {/* Condition Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* CPR (Critical) */}
          <div
            onClick={() => navigate("/help/guides/cpr")}
            className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-[48px] text-tertiary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emergency_share
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              الإنعاش القلبي
            </span>
          </div>
          {/* Choking (Critical) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-tertiary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              airwave
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              الغصة (الاختناق)
            </span>
          </div>
          {/* Stroke (Critical) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-tertiary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              neurology
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              السكتة الدماغية
            </span>
          </div>
          {/* Drowning (Critical) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-tertiary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              water_drop
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              الغرق
            </span>
          </div>
          {/* Burns (Trust Blue) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-primary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              الحروق
            </span>
          </div>
          {/* Fractures (Trust Blue) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-primary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              skeleton
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              الكسور
            </span>
          </div>
          {/* Panic Attack (Trust Blue) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-primary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              نوبة الهلع
            </span>
          </div>
          {/* Poisoning (Trust Blue) */}
          <div className="glass-card h-[160px] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(0,87,126,0.05)] border border-white/20 active:scale-95 transition-transform cursor-pointer">
            <span
              className="material-symbols-outlined text-[48px] text-primary mb-3"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              skull
            </span>
            <span className="font-headline text-on-surface font-bold text-lg">
              التسمم
            </span>
          </div>
        </div>
        {/* Secondary Info Card */}
        <div className="mt-8 bg-surface-container-low rounded-lg p-6 flex items-start gap-4">
          <span className="material-symbols-outlined text-secondary">info</span>
          <div>
            <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
              إذا كانت الحالة تهدد الحياة، اضغط على زر الطوارئ في شريط التنقل أو
              اتصل بالإسعاف فوراً.
            </p>
          </div>
        </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full h-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,87,126,0.08)] flex justify-around items-center px-4 overflow-hidden border border-white/20">
          {/* Emergency (Inactive) */}
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined">emergency</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              Emergency
            </span>
          </button>
          {/* Health Hub (Active) */}
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center bg-sky-600 dark:bg-sky-500 text-white rounded-full w-14 h-14 shadow-lg scale-95 duration-150 ease-in-out cursor-pointer"
          >
            <span className="material-symbols-outlined">medical_services</span>
            <span className="text-[8px] uppercase tracking-tighter font-medium font-body mt-0.5">
              Hub
            </span>
          </button>
          {/* AI Assist */}
          <button
            onClick={() => navigate("/help/ai")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              AI Assist
            </span>
          </button>
          {/* My Health */}
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined">monitor_heart</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body mt-1">
              My Health
            </span>
          </button>
          {/* Profile */}
          <button
            onClick={() => navigate("/help/profile")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform cursor-pointer"
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
