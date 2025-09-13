import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sunrise, Waves, TreePine, Utensils, Camera, Star } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: Sunrise,
      title: 'Blue Hour Walks',
      description: 'Guided coastal walks during the magical blue hour when day meets night.',
      duration: '1.5 hours',
      price: '₹800',
    },
    {
      icon: TreePine,
      title: 'Mangrove Exploration',
      description: 'Discover local wildlife and ancient mangrove forests with our nature guides.',
      duration: '3 hours',
      price: '₹1,500',
    },
    {
      icon: Utensils,
      title: 'Candlelight Dining',
      description: 'Private beachside dinner under the stars with locally sourced cuisine.',
      duration: '2 hours',
      price: '₹3,200',
    },
    {
      icon: Waves,
      title: 'Sunset Boat Tours',
      description: 'Peaceful boat rides along the coast as the sun paints the sky.',
      duration: '2 hours',
      price: '₹1,200',
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture the coastal beauty with professional photography guidance.',
      duration: '4 hours',
      price: '₹2,000',
    },
    {
      icon: Star,
      title: 'Stargazing Sessions',
      description: 'Clear night sky observation sessions away from city lights.',
      duration: '1.5 hours',
      price: '₹600',
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
                  <span className="text-text-body">{experience.duration}</span>
                  <span className="font-semibold text-secondary text-lg">
                    {experience.price}
                  </span>
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