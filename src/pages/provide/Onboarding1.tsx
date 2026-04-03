import { useNavigate } from "react-router-dom";

export default function ProvideOnboarding1() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col" dir="rtl" lang="ar">
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 max-w-4xl mx-auto w-full">
        {/* Step Indicator & Progress */}
        <div className="w-full max-w-md mb-12">
          <div className="flex justify-between items-end mb-4 px-2">
            <span className="font-headline font-bold text-2xl text-primary">
              Aoun AI
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-medium">
              Step 01 / 03
            </span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-1/3 rounded-full shadow-[0_0_12px_rgba(0,109,55,0.3)]"></div>
          </div>
        </div>
        {/* Identity Section Header */}
        <header className="text-center mb-10">
          <h1 className="font-headline font-extrabold text-4xl mb-3 tracking-tight">
            تسجيل المهنيين
          </h1>
          <p className="text-on-surface-variant text-lg max-w-sm mx-auto">
            انضم إلى شبكة الأطباء والممرضين لتقديم الرعاية المدعمة بالذكاء
            الاصطناعي.
          </p>
        </header>
        {/* Main Form Glass Container */}
        <div className="glass-panel w-full max-w-2xl p-8 md:p-10 rounded-xl shadow-[0_20px_40px_rgba(0,87,126,0.08)]">
          <form
            className="space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/provide/onboarding/2");
            }}
          >
            {/* Role Selector */}
            <section>
              <label className="block font-headline font-bold text-sm mb-6 text-on-surface-variant px-1">
                حدد صفتك المهنية
              </label>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Active: Doctor */}
                <button
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-secondary text-white shadow-lg scale-100 transition-all duration-200"
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    medical_services
                  </span>
                  <span className="font-bold">طبيب</span>
                </button>
                {/* Inactive: Nurse */}
                <button
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    clinical_notes
                  </span>
                  <span className="font-bold">ممرض</span>
                </button>
                {/* Inactive: Donor */}
                <button
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined">
                    volunteer_activism
                  </span>
                  <span className="font-bold">متبرع</span>
                </button>
              </div>
            </section>
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col space-y-2">
                <label className="font-headline font-bold text-sm text-on-surface-variant px-1">
                  الاسم الكامل
                </label>
                <div className="flex items-center px-2 py-3 transition-all duration-300 border-b-2 border-outline-variant/30 focus-within:border-primary focus-within:bg-primary/5">
                  <span className="material-symbols-outlined text-outline-variant ml-3">
                    person
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full font-medium placeholder:text-outline-variant/60"
                    placeholder="د. محمد الجزائري"
                    type="text"
                  />
                </div>
              </div>
              {/* Specialty Dropdown */}
              <div className="flex flex-col space-y-2">
                <label className="font-headline font-bold text-sm text-on-surface-variant px-1">
                  التخصص
                </label>
                <div className="flex items-center px-2 py-3 transition-all duration-300 border-b-2 border-outline-variant/30 focus-within:border-primary focus-within:bg-primary/5">
                  <span className="material-symbols-outlined text-outline-variant ml-3">
                    stethoscope
                  </span>
                  <select className="bg-transparent border-none focus:ring-0 w-full font-medium appearance-none">
                    <option value="cardiology">أمراض القلب (Cardiology)</option>
                    <option value="general">طب عام (General)</option>
                    <option value="pediatrics">طب الأطفال (Pediatrics)</option>
                    <option value="emergency">طب الطوارئ (Emergency)</option>
                  </select>
                  <span className="material-symbols-outlined text-outline-variant">
                    expand_more
                  </span>
                </div>
              </div>
              {/* Medical License Number */}
              <div className="flex flex-col space-y-2">
                <label className="font-headline font-bold text-sm text-on-surface-variant px-1">
                  رقم الرخصة الطبية
                </label>
                <div className="flex items-center px-2 py-3 transition-all duration-300 border-b-2 border-outline-variant/30 focus-within:border-primary focus-within:bg-primary/5">
                  <span className="material-symbols-outlined text-outline-variant ml-3">
                    badge
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full font-label font-medium placeholder:text-outline-variant/60"
                    placeholder="MD-2024-XXXX"
                    type="text"
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="flex flex-col space-y-2">
                <label className="font-headline font-bold text-sm text-on-surface-variant px-1">
                  رقم الهاتف
                </label>
                <div
                  className="flex items-center px-2 py-3 transition-all duration-300 border-b-2 border-outline-variant/30 focus-within:border-primary focus-within:bg-primary/5"
                  dir="ltr"
                >
                  <span className="font-label font-bold text-primary mr-3">
                    +213
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full font-label font-medium placeholder:text-outline-variant/60"
                    placeholder="555 00 00 00"
                    type="tel"
                  />
                  <span className="material-symbols-outlined text-outline-variant">
                    call
                  </span>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="pt-6 flex justify-between items-center border-t border-outline-variant/10">
              <button
                className="text-on-surface-variant font-bold px-6 py-4 flex items-center gap-2 hover:bg-surface-container-low rounded-full transition-colors"
                type="button"
                onClick={() => navigate("/select-user")}
              >
                <span className="material-symbols-outlined">arrow_forward</span>
                رجوع
              </button>
              <button
                className="bg-secondary text-white font-headline font-bold px-12 py-4 rounded-full shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3"
                type="submit"
              >
                التالي
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            </div>
          </form>
        </div>
        {/* Security Badge */}
        <div className="mt-10 flex items-center gap-2 text-outline-variant text-sm font-medium">
          <span className="material-symbols-outlined text-lg">encrypted</span>
          بياناتك مشفرة ومحمية بمعايير الأمن الطبية الدولية
        </div>
      </main>
      {/* Background Decoration Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] -z-10 rounded-full"></div>
    </div>
  );
}
