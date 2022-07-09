import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import AtomGrid from "../atoms/AtomGrid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomTypography from "../atoms/AtomTypography";
import AtomTextField from "../atoms/AtomTextField";
import AtomPaper from "../atoms/AtomPaper";
import logo from "../../img/hahalolo-logo.png";

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
      axios.get(`/users?email=${email}&password=${password}`).then((res) => {
        if (res.data.length > 0) {
          localStorage.setItem("user", JSON.stringify(res.data[0]));
          handleClose();
          alert("Đăng nhập thành công");
        } else {
          alert("Không đúng tài khoản hoặc mật khẩu");
        }
      });
    }
  };

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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Ghi nhớ đăng nhập"
              />
              <AtomButton
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onLogin}
              >
                Sign In
              </AtomButton>
              <AtomGrid container>
                <AtomGrid item>
                  <Link href="#" variant="body2">
                    {"Bạn chưa có tài khoản? Đăng ký ngay!"}
                  </Link>
                </AtomGrid>
              </AtomGrid>
            </form>
          </AtomPaper>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};
export default FormLogin;
