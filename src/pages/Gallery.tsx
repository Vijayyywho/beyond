import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-blue-hour.jpg';
import roomInterior from '@/assets/room-interior.jpg';
import poolEvening from '@/assets/pool-evening.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      title: 'Villa at Blue Hour',
      category: 'Architecture',
      description: 'Our signature villa bathed in the magical blue hour light'
    },
    {
      id: 2,
      src: roomInterior,
      title: 'Ocean Breeze Suite',
      category: 'Rooms',
      description: 'Elegant interiors with coastal charm and modern comfort'
    },
    {
      id: 3,
      src: poolEvening,
      title: 'Evening Pool',
      category: 'Amenities',
      description: 'Infinity pool reflecting the evening sky'
    },
    {
      id: 4,
      src: heroImage,
      title: 'Palm Garden',
      category: 'Nature',
      description: 'Tropical gardens with towering coconut palms'
    },
    {
      id: 5,
      src: roomInterior,
      title: 'Breakfast Terrace',
      category: 'Dining',
      description: 'Morning meals with garden views'
    },
    {
      id: 6,
      src: poolEvening,
      title: 'Sunset Views',
      category: 'Nature',
      description: 'Breathtaking sunsets from our terraces'
    },
    {
      id: 7,
      src: heroImage,
      title: 'Night Ambiance',
      category: 'Architecture',
      description: 'Warm lighting creates magical evening atmosphere'
    },
    {
      id: 8,
      src: roomInterior,
      title: 'Spa Corner',
      category: 'Wellness',
      description: 'Tranquil spaces for relaxation and rejuvenation'
    },
    {
      id: 9,
      src: poolEvening,
      title: 'Beach Access',
      category: 'Nature',
      description: 'Direct path to pristine coastal beaches'
    }
  ];

  const categories = ['All', 'Architecture', 'Rooms', 'Nature', 'Dining', 'Amenities', 'Wellness'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
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
              Gallery
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
              A visual journey through our coastal sanctuary, capturing moments of tranquility and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "hero" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-elegant hover-lift"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-playfair text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-playfair text-2xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {filteredImages[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;