import React from "react";
import { Carousel } from "react-carousel-minimal";
import data from "./data";
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};
const Casousel = () => {
  return (
    <Carousel
      data={data}
      time={2000}
      width="100%"
      height="500px"
      captionStyle={captionStyle}
      //   radius="10px"
      //   slideNumber={true}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      automatic={true}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="black"
      slideImageFit="cover"
      //   thumbnails={true}
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        maxWidth: "100%",
        maxHeight: "500px",
        margin: "0px 0px 0px 0px",
      }}
    />
  );
};

export default Casousel;
