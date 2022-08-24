import styled from "@emotion/styled";
import React from "react";
import { DEFAULT_IMAGE } from "../../store/const";

const ImageStyles = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  overflow: "hidden",
  objectFit: "cover",
  transition: "transform 3s ease",
});

const ContainerImage = styled("div")({
  position: "relative",
  paddingTop: "75%",
});

const Image = (props) => {
  return (
    <ContainerImage>
      <ImageStyles
        onError={(e) => {
          e.target.src = DEFAULT_IMAGE;
        }}
        alt=""
        src={props.src}
      ></ImageStyles>
    </ContainerImage>
  );
};

export default Image;
