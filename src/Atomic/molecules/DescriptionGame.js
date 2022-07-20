import { styled } from "@mui/styles";
import AtomTypography from "../atoms/AtomTypography";

const DescriptionNewGame = styled(AtomTypography)({
  textAlign: "justify",
  marginTop: "0px",
  // color: "#666",
  fontSize: "14px",
  height: "190px",
  width: "100%",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  marginBottom: "5px",
  overflow: "hidden",
  display: "-webkit-box",
  /* -webkit-line-clamp: 9; */
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 9,
});

export default DescriptionNewGame;
