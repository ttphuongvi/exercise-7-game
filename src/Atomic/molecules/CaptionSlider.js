import { styled } from "@material-ui/core/styles";
import AtomTypography from "../atoms/AtomTypography";

const CaptionSlider = styled(AtomTypography)({
  color: "#fff",
  fontSize: "50px",
  width: "100%",
  top: "15px",
  zIndex: 1,
  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Economica", Arial, sans-serif',
  fontWeight: 700,
  // textShadow: '0px 2px 3px rgba(0, 0, 0, 1)',
});

export default CaptionSlider;
