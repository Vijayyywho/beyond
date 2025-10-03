import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Car,
  Send,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in Beyond Sands resort. Here are my details:
Name: ${formData.name || 'Not provided'}
Check-in: ${formData.checkIn || 'Flexible'}
Check-out: ${formData.checkOut || 'Flexible'}
Guests: ${formData.guests}
Message: ${formData.message || 'Please help me with booking information'}`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9923895055', '+91 9923895055'],
      description: 'Speak with our reservation team',
      action: 'Call Now',
      href: 'tel:+919923895055'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['Instant responses', 'Available 24/7'],
      description: 'Quick queries and instant booking',
      action: 'Chat with Us',
      onClick: handleWhatsAppClick
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@beyondsands.in', 'reservations@beyondsands.in'],
      description: 'Detailed inquiries and group bookings',
      action: 'Send Email',
      href: 'mailto:hello@beyondsands.in'
    }
  ];

  const quickInfo = [
    { icon: Clock, label: 'Check-in', value: '2:00 PM', detail: 'Early check-in available' },
    { icon: Clock, label: 'Check-out', value: '11:00 AM', detail: 'Late check-out on request' },
    { icon: Car, label: 'From Airport', value: '45 minutes', detail: 'Transfer service available' },
    { icon: MapPin, label: 'Beach Distance', value: '5 minutes', detail: 'Private beach access' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-secondary hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-text-header mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              Ready to experience coastal tranquility? Get in touch with our friendly team for bookings, inquiries, or any assistance you need.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-text-header mb-6">
              Send us a message
            </h2>
            <p className="text-text-body mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours. For immediate assistance, use WhatsApp or call us directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-header mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-header mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-header mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-text-header mb-2">
                    Check-in Date
                  </label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-text-header mb-2">
                    Check-out Date
                  </label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-text-header mb-2">
                    Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6+">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-text-header mb-2">
                  Preferred Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select room type</option>
                  <option value="ocean-breeze">Ocean Breeze Villa</option>
                  <option value="palm-grove">Palm Grove Suite</option>
                  <option value="family-villa">Coastal Family Villa</option>
                  <option value="penthouse">Blue Hour Penthouse</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-header mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Tell us about your stay preferences, special occasions, or any specific requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="hero" className="flex-1">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <Button type="button" variant="whatsapp" onClick={handleWhatsAppClick} className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-text-header mb-6">
                Get in touch
              </h2>
              <p className="text-text-body mb-8 leading-relaxed">
                Our team is here to help make your coastal getaway perfect. Choose the best way to reach us.
              </p>
            </div>

            {/* Contact Methods */}
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
                      <div className="space-y-1 mb-2">
                        {contact.details.map((detail) => (
                          <p key={detail} className="text-text-body font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-text-body/80 text-sm mb-4">
                        {contact.description}
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={contact.onClick}
                        {...(contact.href && { asChild: true })}
                      >
                        {contact.href ? (
                          <a href={contact.href}>{contact.action}</a>
                        ) : (
                          contact.action
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Information */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-text-header mb-6">
                  Quick Information
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {quickInfo.map((info) => (
                    <div key={info.label} className="flex items-center p-4 bg-white/50 rounded-xl">
                      <info.icon className="w-5 h-5 text-secondary mr-4 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-body">{info.label}</span>
                          <span className="font-semibold text-text-header">{info.value}</span>
                        </div>
                        <p className="text-xs text-text-body/70 mt-1">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-text-header mb-4">
                  Our Location
                </h3>
                <div className="space-y-3 text-text-body">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Beyond Sands Resort</p>
                      <p>Opposite Shitaladevi Temple Kelve Road,</p>
                      <p>Kelve,Palghar 401404</p>
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="mt-4 w-full">
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;