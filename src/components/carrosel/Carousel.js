import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";
import carrossel1 from "../../assets/imgs/carrossel1.jpeg";
import carrossel2 from "../../assets/imgs/carrossel2.jpeg";
import carrossel3 from "../../assets/imgs/carrossel3.jpeg";

function Carrosel() {
  const carouselRef = useRef(null);
  const items = [
    { img: carrossel1 },
    { img: carrossel2 },
    { img: carrossel3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const currentIndex = carouselRef.current.state.activeIndex;
        const nextIndex = (currentIndex + 1) % items.length;
        carouselRef.current.goTo(nextIndex);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Carousel
      itemsToShow={1}
      showArrows={true}
      ref={carouselRef}
      enableAutoPlay={true}
      autoPlaySpeed={3000}
      isRTL={false}
    >
      {items.map((item, index) => (
        <img key={index} className="img-carrosel" src={item.img} alt={`Item ${index + 1}`} />
      ))}
    </Carousel>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carrosel />, rootElement);

export default Carrosel;
