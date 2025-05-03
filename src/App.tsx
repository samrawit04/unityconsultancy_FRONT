
import ProfileCompletion from './pages/ProfileCompletion';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ClientRegister from "./pages/register/ClientRegister";
import CounselorRegister from "./pages/register/CounselorRegister";
import EmailVerification from "./pages/EmailVerification";
import ClientProfile from './pages/ClientProfile';
import ClientProfileNext from './pages/ClientProfileNext';
import ClientDashboard from './pages/ClientDashboard';
import CounselorPosts from './pages/CounselorPosts';
import CounselorDashboard from './pages/CounselorDashboard';
import CounselorProfile from './pages/CounselorProfile';
import CounselorAvailability from './pages/CounselorAvailability';
import CounselorSchedule from './pages/CounselorSchedule';
import CounselorFeedback from './pages/CounselorFeedback';
import FinalSessionSet from './pages/FinalSessionSet';
import CounselorArticles from './pages/CounselorArticles';
import BookingSession from './pages/BookSession';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/therapist" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/client" element={<ClientRegister />} />
            <Route path="/register/counselor" element={<CounselorRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-email" element={<EmailVerification />} /> {/* Add this line */}
            <Route path="/profile-completion" element={<ProfileCompletion />} />
            <Route path="/client-profile" element={<ClientProfile />} />
            <Route path="/client-profile-next" element={<ClientProfileNext />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/counselor-posts" element={<CounselorPosts />} />
          <Route path="/counselor-dashboard" element={<CounselorDashboard />} />
          <Route path="/counselor-profile" element={<CounselorProfile />} />
          <Route path="/availability" element={<CounselorAvailability />} />
          <Route path="/counselor-schedule" element={<CounselorSchedule />} />
          <Route path="/counselor-feedback" element={<CounselorFeedback />} />
          <Route path="/final-session-set" element={<FinalSessionSet />} />
            <Route path="/counselor-articles" element={<CounselorArticles />} />
            <Route path="/book-session" element={<BookingSession />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
