import { styled } from "@mui/styles";
import AtomTypography from "../atoms/AtomTypography";

const DescriptionNewGame = styled(AtomTypography)({
  textAlign: "justify",
  height: "190px",
  width: "100%",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  WebkitLineClamp: 8,
});

export default DescriptionNewGame;
