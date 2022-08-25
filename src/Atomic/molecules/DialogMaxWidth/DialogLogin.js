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
import { AppContext } from "../../../context/context";
import AtomBox from "../../atoms/AtomBox";
import AtomDialogActions from "../../atoms/AtomDialogActions";
import ButtonHorizontalStripe from "../../molecules/ButtonHorizontalStripe";

const DialogLogin = () => {
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

  const { openLogin, handleLogin } = React.useContext(AppContext);

  const handleCloseLogin = () => {
    handleLogin(false);
  };

  return (
    <DialogMaxWidth
      title="Đăng nhập"
      open={openLogin}
      onClose={handleCloseLogin}
      content={
        <>
          <AtomBox
            component="img"
            alt=""
            src="/images/logo_hahalolo.png"
            sx={{ width: "40%" }}
          ></AtomBox>
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
          <AtomFormControl required fullWidth sx={{ m: 1 }} variant="outlined">
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
      action={
        <AtomDialogActions
          sx={(theme) => ({ padding: theme.spacing(0, 3, 2, 0) })}
        >
          <ButtonHorizontalStripe
            variant="contained"
            color="primary"
            onClick={onLogin}
            label="Đăng nhập"
          ></ButtonHorizontalStripe>
        </AtomDialogActions>
      }
    ></DialogMaxWidth>
  );
};
export default DialogLogin;
