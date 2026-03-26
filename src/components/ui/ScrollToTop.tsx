import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ensure every route navigation starts at the top.
  useEffect(() => {
    // Let React/router update the DOM, then force scroll restoration.
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
      setVisible(false);
    });
  }, [location.pathname]);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:brightness-110 transition-all duration-300"
    >
      <ArrowUp size={18} className="mx-auto" />
    </button>
  );
}
