import { useNavigate } from "react-router-dom";

export default function AIAssist() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col" dir="rtl" lang="ar">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 rtl:flex-row-reverse bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-white/20">
            <img
              alt="Aoun AI Assistant Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR3HOrLl_lTxTTXiI2W5pC80n4cP2GyEZTbMQ0QzqSytNQvmiovNzXY25QxSdd2kBV8-oWl47or4UWevGAaiUIUF7z4_mVp6eLTqt1a93LkAH8-fFHTtgdEn3mRag_2GxgiWpcQi9Cdxuptlz12besvaqKJVIinrX9SarByzGVztOPyMdkJT3gOMb2qMYWllzYerKuYtPZhgJMxLvxQYgRfp-lzcnW5opm7iwfm1vTv10N9VV2RJ2vTlwIoNq72x9KufF-tsTbhahG"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-headline font-bold text-lg text-sky-800 leading-tight">
              Aoun AI Assistant
            </h3>
            <span className="flex items-center gap-1 text-[10px] text-secondary font-medium uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>{" "}
              متصل الآن
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sky-800 dark:text-sky-400 font-medium text-sm hover:bg-sky-100/50 p-2 rounded-full transition-colors">
            AR | FR
          </button>
          <button
            onClick={() => navigate("/")}
            className="material-symbols-outlined text-sky-800 cursor-pointer hover:bg-sky-100/50 p-2 rounded-full transition-colors"
            title="Exit / Switch Role"
          >
            logout
          </button>
        </div>
      </header>
      <main className="flex-1 mt-20 mb-32 px-4 max-w-2xl mx-auto w-full flex flex-col gap-6 overflow-y-auto">
        {/* Persistent Disclaimer Banner */}
        <div className="glass-card bg-amber-50/80 border border-amber-200/50 p-4 rounded-xl flex items-start gap-3 shadow-sm">
          <span
            className="material-symbols-outlined text-amber-600 mt-0.5"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          <p className="text-xs text-amber-900 font-medium leading-relaxed">
            هذا المساعد الذكي ليس طبيباً مرخصاً. المعلومات المقدمة هي للأغراض
            التثقيفية فقط ولا تغني عن الاستشارة الطبية المتخصصة. في حالات
            الطوارئ، اتصل بالرقم 911 فوراً.
          </p>
        </div>
        {/* Chat Thread */}
        <div className="flex flex-col gap-8 pb-10">
          {/* AI Message */}
          <div className="flex items-end gap-3 self-start max-w-[85%]">
            <div className="glass-card p-4 rounded-2xl rounded-bl-none shadow-[0_4px_20px_rgba(0,87,126,0.04)] border border-white/40">
              <p className="text-sm leading-relaxed">
                أهلاً بك! أنا مساعد عون الذكي. كيف يمكنني مساعدتك اليوم فيما يخص
                حالتك الصحية؟
              </p>
              <span className="text-[10px] font-label text-outline mt-2 block">
                10:42 AM
              </span>
            </div>
          </div>
          {/* User Message */}
          <div className="flex items-end gap-3 self-end max-w-[85%]">
            <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-lg">
              <p className="text-sm leading-relaxed">
                أشعر بصداع مستمر في الجانب الأيسر مع غثيان بسيط منذ الصباح.
              </p>
              <span className="text-[10px] font-label text-sky-200 mt-2 block text-left">
                10:43 AM
              </span>
            </div>
          </div>
          {/* AI Symptom Checker Result */}
          <div className="flex items-end gap-3 self-start max-w-[90%] w-full">
            <div className="glass-card w-full p-5 rounded-2xl rounded-bl-none border-r-4 border-r-primary shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                <h4 className="font-bold text-sm">تحليل الأعراض الأولي</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-low p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium">
                      احتمالية صداع نصفي (Migraine)
                    </span>
                    <span className="text-xs font-label font-bold text-primary">
                      75%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium">
                      صداع توتري (Tension Headache)
                    </span>
                    <span className="text-xs font-label font-bold text-primary">
                      20%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container rounded-full w-1/5"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-outline-variant mt-4 leading-relaxed italic">
                بناءً على الأعراض التي ذكرتها، تشير الاحتمالات إلى بوادر صداع
                نصفي. هل تعاني من حساسية تجاه الضوء؟
              </p>
              <span className="text-[10px] font-label text-outline mt-3 block">
                10:43 AM
              </span>
            </div>
          </div>
          {/* User Message */}
          <div className="flex items-end gap-3 self-end max-w-[85%]">
            <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-lg">
              <p className="text-sm leading-relaxed">
                نعم، الضوء يزعجني كثيراً. هل يمكنني تناول دواء "Panadol
                Migraine"؟ وهل يتعارض مع دواء الضغط؟
              </p>
              <span className="text-[10px] font-label text-sky-200 mt-2 block text-left">
                10:44 AM
              </span>
            </div>
          </div>
          {/* AI Medication Info Card */}
          <div className="flex items-end gap-3 self-start max-w-[90%] w-full">
            <div className="glass-card w-full p-5 rounded-2xl rounded-bl-none border-r-4 border-r-secondary shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medication
                </span>
                <h4 className="font-bold text-sm">معلومات الدواء والتداخلات</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="p-3 bg-white/50 rounded-xl border border-secondary-container">
                  <h5 className="text-xs font-bold text-secondary mb-1">
                    Panadol Migraine
                  </h5>
                  <p className="text-xs text-on-surface-variant">
                    يحتوي على باراسيتامول، أسبرين، وكافيين. فعال جداً لحالات
                    الصداع النصفي.
                  </p>
                </div>
                <div className="p-3 bg-tertiary/5 rounded-xl border border-tertiary-container/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-tertiary text-sm">
                      error
                    </span>
                    <h5 className="text-xs font-bold text-tertiary uppercase">
                      تنبيــه تداخل دوائي
                    </h5>
                  </div>
                  <p className="text-[11px] text-on-surface leading-normal">
                    الأسبرين الموجود في هذا الدواء قد يتفاعل مع بعض أدوية الضغط
                    (مثل حاصرات بيتا). يرجى التأكد من اسم دواء الضغط الخاص بك.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1.5 bg-secondary text-white text-[10px] font-bold rounded-full hover:scale-95 transition-transform">
                  تحدث مع صيدلي
                </button>
                <button className="px-3 py-1.5 bg-surface-container text-primary text-[10px] font-bold rounded-full hover:bg-sky-100 transition-colors">
                  عرض البدائل
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Bottom Controls (Floating) */}
      <div className="fixed bottom-24 left-0 w-full z-40 px-6 max-w-2xl mx-auto right-0">
        {/* Quick Start Chips */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar rtl:flex-row-reverse">
          <button className="flex-shrink-0 px-4 py-2 bg-white/80 backdrop-blur-md border border-sky-100 rounded-full text-xs font-medium text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
            Check my symptoms
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/80 backdrop-blur-md border border-sky-100 rounded-full text-xs font-medium text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
            Drug interaction?
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-white/80 backdrop-blur-md border border-sky-100 rounded-full text-xs font-medium text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
            Find a specialist
          </button>
        </div>
        {/* Input Bar */}
        <div className="glass-card h-[52px] w-full rounded-full flex items-center px-2 shadow-[0_10px_30px_rgba(0,87,126,0.12)] border border-white/60">
          <button className="w-10 h-10 flex items-center justify-center text-primary-fixed-variant hover:bg-sky-50 rounded-full transition-colors">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 font-body placeholder:text-outline-variant"
            placeholder="Ask about your health..."
            type="text"
          />
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center text-outline hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:scale-105 transition-transform active:scale-95">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                send
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* BottomNavBar */}
      <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-around items-center px-4 rtl:flex-row-reverse">
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-full h-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl glassmorphism shadow-[0_20px_40px_rgba(0,87,126,0.08)] flex justify-around items-center px-4 noise-overlay">
          <button
            onClick={() => navigate("/help/dashboard")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined mb-1">emergency</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body">
              Emergency
            </span>
          </button>
          <button
            onClick={() => navigate("/help/hub")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined mb-1">
              medical_services
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body">
              Health Hub
            </span>
          </button>
          {/* Active Tab: AI Assist */}
          <button
            onClick={() => navigate("/help/ai")}
            className="flex flex-col items-center justify-center bg-sky-600 dark:bg-sky-500 text-white rounded-full w-14 h-14 shadow-lg scale-110 -mt-6"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              smart_toy
            </span>
            <span className="text-[8px] uppercase font-bold mt-0.5">
              AI Assist
            </span>
          </button>
          <button
            onClick={() => navigate("/help/vitals")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined mb-1">
              monitor_heart
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body">
              My Health
            </span>
          </button>
          <button
            onClick={() => navigate("/help/profile")}
            className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined mb-1">person</span>
            <span className="text-[10px] uppercase tracking-wider font-medium font-body">
              Profile
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
