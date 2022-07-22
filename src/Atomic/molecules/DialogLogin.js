import React from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomTextField from "../atoms/AtomTextField";
import { useDispatch } from "react-redux";
import AtomDialogAtions from "../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import ButtonLogin from "./ButtonLogin";
import HorizontalStripeButton from "./../molecules/HorizontalStripeButton";
import AtomStack from "../atoms/AtomStack";
import AtomDivider from "../atoms/AtomDivider";

const DialogTitleStyles = styled(AtomDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
}));

const FormLogin = () => {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const onLogin = () => {
    if (email !== null && password !== null) {
      axios
        .get(
          `https://game.phong940253.tk/users?email=${email}&password=${password}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            localStorage.setItem("user", JSON.stringify(res.data[0]));
            handleClose();
            alert("Đăng nhập thành công");
            dispatch({ type: "LOGIN", content: res.data[0] });
          } else {
            alert("Không đúng tài khoản hoặc mật khẩu");
          }
        });
    }
  };

  // const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();

  return (
    <div>
      <ButtonLogin onClick={handleClickOpen}>Đăng nhập</ButtonLogin>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitleStyles id="form-dialog-title">Đăng nhập</DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>
            <AtomAvatar
              alt="logo"
              src="/images/logo_none_text.png"
            ></AtomAvatar>
            <AtomTextField
              // onChange={(event) => handelAccount("username", event)}
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
            <TextField
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
            <AtomDialogAtions
            // className={classes.action}
            >
              <HorizontalStripeButton
                variant="contained"
                color="primary"
                // className={classes.submit}
                onClick={onLogin}
                label="Đăng nhập"
              ></HorizontalStripeButton>
            </AtomDialogAtions>
          </AtomStack>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};
export default FormLogin;
