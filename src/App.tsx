import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import UserSelection from "./pages/UserSelection";
import Onboarding1 from "./pages/help/Onboarding1";
import Onboarding2 from "./pages/help/Onboarding2";
import Onboarding3 from "./pages/help/Onboarding3";
import Dashboard from "./pages/help/Dashboard";
import SOS from "./pages/help/SOS";
import Guides from "./pages/help/Guides";
import CPR from "./pages/help/CPR";
import Bleeding from "./pages/help/Bleeding";
import Profile from "./pages/help/Profile";
import Vitals from "./pages/help/Vitals";
import AIAssist from "./pages/help/AIAssist";
import HealthHub from "./pages/help/HealthHub";
import ProvideOnboarding1 from "./pages/provide/Onboarding1";
import ProvideOnboarding2 from "./pages/provide/Onboarding2";
import ProvideDashboard from "./pages/provide/Dashboard";
import ProvideProfile from "./pages/provide/Profile";
import ProvideAIAssist from "./pages/provide/AIAssist";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/select-user" element={<UserSelection />} />
        
        {/* Help Seeker Routes */}
        <Route path="/help/onboarding/1" element={<Onboarding1 />} />
        <Route path="/help/onboarding/2" element={<Onboarding2 />} />
        <Route path="/help/onboarding/3" element={<Onboarding3 />} />
        <Route path="/help/dashboard" element={<Dashboard />} />
        <Route path="/help/sos/:mode" element={<SOS />} />
        <Route path="/help/guides" element={<Guides />} />
        <Route path="/help/guides/cpr" element={<CPR />} />
        <Route path="/help/guides/bleeding" element={<Bleeding />} />
        <Route path="/help/profile" element={<Profile />} />
        <Route path="/help/vitals" element={<Vitals />} />
        <Route path="/help/ai" element={<AIAssist />} />
        <Route path="/help/hub" element={<HealthHub />} />

        {/* Help Provider Routes */}
        <Route path="/provide/onboarding/1" element={<ProvideOnboarding1 />} />
        <Route path="/provide/onboarding/2" element={<ProvideOnboarding2 />} />
        <Route path="/provide/dashboard" element={<ProvideDashboard />} />
        <Route path="/provide/profile" element={<ProvideProfile />} />
        <Route path="/provide/ai" element={<ProvideAIAssist />} />
      </Routes>
    </Router>
  );
}
