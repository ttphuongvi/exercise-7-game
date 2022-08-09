import { alpha, styled } from "@mui/material/styles";
import AtomTypography from "../atoms/AtomTypography";

const CaptionGame = styled(AtomTypography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.titleGame.fontFamily,
  "&:hover": {
    color: alpha(theme.palette.primary.main, 0.8),
  },
}));

export default CaptionGame;
