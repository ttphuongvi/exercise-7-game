import { styled } from "@mui/material/styles";
import AtomDivider from "../atoms/AtomDivider";

const Divider = styled(AtomDivider)(({ theme }) => ({
  width: "100%",
  margin: theme.spacing(1, 0, 2, 0),
}));

export default Divider;
