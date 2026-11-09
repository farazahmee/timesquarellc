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
    <div className="fixed bottom-4 left-1/2 z-[60] w-[calc(100%-24px)] max-w-[760px] -translate-x-1/2">
      <div className="nav-glass flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] leading-[1.55] text-white/55">
          We use cookies to understand how the site is used. By continuing, you
          agree to our{" "}
          <Link
            to="/privacy-policy"
            className="text-white/85 underline decoration-white/25 underline-offset-2 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={acceptCookies}
            className="btn btn-primary btn-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
