import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-playfair font-bold text-primary/20 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* Content */}
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-text-header mb-6">
          Lost among the palms?
        </h1>
        <p className="text-xl text-text-body mb-8 leading-relaxed">
          The page you're looking for seems to have drifted away with the tide. 
          Let's get you back to familiar shores.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-text-body mb-4">Perhaps you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/rooms" className="text-secondary hover:text-primary transition-colors">
              Rooms & Villas
            </Link>
            <Link to="/experiences" className="text-secondary hover:text-primary transition-colors">
              Experiences
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
