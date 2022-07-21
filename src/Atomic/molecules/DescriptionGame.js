import { styled } from "@mui/styles";
import AtomTypography from "../atoms/AtomTypography";

const DescriptionNewGame = styled(AtomTypography)({
  textAlign: "justify",
  marginTop: "0px",
  fontSize: "14px",
  height: "192px",
  width: "100%",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  marginBottom: "5px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 8,
});

export default DescriptionNewGame;
