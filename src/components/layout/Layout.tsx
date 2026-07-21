import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/ui/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Keyed so the fade-in replays on each route change. Replaces the
            former framer-motion page transition to keep it out of the bundle. */}
        <div key={location.pathname} className="animate-fade-in">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
