import React, { useContext, useState } from "react";
import AtomTextField from "../../atoms/AtomTextField";
import axios from "axios";
import AtomAlert from "../../atoms/AtomAlert";
import AtomIconButton from "../../atoms/AtomIconButton";
import { AppContext } from "../../../context/context";
import AtomFormControl from "../../atoms/AtomFormControl";
import AtomInputLabel from "../../atoms/AtomInputLabel";
import AtomOutlinedInput from "../../atoms/AtomOutlinedInput";
import AtomInputAdornment from "../../atoms/AtomInputAdornment";
import AtomVisibilityIcon from "../../atoms/AtomIconVisibility";
import AtomVisibilityOffIcon from "../../atoms/AtomIconVisibilityOff";
import DialogMaxWidth from ".";
import AtomBox from "../../atoms/AtomBox";
import AtomDialogActions from "../../atoms/AtomDialogActions";
import ButtonHorizontalStripe from "../../molecules/ButtonHorizontalStripe";

const DialogSignUp = () => {
  const { handleOpenAlert } = useContext(AppContext);

  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const addUser = () => {
    axios.post("https://game.phong940253.tk/users", {
      name: name,
      email: email,
      password: password,
    });
  };

  const [showAlertError, setShowAlertError] = useState(false);

  const { openSignUp, hanleSignUp } = useContext(AppContext);

  const handleCloseSignUp = () => {
    hanleSignUp(false);
  };

  const onSignUp = () => {
    if (name && email && password) {
      addUser();
      handleCloseSignUp();
      alert(" Đăng ký thành công!");
      // <AlertSuccess />;
      handleOpenAlert();
    } else {
      // setOpenAlert(false);
      setShowAlertError(true);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <DialogMaxWidth
      open={openSignUp}
      onClose={handleCloseSignUp}
      title="Đăng ký"
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
            required
            margin="normal"
            fullWidth
            id="name"
            label="Tên đăng nhập"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <AtomTextField
            variant="outlined"
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(even) => setEmail(even.target.value)}
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
          {showAlertError && (
            <AtomAlert sx={{ width: "100%" }} severity="error">
              Vui lòng nhập đầy đủ thông tin đăng ký!
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
            onClick={onSignUp}
            label="Đăng ký"
          ></ButtonHorizontalStripe>
        </AtomDialogActions>
      }
    ></DialogMaxWidth>

    //  <AtomSnackBar
    //             open={openAlert}
    //             autoHideDuration={10000}
    //             onClose={handleCloseAlert}
    //             anchorOrigin={{ vertical: "top", horizontal: "center" }}
    //           >
    //             <AtomAlert onClose={handleCloseAlert} severity="success">
    //               Đăng ký tài khoản thành công!
    //             </AtomAlert>
    //           </AtomSnackBar>
  );
};

export default DialogSignUp;
