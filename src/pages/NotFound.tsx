import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gradient inline-flex items-center gap-2 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
