import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Users, Wifi, Coffee, Car, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import roomInterior from '@/assets/room-interior.jpg';
import poolEvening from '@/assets/pool-evening.jpg';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Ocean Breeze Villa',
      description: 'Our signature villa offering panoramic views and ultimate privacy. Perfect for those seeking luxury and tranquility.',
      longDescription: 'Spacious villa with private terrace overlooking palm groves and distant ocean views. Features a king-size bed, private bathroom with rain shower, work desk, and complimentary tea/coffee facilities.',
      image: roomInterior,
      price: '₹8,500',
      originalPrice: '₹10,000',
      guests: 4,
      size: '450 sq ft',
      amenities: ['Free WiFi', 'Breakfast', 'Private Parking', 'AC', 'Mini Bar', 'Room Service'],
      features: ['Private Verandah', 'Garden View', 'Work Desk', 'King Bed', 'Rain Shower', 'Tea/Coffee'],
    },
    {
      id: 2,
      name: 'Palm Grove Suite',
      description: 'Intimate suite perfect for romantic getaways, nestled among coconut palms with serene garden views.',
      longDescription: 'Cozy suite designed for couples, featuring a comfortable queen bed, modern amenities, and direct access to garden areas. Ideal for honeymoons and romantic escapes.',
      image: poolEvening,
      price: '₹6,200',
      originalPrice: '₹7,500',
      guests: 2,
      size: '350 sq ft',
      amenities: ['Free WiFi', 'Breakfast', 'Pool Access', 'AC', 'Mini Bar', 'Spa Access'],
      features: ['Romantic Setting', 'Pool View', 'Queen Bed', 'Garden Access', 'Modern Bath', 'Spa Access'],
    },
    {
      id: 3,
      name: 'Coastal Family Villa',
      description: 'Perfect for families, with connecting rooms and easy access to pool and garden areas.',
      longDescription: 'Spacious family accommodation with connecting rooms, dedicated play area, and child-friendly amenities. Features two bedrooms, family bathroom, and private garden access.',
      image: roomInterior,
      price: '₹12,000',
      originalPrice: '₹14,500',
      guests: 6,
      size: '650 sq ft',
      amenities: ['Free WiFi', 'Breakfast', 'Private Parking', 'AC', 'Kitchenette', 'Babysitting'],
      features: ['Family Friendly', 'Connecting Rooms', 'Garden Access', 'Play Area', 'Kitchenette', 'Extra Bed'],
    },
    {
      id: 4,
      name: 'Blue Hour Penthouse',
      description: 'Our premium offering with rooftop terrace, perfect for watching stunning sunsets and starlit skies.',
      longDescription: 'Exclusive penthouse with panoramic coastal views, private rooftop terrace, and luxury amenities. The ultimate retreat for discerning guests.',
      image: poolEvening,
      price: '₹18,000',
      originalPrice: '₹22,000',
      guests: 4,
      size: '800 sq ft',
      amenities: ['Free WiFi', 'Breakfast', 'Butler Service', 'AC', 'Wine Bar', 'Spa Treatments'],
      features: ['Rooftop Terrace', 'Ocean View', 'Butler Service', 'Wine Bar', 'Luxury Bath', 'Private Chef'],
    },
  ];

  const handleWhatsAppClick = (roomName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in booking the ${roomName} at Beyond Sands. Could you help me with availability and rates?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

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
              Rooms & Villas
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              Each space thoughtfully designed to maximize comfort while celebrating our coastal setting.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {rooms.map((room, index) => (
              <Card
                key={room.id}
                className="overflow-hidden hover-lift border-0 shadow-elegant group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold">{room.price}</span>
                      <span className="text-lg opacity-75 line-through">{room.originalPrice}</span>
                    </div>
                    <p className="text-sm opacity-90">per night • {room.size}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save {Math.round(((parseInt(room.originalPrice.slice(1).replace(',', '')) - parseInt(room.price.slice(1).replace(',', ''))) / parseInt(room.originalPrice.slice(1).replace(',', ''))) * 100)}%
                    </span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-playfair text-2xl font-semibold text-text-header">
                      {room.name}
                    </h3>
                    <div className="flex items-center text-sm text-text-body bg-accent/20 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 mr-1" />
                      Up to {room.guests}
                    </div>
                  </div>

                  <p className="text-text-body mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  <p className="text-text-body/80 mb-6 text-sm leading-relaxed">
                    {room.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-text-header mb-3">Room Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-text-body">
                          <CheckCircle className="w-3 h-3 mr-2 text-palm-green" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h4 className="font-medium text-text-header mb-3">Included Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 bg-accent/20 text-secondary text-sm rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="flex-1">
                      Check Availability
                    </Button>
                    <Button
                      variant="whatsapp"
                      className="flex-1"
                      onClick={() => handleWhatsAppClick(room.name)}
                    >
                      Quick Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Help */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-text-header mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            Our team is here to help you find the perfect accommodation for your coastal getaway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => handleWhatsAppClick('the perfect room')}
            >
              Chat with Our Team
            </Button>
            <Button variant="secondary" size="lg">
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;