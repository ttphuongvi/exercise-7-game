import styled from "@emotion/styled";
import React from "react";
import { DEFAULT_IMAGE } from "../../store/const";
import AtomBox from "../atoms/AtomBox";

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

const ContainerImage = styled(AtomBox)({});

const Image = (props) => {
  return (
    <ContainerImage
      component={"div"}
      sx={{
        position: "relative",
        paddingTop: `calc(${props.ratio} * 100%)`,
      }}
    >
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
