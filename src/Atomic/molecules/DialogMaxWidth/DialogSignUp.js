import React, { useContext, useState } from "react";
import AtomTextField from "../../atoms/AtomTextField";
import axios from "axios";
import AtomAlert from "../../atoms/AtomAlert";

import AtomDialog from "./../../atoms/AtomDialog";
import AtomDialogTitle from "./../../atoms/AtomDialogTitle";
import AtomDialogContent from "./../../atoms/AtomDialogContent";
import AtomDialogAtions from "./../../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import HorizontalStripeButton from "./../../molecules/ButtonHorizontalStripe";
import AtomStack from "./../../atoms/AtomStack";
import AtomDivider from "./../../atoms/AtomDivider";
import AtomBox from "../../atoms/AtomBox";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomIconClose from "../../atoms/AtomIconClose";
import AtomButton from "../../atoms/AtomButton";
import { AppContext } from "../../../context/context";

const DialogTitleStyles = styled(AtomDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.titleGame.fontFamily,
}));

const ButtonMenu = styled(AtomButton)(
  ({ theme }) => `
    font-family: ${theme.typography.titleGame.fontFamily};
    color: ${theme.palette.text.primary};
    :hover {
      color: ${theme.palette.primary.main};
    }
  `
);

const DialogSignUp = () => {
  const { handleOpenAlert } = useContext(AppContext);

  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

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

  const onSignUp = () => {
    if (name && email && password) {
      addUser();
      handleClose();
      alert(" Đăng ký thành công!");
      // <AlertSuccess />;
      handleOpenAlert();
    } else {
      // setOpenAlert(false);
      setShowAlertError(true);
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonMenu onClick={handleClickOpen}>Đăng ký</ButtonMenu>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitleStyles id="form-dialog-title">
          <AtomStack
            edge="end"
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            Đăng ký
            <AtomIconButton onClick={handleClose} size="large">
              <AtomIconClose />
            </AtomIconButton>
          </AtomStack>
        </DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>
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
            <AtomTextField
              // onChange={(event) => handelAccount("password", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {showAlertError && (
              <AtomAlert sx={{ width: "100%" }} severity="error">
                Vui lòng nhập đầy đủ thông tin đăng ký!
              </AtomAlert>
            )}
            {/* <AtomSnackBar
              open={openAlert}
              autoHideDuration={10000}
              onClose={handleCloseAlert}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <AtomAlert onClose={handleCloseAlert} severity="success">
                Đăng ký tài khoản thành công!
              </AtomAlert>
            </AtomSnackBar> */}
            <AtomDialogAtions>
              <HorizontalStripeButton
                variant="contained"
                color="primary"
                onClick={onSignUp}
                label="Đăng ký"
              ></HorizontalStripeButton>
            </AtomDialogAtions>
          </AtomStack>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};

export default DialogSignUp;
