import { styled } from "@mui/material/styles";
import AtomButton from "../atoms/AtomButton";

const ButtonLogin = styled(AtomButton)(
  ({ theme }) => `
    font-family: ${theme.typography.titleGame.fontFamily};
    color: ${theme.palette.text.primary};
    :hover {
      color: ${theme.palette.primary.main};
    }
  `
);
export default ButtonLogin;
