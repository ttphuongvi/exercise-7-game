import React, { useState } from "react";
import axios from "axios";
import AtomTextField from "../../atoms/AtomTextField";
import { useDispatch } from "react-redux";
import DialogMaxWidth from ".";
import AtomAlert from "../../atoms/AtomAlert";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomInputLabel from "../../atoms/AtomInputLabel";
import AtomFormControl from "../../atoms/AtomFormControl";
import AtomVisibilityOffIcon from "../../atoms/AtomIconVisibilityOff";
import AtomOutlinedInput from "../../atoms/AtomOutlinedInput";
import AtomInputAdornment from "../../atoms/AtomInputAdornment";
import AtomVisibilityIcon from "../../atoms/AtomIconVisibility";
import { styled } from "@mui/material/styles";
import AtomButton from "../../atoms/AtomButton";

const ButtonMenu = styled(AtomButton)(
  ({ theme }) => `
    font-family: ${theme.typography.titleGame.fontFamily};
    color: ${theme.palette.text.primary};
    :hover {
      color: ${theme.palette.primary.main};
    }
  `
);

const DialogLogin = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showAlertErrorLackInfo, setShowAlertErrorLackInfo] = useState(false);

  const [showAlertErrorWrongInfo, setShowAlertErrorWrongInfo] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const onLogin = () => {
    if (email !== "" && password !== "") {
      axios
        .get(
          `https://game.phong940253.tk/users?email=${email}&password=${password}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            localStorage.setItem("user", JSON.stringify(res.data[0]));
            // handleClose();
            dispatch({ type: "LOGIN", content: res.data[0] });
            setShowAlertErrorWrongInfo(false);
          } else {
            setShowAlertErrorWrongInfo(true);
          }
        });
      setShowAlertErrorLackInfo(false);
    } else {
      setShowAlertErrorLackInfo(true);
    }
  };

  const [openLogin, setOpenLogin] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  // const user = useSelector((state) => state.user.content);

  return (
    <>
      <ButtonMenu onClick={handleClickOpenLogin}>Đăng nhập</ButtonMenu>
      <DialogMaxWidth
        action="Đăng nhập"
        title="Đăng nhập"
        onClick={onLogin}
        open={openLogin}
        onClose={handleCloseLogin}
        content={
          <>
            <AtomTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email"
              name="username"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <AtomFormControl
              required
              fullWidth
              sx={{ m: 1 }}
              variant="outlined"
            >
              <AtomInputLabel htmlFor="outlined-adornment-password">
                Mật khẩu
              </AtomInputLabel>
              <AtomOutlinedInput
                margin="none"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                  <AtomInputAdornment position="end">
                    <AtomIconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <AtomVisibilityIcon />
                      ) : (
                        <AtomVisibilityOffIcon />
                      )}
                    </AtomIconButton>
                  </AtomInputAdornment>
                }
                label="Password"
              />
            </AtomFormControl>
            {showAlertErrorLackInfo && (
              <AtomAlert sx={{ width: "100%" }} severity="error">
                Vui lòng nhập đầy đủ thông tin đăng nhập!
              </AtomAlert>
            )}
            {showAlertErrorWrongInfo && (
              <AtomAlert sx={{ width: "100%" }} severity="error">
                Không đúng tài khoản hoặc mật khẩu!
              </AtomAlert>
            )}
          </>
        }
      ></DialogMaxWidth>
    </>
  );
};
export default DialogLogin;
