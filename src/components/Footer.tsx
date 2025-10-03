import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';''
import logo from '@/assets/lofo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in Beyond Sands resort. Could you help me with more information?");
    window.open(`https://wa.me/919923895055?text=${message}`, '_blank');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Villas', href: '/rooms' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cancellation Policy', href: '/cancellation' },
    { name: 'House Rules', href: '/house-rules' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-300' },
  ];

  return (
    <footer className="bg-text-overlay text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
             
              <span className="font-playfair text-2xl font-semibold">
              <img src={logo} alt="logo" className="w-[150px]" />
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Where palms meet the blue hour. Your coastal sanctuary for tranquil escapes and authentic experiences.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full justify-start"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <div className="flex items-center text-white/80 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +91 99238 95055
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                beyondsandsresort@gmail.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Policies</h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Find Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start text-white/80 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Opposite Shitladevi temple Kelve Road</p>
                  <p>Kelve,Palghar 401404</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-white/60 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Beyond Sands Resort. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Made with ❤️ for coastal souls</span>
              <div className="flex space-x-4">
                <span>🌟 4.8/5 Guest Rating</span>
                <span>🔒 Secure Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;