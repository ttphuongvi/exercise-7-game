import { styled } from "@mui/material/styles";
import AtomTypography from "../atoms/AtomTypography";

const CaptionGame = styled(AtomTypography)(({ theme }) => ({
  textShadow: "none",
  display: "block",
  height: "20px",
  textTransform: "uppercase",
  padding: "0px 0px 10px 0px",

  color: theme.palette.primary.main,
  fontFamily: theme.typography.titleGame.fontFamily,
  textDecoration: "none",
}));

export default CaptionGame;
