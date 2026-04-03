import { useNavigate } from "react-router-dom";

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col items-center">
      {/* Top Navigation Anchor */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/70 backdrop-blur-xl">
        <div className="text-2xl font-bold text-sky-900 font-headline tracking-tight">
          Aoun AI
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-label tracking-widest text-slate-600 uppercase">
            AR | FR
          </span>
          <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm">
              person
            </span>
          </div>
        </div>
      </header>
      <main className="w-full max-w-2xl px-6 pt-32 pb-24 flex flex-col gap-10">
        {/* Progress Indicator */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold">
              Step 03 — Records
            </span>
            <span className="font-label text-xs text-on-surface-variant">
              75% Complete
            </span>
          </div>
          <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full transition-all duration-700"></div>
          </div>
        </div>
        {/* Header Section */}
        <section className="flex flex-col gap-2">
          <h1 className="font-headline text-4xl font-extrabold text-on-surface leading-tight tracking-tight">
            Upload your medical record
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md">
            Our AI analyzes your history to provide personalized emergency care.
          </p>
        </section>
        {/* Main Interaction Area */}
        <div className="flex flex-col gap-6">
          {/* Upload Zone */}
          <div className="glass-panel specular-highlight w-full h-[180px] rounded-lg border-2 border-dashed border-primary-container/40 flex flex-col items-center justify-center cursor-pointer hover:bg-primary-container/5 transition-all group">
            <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">
                cloud_upload
              </span>
            </div>
            <span className="text-primary font-bold text-lg">
              Tap to upload PDF
            </span>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-1">
              Max 10MB · PDF only · Encrypted
            </span>
          </div>
          {/* Post-Upload State: Active File */}
          <div className="bg-surface-container-lowest rounded-lg p-5 flex items-center justify-between shadow-[0_20px_40px_rgba(0,87,126,0.06)] border border-outline-variant/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">
                  description
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-on-surface tracking-tight">
                  med_record_setif.pdf
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="material-symbols-outlined text-secondary text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-xs text-secondary font-medium uppercase tracking-wide">
                    Successfully Uploaded
                  </span>
                </div>
              </div>
            </div>
            <button className="text-tertiary font-label text-xs uppercase tracking-widest font-bold hover:underline decoration-2 underline-offset-4">
              Remove
            </button>
          </div>
        </div>
        {/* Data Pulse / Vitals Monitor */}
        <div className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Security Protocol
            </span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-secondary"></div>
              <div className="w-1 h-1 rounded-full bg-secondary/40"></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-label text-2xl text-primary-container font-bold">
                AES-256
              </span>
              <span className="text-[10px] font-body text-on-surface-variant uppercase tracking-tighter">
                Bank-grade encryption
              </span>
            </div>
            <div className="h-8 w-px bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="font-label text-2xl text-primary-container font-bold">
                HIPAA+
              </span>
              <span className="text-[10px] font-body text-on-surface-variant uppercase tracking-tighter">
                Algerian Health Law Compliant
              </span>
            </div>
          </div>
        </div>
        {/* Action Button */}
        <div className="mt-4">
          <button
            onClick={() => navigate("/help/dashboard")}
            className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-full font-headline font-bold text-lg shadow-[0_20px_40px_rgba(0,87,126,0.15)] hover:scale-[0.98] transition-all duration-200"
          >
            Review Profile
          </button>
        </div>
        {/* Privacy & Legal Notice */}
        <footer className="flex items-start gap-4 p-4 rounded-xl border border-outline-variant/10 bg-surface-container/30">
          <span className="material-symbols-outlined text-on-surface-variant mt-0.5">
            lock
          </span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Your data is stored locally and encrypted. In accordance with the{" "}
            <strong className="text-on-surface">Algerian Health Data Law</strong>
            , third-party access is prohibited without your explicit biometric
            consent.
          </p>
        </footer>
      </main>
    </div>
  );
}
