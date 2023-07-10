import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDataGames } from '../hooks/useDataGames';
import { CardGames } from './CardGames';

export const NextGames = () => {
  const data = useDataGames();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-2">
      <div className="container">
        <h1 className="mb-4">Games</h1>
        <div>
          <Slider {...settings}>
            {data.map((game) => (
              <div key={game.id}>
                <CardGames game={game} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-4">
          {/* Agrega aquí el componente adicional */}
        </div>
      </div>
    </div>
  );
};
