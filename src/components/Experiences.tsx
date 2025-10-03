import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sunrise, Waves, LampDesk, ForkKnifeCrossed , Utensils, Camera, Star,GamepadIcon, PlayIcon , } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: Sunrise,
      title: 'Lawn Area',
      description: 'A spacious green lawn perfect for weddings, events, and open-air celebrations.',
      feature: 'Ideal for gatherings & events',
    },
    {
      icon: PlayIcon,
      title: 'Kids Play Area',
      description: 'Safe and fun-filled space designed for children to play and enjoy.',
      feature: 'Equipped with play rides & activities',
    },
    {
      icon: LampDesk,
      title: 'AC Conference Hall',
      description: 'A fully air-conditioned hall designed for meetings, seminars, and events.',
      feature: 'Seating capacity: 100+',
    },
    {
      icon: GamepadIcon,
      title: 'Game Zone',
      description: 'Indoor entertainment space with exciting games for all age groups.',
      feature: 'Fun for kids & adults',
    },
    {
      icon: ForkKnifeCrossed,
      title: 'Restaurant',
      description: 'Multi-cuisine restaurant serving delicious meals with a cozy ambiance.',
      feature: 'Open for breakfast, lunch & dinner',
    },
    {
      icon: Waves,
      title: '5 Mins Walk to Beach',
      description: 'Easy access to the beach, just a short stroll from the resort.',
      feature: 'Relax & enjoy the seaside vibes',
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-header mb-6">
            Do a little—or nothing at all
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in curated experiences that celebrate the coastal rhythm and local culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((experience, index) => (
            <Card
              key={experience.title}
              className="glass-card hover-lift border-0 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <experience.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-playfair text-xl font-semibold text-text-header mb-3">
                  {experience.title}
                </h3>

                <p className="text-text-body mb-4 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-body">{experience.feature}</span>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            Explore All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;