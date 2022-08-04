import { styled } from "@mui/material/styles";
import AtomTypography from "../atoms/AtomTypography";

const CaptionGame = styled(AtomTypography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.titleGame.fontFamily,
}));

export default CaptionGame;
