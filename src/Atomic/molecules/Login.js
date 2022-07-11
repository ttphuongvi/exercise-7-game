import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomTextField from "../atoms/AtomTextField";
import AtomPaper from "../atoms/AtomPaper";
import logo from "../../img/hahalolo-logo.png";
import { useSelector, useDispatch } from "react-redux";
import ButtonStyle2 from "../molecules/ButtonStyle2";
import AtomDialogAtions from "../atoms/AtomDialogActions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    // backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "none",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    fontFamily: "Oswald",
  },
  action: {
    justifyContent: "center",
  },
  button: {
    fontFamily: "Oswald",
    color: "white",
  },
}));

const FormLogin = () => {
  const classes = useStyles();
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
            // res.data[0].loggedIn = true;
            dispatch({ type: "LOGIN", content: res.data[0] });
            // console.log(res.data[0].loggedIn);
          } else {
            alert("Không đúng tài khoản hoặc mật khẩu");
          }
        });
    }
  };

  const user = useSelector((state) => state.user.content);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <AtomButton className={classes.button} onClick={handleClickOpen}>
        Đăng nhập
      </AtomButton>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <AtomDialogTitle className={classes.title} id="form-dialog-title">
          Đăng nhập
        </AtomDialogTitle>
        <AtomDialogContent>
          <AtomPaper className={classes.paper}>
            <AtomAvatar src={logo} className={classes.avatar}></AtomAvatar>
            <form className={classes.form} noValidate>
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
              <AtomDialogAtions className={classes.action}>
                <ButtonStyle2
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={onLogin}
                  label="Đăng nhập"
                ></ButtonStyle2>
              </AtomDialogAtions>
            </form>
          </AtomPaper>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};
export default FormLogin;
