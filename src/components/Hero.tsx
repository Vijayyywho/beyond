import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-blue-hour.jpg';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to inquire about booking a stay at Beyond Sands. Could you help me with availability and rates?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    roomsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-20 pb-16">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium animate-fade-up" style={{ animationDelay: '0.2s' }}>
            ✨ Where palms meet the blue hour
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Coastal calm at the{' '}
            <span className="text-gradient-primary bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              blue hour
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            Wake to palms, wind, and the sea's quiet hush. Discover your sanctuary where luxury meets coastal serenity.
          </p>

          {/* USP Chips */}
          <div className="flex flex-wrap justify-center gap-2 text-sm animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {['Private verandahs', 'Curated local experiences', 'Work-friendly nooks'].map((chip, index) => (
              <span
                key={chip}
                className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 animate-fade-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6 animate-fade-up" style={{ animationDelay: '1s' }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto min-w-40">
              Book Your Stay
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto min-w-40"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Talk to Us
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-float">
            <button
              onClick={scrollToRooms}
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors group animate-fade-up"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="text-sm font-medium mb-2">Explore Rooms</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;