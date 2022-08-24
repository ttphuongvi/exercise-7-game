import styled from "@emotion/styled";
import React from "react";

const ImageStyles = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  overflow: "hidden",
  objectFit: "cover",
  transition: "transform 3s ease",
  zIndex: 0,
});

const ContainerImgae = styled("div")({
  position: "relative",
  paddingTop: "75%",
});

const Image = (props) => {
  return (
    <ContainerImgae>
      <ImageStyles
        className="img"
        onError={(e) => {
          const imgDefault = "/images/default.jpg";
          e.target.src = imgDefault;
        }}
        alt=""
        src={props.src}
      ></ImageStyles>
    </ContainerImgae>
  );
};

export default Image;
