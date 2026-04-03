import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export default function SOS() {
  const navigate = useNavigate();
  const { mode: urlMode } = useParams();
  const initialMode = urlMode === "video" ? "video" : "voice";

  const [mode, setMode] = useState<"video" | "voice">(initialMode);
  const [bloodType, setBloodType] = useState<string | null>(null);
  const [bpm, setBpm] = useState(88);
  const [rr, setRr] = useState(18);
  const [timer, setTimer] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setBpm((prev) => Math.max(60, Math.min(120, prev + Math.floor(Math.random() * 5) - 2)));
      setRr((prev) => Math.max(12, Math.min(25, prev + Math.floor(Math.random() * 3) - 1)));
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60)
      .toString()
      .padStart(2, "0");
    return `00:${m}:${s}`;
  };

  return (
    <div className="bg-[#0D1B2A] font-body text-white h-screen w-screen overflow-hidden flex flex-col relative selection:bg-primary-container/30">
      {/* Noise Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKkqPsjpqnn47oOVP2oVHzl-vSrbJBwphHrVdWHiONZ9TjOm_I3VO4JON1FfNhRjf4uPRS1oPwS-kIkDyhp3OcZsAjweR3leEas2bvv6styQOR5nGe8DW10pTW87E_61vHVrm2mgqieT9r2bpj-kH9-yGXZA29xaRlwTHsk11Ro4bbEKGERFTREPlJZEyOXIY36vEbXwN42-CbB8B3zsE0gkWBcfZLqa7f1QvoNByb1i_8RgcRoLrVnrOl9Iw6I34Wk27lB5OGbz2V')",
        }}
      ></div>

      {/* SOS Header Overlay (Vivid Red Tint Layer) */}
      <div className="fixed inset-0 bg-gradient-to-b from-tertiary/20 via-transparent to-black/40 pointer-events-none z-0"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 w-full">
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/help/dashboard")}
            className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-white">
              arrow_back
            </span>
          </motion.button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary animate-pulse">
              emergency
            </span>
            <h1 className="font-headline font-extrabold text-lg md:text-xl text-tertiary uppercase tracking-tighter">
              {mode === "video" ? "Emergency Active" : "Emergency Call"}
            </h1>
          </div>
        </div>
        <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/5">
          <span className="font-label text-white text-lg md:text-xl tracking-widest">
            {formatTime(timer)}
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col px-4 pb-48 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {mode === "video" ? (
            <motion.div
              key="video"
              initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-4 h-full max-w-2xl mx-auto w-full"
            >
              {/* Status Notification Card */}
              <div className="w-full p-4 bg-white/5 backdrop-blur-xl rounded-lg flex items-center gap-4 border border-secondary/20 shadow-lg">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(0,109,55,0.5)]">
                  <span className="material-symbols-outlined text-white text-xl">
                    done_all
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-secondary-fixed-dim font-bold text-sm">
                    Help has been notified.
                  </p>
                  <p className="text-white/60 text-[11px] uppercase tracking-wider font-label">
                    Emergency response teams dispatched
                  </p>
                </div>
              </div>

              {/* Video Feed */}
              <div className="relative flex-grow rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl min-h-[300px]">
                <img
                  alt="Emergency scene overview"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqkOr6rxcQd8hhkQ2Kl1kXbBGTLN-R3maFYfItACESLSZa_RwIfHtQX-mLHGmV0maQvjt68NE1Exs41-pKZtyMzYPZnse85xD6YEeubXGRavyglOcGMBRVkrrQeuVFy61YPCIgcupBqePULf7DKNnGFXtHSEuBImOZ1fujSnVE7FA49BtXUnHGt-0Jvnj40pavpI-qLy-3sMhNBa7TQNpvXhL8A4Wqe8l32XQfv72gV6bpfv6WSTtbi-ESMmT6NMIqusfmEcaejqaG"
                />
                
                {/* AI Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none p-4 md:p-6 flex flex-col justify-between">
                  {/* Top Overlays */}
                  <div className="flex justify-between items-start">
                    <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-secondary/40">
                      <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-label text-white uppercase tracking-widest">
                        AI Analyzing
                      </span>
                    </div>
                  </div>

                  {/* Bounding Box */}
                  <div className="absolute top-1/4 left-1/4 w-40 h-56 md:w-48 md:h-64 border-2 border-secondary/50 rounded-lg">
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-secondary"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-secondary"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-secondary"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-secondary"></div>
                    <div className="absolute -top-8 left-0 text-secondary-fixed-dim font-label text-[10px] bg-black/40 px-2 py-0.5 rounded">
                      PATIENT_DETECTED_01
                    </div>
                  </div>

                  {/* Vitals Telemetry */}
                  <div className="flex flex-col gap-3 self-start mb-16">
                    <div className="flex items-center gap-2 text-white font-label bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <span
                        className="material-symbols-outlined text-tertiary text-sm animate-pulse"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        favorite
                      </span>
                      <span className="text-lg md:text-xl w-16">{bpm} BPM</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-label bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <span
                        className="material-symbols-outlined text-primary-fixed-dim text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        air
                      </span>
                      <span className="text-lg md:text-xl w-16">{rr} RR</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Voice Interface Bar */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="flex flex-col items-center gap-3">
                    {/* Waveform Mock */}
                    <div className="flex items-end gap-1 h-8">
                      {[4, 6, 8, 5, 7, 3, 6, 8].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [h * 4, h * 6, h * 4] }}
                          transition={{ repeat: Infinity, duration: 1 + i * 0.1, ease: "easeInOut" }}
                          className="w-1 bg-secondary-fixed rounded-full opacity-70"
                        ></motion.div>
                      ))}
                    </div>
                    <p className="text-white/80 font-body text-sm md:text-base font-medium">
                      Speak to describe your situation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="voice"
              initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center h-full max-w-md mx-auto w-full gap-8"
            >
              {/* Center Pulse Interaction */}
              <div className="relative flex items-center justify-center my-8">
                <div className="absolute w-64 h-64 rounded-full border border-primary/30 animate-[ping_3s_infinite] opacity-40"></div>
                <div className="absolute w-80 h-80 rounded-full border border-primary/20 animate-[ping_4s_infinite] opacity-30"></div>
                <div className="relative w-48 h-48 rounded-full shadow-[0_0_40px_rgba(0,87,126,0.4)] flex flex-col items-center justify-center text-center p-8 bg-white/5 backdrop-blur-3xl border border-white/20">
                  <div className="mb-3">
                    <span
                      className="material-symbols-outlined text-5xl text-primary-fixed-dim animate-pulse"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      health_metrics
                    </span>
                  </div>
                  <p className="text-sm font-label font-bold leading-tight text-primary-fixed-dim px-2">
                    Connecting to Sétif Dispatch...
                  </p>
                </div>
              </div>

              {/* Metadata Cards */}
              <div className="w-full space-y-4">
                {/* Location Card */}
                <div className="bg-white/5 backdrop-blur-xl p-5 rounded-xl flex items-center gap-4 border border-white/10 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed-dim">
                      location_on
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-white/50 mb-1">
                      Current Coordinates
                    </p>
                    <p className="font-mono text-sm font-medium text-white/90 truncate">
                      GPS: 36.1912° N, 5.4093° E
                    </p>
                    <p className="text-xs text-white/40 mt-1">
                      Sétif, Algeria • Accuracy: 3m
                    </p>
                  </div>
                </div>

                {/* AI Insight Card */}
                <div className="bg-white/5 backdrop-blur-xl p-5 rounded-xl flex items-center gap-4 border border-white/10 border-l-4 border-l-secondary shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span
                      className="material-symbols-outlined text-secondary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-white/50 mb-1">
                      Aoun AI Analysis
                    </p>
                    <p className="text-sm font-medium text-white/90 leading-snug">
                      Vitals transmitted. First responders informed of your
                      medical history.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Control Hub */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-t border-white/10 pb-safe">
        <div className="max-w-2xl mx-auto flex flex-col">
          {/* Blood Type Selector */}
          <div className="py-4 border-b border-white/5">
            <div className="px-6 mb-2 flex justify-between items-center">
              <span className="text-xs font-label text-white/60 uppercase tracking-widest">
                Blood Type
              </span>
              <span className="text-[10px] text-tertiary-fixed-dim bg-tertiary/20 px-2 py-0.5 rounded-full">
                Optional
              </span>
            </div>
            <div className="flex overflow-x-auto gap-3 px-6 pb-2 no-scrollbar">
              {BLOOD_TYPES.map((bt) => (
                <motion.button
                  key={bt}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setBloodType(bt)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full backdrop-blur-md border transition-all duration-300 ${
                    bloodType === bt
                      ? "bg-tertiary/80 border-tertiary shadow-[0_0_20px_rgba(161,24,17,0.6)] text-white"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="font-label font-bold text-sm">{bt}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between px-6 py-4 gap-4">
            {/* Mode Toggle */}
            <div className="flex bg-white/10 rounded-full p-1 backdrop-blur-md border border-white/10">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode("video")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  mode === "video"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: mode === "video" ? "'FILL' 1" : "'FILL' 0" }}
                >
                  videocam
                </span>
                <span className="text-xs font-label font-bold uppercase tracking-wider hidden sm:inline">
                  Video
                </span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode("voice")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  mode === "voice"
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: mode === "voice" ? "'FILL' 1" : "'FILL' 0" }}
                >
                  call
                </span>
                <span className="text-xs font-label font-bold uppercase tracking-wider hidden sm:inline">
                  Voice
                </span>
              </motion.button>
            </div>

            {/* End Call */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/help/dashboard")}
              className="flex items-center justify-center bg-tertiary text-white rounded-full px-6 py-3 shadow-[0_0_30px_rgba(161,24,17,0.4)] hover:bg-red-700 transition-colors gap-2"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call_end
              </span>
              <span className="font-label font-bold text-sm uppercase tracking-wider">
                End SOS
              </span>
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}
