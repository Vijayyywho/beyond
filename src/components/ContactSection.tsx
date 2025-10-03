import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, MessageCircle, Mail, Clock, Car } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about Beyond Sands resort. Could you help me with information about booking and availability?");
    window.open(`https://wa.me/919923895055?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Opposite Shitaladevi Temple Kelve Road,', 'Kelve,Palghar 401404'],
      action: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 99238 95055'],
      action: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Instant responses', 'Available 24/7'],
      action: 'Chat with Us',
      onClick: handleWhatsAppClick,
    },
  ];

  const quickInfo = [
    { icon: Clock, label: 'Check-in', value: '12:00 PM' },
    { icon: Clock, label: 'Check-out', value: '10:00 AM' },
    { icon: Car, label: 'From Kelve Rd Railway Station', value: '15 minutes' },
    { icon: MapPin, label: 'Beach Distance', value: '5 minutes walk' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-header mb-6">
          We’re Right by the Beach          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Easily accessible yet perfectly secluded, discover your coastal sanctuary in North Goa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((contact) => (
              <Card key={contact.title} className="glass-card hover-lift border-0 group">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-text-header mb-2">
                      {contact.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {contact.details.map((detail) => (
                        <p key={detail} className="text-text-body">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={contact.onClick}
                      className="w-full sm:w-auto"
                    >
                      {contact.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Information */}
          <div className="space-y-6">
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-text-header mb-6">
                  Quick Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickInfo.map((info) => (
                    <div key={info.label} className="text-center p-4 bg-white/50 rounded-xl">
                      <info.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                      <p className="text-sm text-text-body mb-1">{info.label}</p>
                      <p className="font-semibold text-text-header">{info.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="glass-card border-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <p className="text-text-header font-semibold mb-2">Interactive Map</p>
                  <p className="text-text-body text-sm">Click to view detailed location</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-card border-0 text-center">
          <CardContent className="p-8">
            <h3 className="font-playfair text-2xl font-semibold text-text-header mb-4">
              Occasional notes from the palms
            </h3>
            <p className="text-text-body mb-6 max-w-2xl mx-auto">
              Stay updated with seasonal offers, local events, and the quiet stories from our coastal sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/80 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;