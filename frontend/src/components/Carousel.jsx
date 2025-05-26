import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tictactoeImg from '../assets/tictactoe1.jpg';
import snakeImg from '../assets/snake_game.jpg';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: tictactoeImg,
      title: 'Tic Tac Toe',
      link: '/games/tictactoe'
    },
    {
      id: 2,
      image: snakeImg,
      title: 'Snake',
      link: '/games/snake'
    },
    {
      id: 3,
      image: 'https://placehold.co/1200x600/0f3460/ffffff?text=Pong (coming soon)',
      title: 'Pong',
      link: '/games/pong'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[calc(100vh-16rem)] mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-4 m-0">My Games</h1>
      <div className="relative h-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            to={slide.link}
            className={`absolute w-full h-full transition-opacity duration-500
                      ${
                        index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`
                    }>
                      
            <img src={slide.image} alt={slide.title} className="carousel-image"/>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white ">{slide.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)}
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