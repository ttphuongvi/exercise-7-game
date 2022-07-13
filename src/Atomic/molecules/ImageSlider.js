import { styled } from "@material-ui/core/styles";

const ImageSlider = styled("img")({
  width: "60%",
  height: "100%",
  //   right: 0,
  objectFit: "fill",
  position: "absolute",
  zIndex: 1,

  top: "0px",
  right: "0px",
  borderRadius: "50% 0% 0% 50%",
});

export default ImageSlider;
