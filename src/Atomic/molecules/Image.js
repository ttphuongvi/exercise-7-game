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

const Image = (props) => {
  // const ratioIamge = ${calc(`${props.ratio}` * 100%)};
  //   const ratioImage = { paddingTop: calc(1 / `${props.ratio}`) };
  const numberReal = (1 / parseFloat(props.ratio, 10)) * 100;
  return (
    <AtomBox
      component={"div"}
      sx={{
        position: "relative",
        paddingTop: `calc(${numberReal}%)`,
      }}
    >
      <ImageStyles
        onError={(e) => {
          e.target.src = DEFAULT_IMAGE;
        }}
        alt=""
        src={props.src}
      ></ImageStyles>
    </AtomBox>
  );
};

export default Image;
