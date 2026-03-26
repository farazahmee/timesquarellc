import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "timesquare_cookie_consent_accepted";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    setIsVisible(accepted !== "true");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          We use cookies to improve your experience. By using our site, you agree to our{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2">
          <Link to="/privacy-policy" className="btn-outline-gradient text-sm px-4 py-2">
            Privacy Policy
          </Link>
          <button type="button" onClick={acceptCookies} className="btn-gradient text-sm px-4 py-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
