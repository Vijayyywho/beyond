import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, Leaf, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Heartful Hospitality',
      description: 'Every guest is welcomed as family, with personalized service that anticipates your needs.',
    },
    {
      icon: Leaf,
      title: 'Coastal Conservation',
      description: 'We protect and preserve our natural surroundings through sustainable practices and local partnerships.',
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Supporting local artisans, suppliers, and experiences that celebrate authentic coastal culture.',
    },
    {
      icon: Award,
      title: 'Quiet Excellence',
      description: 'Understated luxury that speaks through thoughtful details and genuine care.',
    },
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Host',
      description: 'A former city dweller who found peace by the coast and created Beyond Sands to share this tranquility.',
    },
    {
      name: 'Raj Patel',
      role: 'Head of Experiences',
      description: 'Local expert who curates authentic coastal adventures and cultural connections.',
    },
    {
      name: 'Maya Singh',
      role: 'Sustainability Manager',
      description: 'Environmental advocate ensuring our operations protect the coastal ecosystem.',
    },
  ];

  const achievements = [
    { number: '4.8/5', label: 'Guest Rating' },
    { number: '150+', label: 'Happy Families' },
    { number: '3', label: 'Years of Service' },
    { number: '95%', label: 'Return Guests' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-secondary hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-text-header mb-6">
              Our Story
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              Born from a love for coastal serenity and authentic hospitality, Beyond Sands is more than a resort—it's a sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
                Where it all began
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Beyond Sands was born from a simple revelation: the transformative power of coastal tranquility. 
                  Our founder, Priya, discovered this stretch of paradise during a much-needed break from city life, 
                  and knew others needed to experience this same peace.
                </p>
                <p>
                  What started as a single villa has grown into a thoughtfully curated collection of spaces, 
                  each designed to honor the natural beauty of our coastal setting while providing modern comfort 
                  and genuine hospitality.
                </p>
                <p>
                  We believe luxury isn't about excess—it's about the perfect sunset view, 
                  the sound of palm fronds in the evening breeze, and the warmth of authentic human connection.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-text-header">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-secondary" />
                  <p className="font-playfair text-xl">Made with love</p>
                  <p className="text-sm opacity-75">for coastal souls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              Our values guide every decision, from the local ingredients in your breakfast to the eco-friendly amenities in your room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="glass-card hover-lift border-0 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-text-header mb-4">
                    {value.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              The passionate people who make Beyond Sands feel like home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="glass-card hover-lift border-0 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-playfair font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-text-header mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-body leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
              Our Journey So Far
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-text-body font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
            Become Part of Our Story
          </h2>
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            Join the families, couples, and solo travelers who've found their coastal sanctuary with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book Your Stay
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;