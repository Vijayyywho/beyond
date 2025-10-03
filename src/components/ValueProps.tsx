import React from 'react';
import { Waves, TreePine, Crown } from 'lucide-react';

const ValueProps = () => {
  const values = [
    {
      icon: TreePine,
      title: 'By the Trees',
      description: 'Surrounded by swaying coconut trees and tropical gardens, find your perfect retreat in nature\'s embrace.',
    },
    {
      icon: Waves,
      title: 'Coastal Comfort',
      description: 'Modern amenities meet coastal charm in thoughtfully designed spaces that celebrate the sea\'s rhythm.',
    },
    {
      icon: Crown,
      title: 'Quiet Luxury',
      description: 'Intimate, personalized service in a serene setting where every detail speaks to coastal elegance.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-header mb-6">
            Why Choose Beyond Sands
          </h2>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            More than a getaway, we're your gateway to coastal tranquility and authentic experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-text-header mb-4">
                {value.title}
              </h3>
              <p className="text-text-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;