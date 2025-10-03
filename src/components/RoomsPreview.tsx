import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Wifi, Coffee, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import roomInterior from '@/assets/room-interior.jpg';
import poolEvening from '@/assets/pool-evening.jpg';

import bgImage from '@/assets/gardenn.png';
import bgImage1 from '@/assets/pool.png';


const RoomsPreview = () => {
  const rooms = [
    {
      id: 1,
      name: 'Garden View Room',
      description: 'Spacious villa with private terrace overlooking palm groves and distant ocean views.',
      image: bgImage,

      guests: 4,
      amenities: ['Free WiFi',  'Private Parking', 'AC'],
      features: ['Private Verandah', 'Garden View', 'Work Desk'],
    },
    {
      id: 2,
      name: 'Pool View Room',
      description: 'Intimate suite perfect for couples, nestled among coconut palms with serene garden views.',
      image: bgImage1,
    
      guests: 2,
      amenities: ['Free WiFi', 'Pool Access', 'AC'],
      features: ['Romantic Setting', 'Pool View', 'Mini Bar'],
    },
 
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-header mb-6">
            Spaces that breathe
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to maximize comfort while celebrating our coastal setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              className="overflow-hidden hover-lift border-0 shadow-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  
                  <p className="text-sm opacity-90">per night</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-2xl font-semibold text-text-header">
                    {room.name}
                  </h3>
                  <div className="flex items-center text-sm text-text-body">
                    <Users className="w-4 h-4 mr-1" />
                    {room.guests}
                  </div>
                </div>

                <p className="text-text-body mb-4 leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-accent/20 text-secondary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-text-body">
                    {room.amenities.slice(0, 4).map((amenity, i) => (
                      <div key={amenity} className="flex items-center">
                        {i === 0 && <Wifi className="w-4 h-4 mr-1" />}
                        {i === 1 && <Coffee className="w-4 h-4 mr-1" />}
                        {i === 2 && <Car className="w-4 h-4 mr-1" />}
                        <span className="hidden sm:inline">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to={`/rooms/${room.id}`}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/rooms">
              View All Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomsPreview;