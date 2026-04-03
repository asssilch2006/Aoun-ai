import { useNavigate } from "react-router-dom";

export default function UserSelection() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/70 backdrop-blur-xl shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary font-headline tracking-tight">
            Aoun AI
          </span>
          <span className="text-xl font-bold text-primary font-headline opacity-50">
            عون
          </span>
        </div>
        <button className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-label text-xs tracking-wider hover:bg-sky-100/50 transition-colors uppercase">
          AR | FR
        </button>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-12 max-w-2xl mx-auto w-full">
        {/* Welcome Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline text-on-surface font-bold tracking-tight">
            Who are you?
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md mx-auto leading-relaxed">
            We'll personalize your experience to help you best.
          </p>
        </div>
        {/* Selection Bento Grid */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* User Type Card 1: Regular User */}
          <button
            onClick={() => navigate("/help/onboarding/1")}
            className="group relative flex text-left w-full h-40 glass-card rounded-lg border-l-4 border-primary p-6 transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(0,87,126,0.15)] ring-2 ring-transparent hover:ring-primary"
          >
            <div className="flex gap-6 items-center w-full">
              <div className="bg-primary-container/10 p-4 rounded-full">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  monitor_heart
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-on-surface">
                    I need help
                  </h3>
                </div>
                <p className="text-on-surface-variant text-sm mt-1 line-clamp-2">
                  Access emergency features, track your health vitals, and
                  connect with medical professionals instantly.
                </p>
              </div>
            </div>
          </button>
          {/* User Type Card 2: Professional */}
          <button
            onClick={() => navigate("/provide/onboarding/1")}
            className="group relative flex text-left w-full h-40 glass-card rounded-lg border-l-4 border-secondary p-6 transition-all duration-300 active:scale-95 hover:bg-white/90"
          >
            <div className="flex gap-6 items-center w-full">
              <div className="bg-secondary-container/10 p-4 rounded-full">
                <span className="material-symbols-outlined text-4xl text-secondary">
                  medical_services
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-on-surface">
                  I provide help
                </h3>
                <p className="text-on-surface-variant text-sm mt-1 line-clamp-2">
                  Doctor, nurse, or blood donor. Help our community by providing
                  care or life-saving resources.
                </p>
              </div>
            </div>
          </button>
        </div>
        {/* Footer Action */}
        <div className="mt-16 w-full max-w-md space-y-6">
          <div className="flex justify-center gap-8">
            <a
              className="text-primary font-medium text-sm hover:underline decoration-2 underline-offset-4"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-primary font-medium text-sm hover:underline decoration-2 underline-offset-4"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </main>
      {/* Decorative Background Elements */}
      <div className="fixed -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>
  );
}
