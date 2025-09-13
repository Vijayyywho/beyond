import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import RoomsPreview from '@/components/RoomsPreview';
import Experiences from '@/components/Experiences';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ValueProps />
        <RoomsPreview />
        <Experiences />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
