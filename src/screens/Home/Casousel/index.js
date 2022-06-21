import { React, useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import axios from "axios";
import Button from "../../../components/Button";
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
  const [dataSource, setDataSource] = useState([]);
  console.log(dataSource);
  useEffect(() => {
    if (dataSource.length === 0) {
      axios.get("/games?_sort=id&_order=desc&_start=0&_limit=6").then((res) => {
        setDataSource(res.data);
      });
    }
  }, []);
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
