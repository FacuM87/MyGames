import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with actual game images later
  const slides = [
    {
      id: 1,
      image: 'https://placehold.co/1200x600/1a1a2e/ffffff?text=Tic+Tac+Toe',
      title: 'Tic Tac Toe',
      link: '/games/tictactoe'
    },
    {
      id: 2,
      image: 'https://placehold.co/1200x600/16213e/ffffff?text=Snake',
      title: 'Snake',
      link: '/games/snake'
    },
    {
      id: 3,
      image: 'https://placehold.co/1200x600/0f3460/ffffff?text=Pacman',
      title: 'Pacman',
      link: '/games/pacman'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-16rem)] mx-auto">
      <div className="relative h-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            to={slide.link}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 