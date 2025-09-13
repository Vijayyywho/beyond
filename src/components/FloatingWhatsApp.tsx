import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to inquire about booking a stay at Beyond Sands. Could you help me with availability and rates?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Chat Bubble */}
      <div className="hidden sm:block bg-white dark:bg-card rounded-2xl shadow-elegant px-4 py-3 max-w-xs animate-fade-in">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-foreground">Need help?</p>
            <p className="text-xs text-muted-foreground">Chat with us on WhatsApp</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elegant hover:shadow-2xl transform transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-75"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;