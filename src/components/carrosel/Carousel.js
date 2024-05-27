import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";
import { Grid } from "@mui/material";
import carrossel1 from "../../assets/imgs/carrossel1.jpeg";
import carrossel2 from "../../assets/imgs/carrossel2.jpeg";
import carrossel3 from "../../assets/imgs/carrossel3.jpeg";

function Carrosel() {
  var items = [
    {
      img: carrossel1,
    },
    {
      img: carrossel2,
    },
    {
      img: carrossel3,
    },
  ];

  return (
    <>

        <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={3000} showArrows={true} className="carrosel-container">
          {items.map((item) => (
            <>
              <img className="img-carrosel" src={item.img} alt="Item" />
            </>
          ))}
        </Carousel>

    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carrosel />, rootElement);

export default Carrosel;
