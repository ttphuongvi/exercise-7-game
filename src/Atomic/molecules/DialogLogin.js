import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomTextField from "../atoms/AtomTextField";
import AtomPaper from "../atoms/AtomPaper";
import { useDispatch } from "react-redux";
import AtomDialogAtions from "../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import ButtonLogin from "./ButtonLogin";
import HorizontalStripeButton from "./../molecules/HorizontalStripeButton";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     // backgroundImage: `url(${image})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   size: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   paper: {
//     margin: theme.spacing(2, 6),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     boxShadow: "none",
//   },
//   avatar: {
//     margin: theme.spacing(0),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   title: {
//     fontFamily: "Oswald",
//   },
//   action: {
//     justifyContent: "center",
//   },
//   button: {
//     fontFamily: "Oswald",
//     color: theme.palette.text.secondary,
//     // color: theme.palette.primary.main,
//   },
// }));

const DialogTitleStyles = styled(AtomDialogTitle)(
  ({ theme }) => `
  font-family: ${theme.typography.subtitle1};

  
`
);

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
      >
        <DialogTitleStyles id="form-dialog-title">Đăng nhập</DialogTitleStyles>
        <AtomDialogContent>
          <AtomPaper
          // className={classes.paper}
          >
            <AtomAvatar
              alt="logo"
              src="/images/logo_none_text.png"
              // className={classes.avatar}
            ></AtomAvatar>
            <form
              // className={classes.form}
              noValidate
            >
              <AtomTextField
                // onChange={(event) => handelAccount("username", event)}
                variant="outlined"
                margin="normal"
                required
                // fullwidth
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
                // fullwidth
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
            </form>
          </AtomPaper>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};
export default FormLogin;
