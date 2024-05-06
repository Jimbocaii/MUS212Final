import React from 'react';
import choro1 from '../assets/images/choro1.jpg';
import choro2 from '../assets/images/choro2.jpg';
import choro3 from '../assets/images/choro3.jpg';
import choro4 from '../assets/images/choro4.jpg';
import choro5 from '../assets/images/choro5.jpg';
import cuban1 from '../assets/images/cuban1.jpg';
import cuban2 from '../assets/images/cuban2.jpg';
import cuban3 from '../assets/images/cuban3.jpg';
import cuban4 from '../assets/images/cuban4.jpg';
import me from '../assets/images/me.JPEG';
import villalobos1 from '../assets/images/villalobos1.jpg';
import villalobos2 from '../assets/images/villalobos2.jpg';
import villalobos3 from '../assets/images/villalobos3.jpg';
import villalobos4 from '../assets/images/villalobos4.jpg';
import villalobos5 from '../assets/images/villalobos5.jpg';


const images = [villalobos5, choro1, choro3, cuban3, villalobos4, choro5, cuban1, cuban4, villalobos3, choro4, cuban2, me, choro2, villalobos1, villalobos2];

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={image} className="d-block w-100 carousel-image" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              {/* Your caption content here */}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
