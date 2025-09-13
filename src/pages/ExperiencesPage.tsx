import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Users, Star, MapPin, Camera, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperiencesPage = () => {
  const experiences = [
    {
      id: 1,
      title: 'Blue Hour Coastal Walk',
      description: 'Guided walks along pristine beaches during the magical blue hour when day meets night.',
      longDescription: 'Experience the coastal beauty at its most enchanting time. Our guided walks take you along secluded beaches and rocky outcrops as the sky transforms into brilliant blues and purples. Learn about local marine life, coastal geology, and the best spots for photography.',
      icon: MapPin,
      duration: '1.5 hours',
      groupSize: '2-8 people',
      price: '₹800',
      difficulty: 'Easy',
      includes: ['Professional guide', 'Light refreshments', 'Photography tips', 'Local insights'],
      bestTime: 'Daily at 5:30 PM',
    },
    {
      id: 2,
      title: 'Mangrove Exploration',
      description: 'Discover ancient mangrove forests and their unique ecosystem with expert naturalist guides.',
      longDescription: 'Journey into the heart of pristine mangrove forests where nature thrives in perfect balance. Our expert naturalists will introduce you to the incredible biodiversity of these coastal guardians, from exotic birds to fascinating marine creatures.',
      icon: MapPin,
      duration: '3 hours',
      groupSize: '4-12 people',
      price: '₹1,500',
      difficulty: 'Moderate',
      includes: ['Naturalist guide', 'Boat transfer', 'Binoculars', 'Field handbook', 'Organic lunch'],
      bestTime: 'Morning departures',
    },
    {
      id: 3,
      title: 'Private Candlelight Dining',
      description: 'Intimate beachside dinner under the stars with locally sourced coastal cuisine.',
      longDescription: 'Indulge in an unforgettable culinary journey on the beach. Our chefs prepare a multi-course meal using the freshest local ingredients, paired with carefully selected wines. The setting is illuminated by candles and lanterns for a truly romantic atmosphere.',
      icon: Utensils,
      duration: '2 hours',
      groupSize: '2-4 people',
      price: '₹3,200',
      difficulty: 'Relaxing',
      includes: ['4-course dinner', 'Wine pairing', 'Private setup', 'Personal server', 'Live acoustic music'],
      bestTime: 'Evening by reservation',
    },
    {
      id: 4,
      title: 'Sunset Boat Safari',
      description: 'Peaceful boat rides along the coast watching the sun paint the sky in brilliant colors.',
      longDescription: 'Set sail on traditional fishing boats as the day winds down. Watch dolphins play in the wake, spot coastal birds returning to roost, and witness one of nature\'s most spectacular daily shows as the sun sets over the Arabian Sea.',
      icon: MapPin,
      duration: '2 hours',
      groupSize: '6-15 people',
      price: '₹1,200',
      difficulty: 'Easy',
      includes: ['Traditional boat', 'Life jackets', 'Sunset snacks', 'Hot beverages', 'Dolphin spotting'],
      bestTime: 'Daily at 4:30 PM',
    },
    {
      id: 5,
      title: 'Photography Workshop',
      description: 'Capture coastal beauty with professional guidance on techniques and composition.',
      longDescription: 'Perfect your photography skills in one of India\'s most photogenic coastal locations. Learn composition, lighting techniques, and post-processing while capturing stunning sunrise, blue hour, and golden hour shots.',
      icon: Camera,
      duration: '4 hours',
      groupSize: '3-8 people',
      price: '₹2,000',
      difficulty: 'All levels',
      includes: ['Professional photographer guide', 'Location access', 'Editing tips', 'Best shot prints', 'Light breakfast'],
      bestTime: 'Early morning or evening',
    },
    {
      id: 6,
      title: 'Stargazing Experience',
      description: 'Clear night sky observation sessions away from city lights with astronomy guide.',
      longDescription: 'Discover the wonders of the night sky from our dark-sky location. Using professional telescopes and with expert guidance, observe planets, star clusters, and deep-sky objects while learning about constellations and cosmic phenomena.',
      icon: Star,
      duration: '1.5 hours',
      groupSize: '4-20 people',
      price: '₹600',
      difficulty: 'Easy',
      includes: ['Telescope access', 'Astronomy guide', 'Star charts', 'Hot chocolate', 'Blankets'],
      bestTime: 'Clear nights after 8 PM',
    },
  ];

  const handleBooking = (experienceTitle: string) => {
    const message = encodeURIComponent(`Hi! I'd like to book the "${experienceTitle}" experience at Beyond Sands. Could you help me with availability and booking details?`);
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
              Experiences
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              Curated adventures that connect you with the coastal rhythm, local culture, and natural wonders of our region.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                className="overflow-hidden hover-lift border-0 shadow-elegant group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <experience.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-secondary">{experience.price}</span>
                      <p className="text-sm text-text-body">per person</p>
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl font-semibold text-text-header mb-3">
                    {experience.title}
                  </h3>

                  <p className="text-text-body mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <p className="text-text-body/80 mb-6 text-sm leading-relaxed">
                    {experience.longDescription}
                  </p>

                  {/* Experience Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-accent/10 rounded-xl">
                    <div className="flex items-center text-sm text-text-body">
                      <Clock className="w-4 h-4 mr-2 text-secondary" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-sm text-text-body">
                      <Users className="w-4 h-4 mr-2 text-secondary" />
                      {experience.groupSize}
                    </div>
                    <div className="flex items-center text-sm text-text-body">
                      <Star className="w-4 h-4 mr-2 text-secondary" />
                      {experience.difficulty}
                    </div>
                    <div className="text-sm text-text-body">
                      <span className="font-medium">Best time:</span> {experience.bestTime}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <h4 className="font-medium text-text-header mb-3">Experience Includes</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {experience.includes.map((item) => (
                        <div key={item} className="flex items-center text-sm text-text-body">
                          <div className="w-2 h-2 bg-palm-green rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => handleBooking(experience.title)}
                    >
                      Book Experience
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experiences */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-text-header mb-6">
            Custom Experiences
          </h2>
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            Looking for something special? We can create personalized experiences tailored to your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg">
              Plan Custom Experience
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperiencesPage;