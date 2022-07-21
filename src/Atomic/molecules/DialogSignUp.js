import React from "react";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomTextField from "../atoms/AtomTextField";
import AtomDialog from "../atoms/AtomDialog";
import axios from "axios";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogActions from "../atoms/AtomDialogActions";
import HorizonetalStripeButton from "./HorizontalStripeButton";
import ButtonLogin from "./ButtonLogin";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(1),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   button: {
//     fontFamily: "Oswald",
//     color: theme.palette.text.secondary,
//   },
//   action: {
//     justifyContent: "center",
//   },
// }));

export default function SignUp() {
  // const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
      <ButtonLogin onClick={handleClickOpen}>Đăng ký</ButtonLogin>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <AtomDialogTitle id="form-dialog-title">Đăng ký</AtomDialogTitle>
        <AtomDialogContent>
          <div
          // className={classes.paper}
          >
            <AtomAvatar
              src="/images/logo_none_text.png"
              // className={classes.avatar}
            ></AtomAvatar>
            <form
              // className={classes.form}
              noValidate
            >
              <AtomTextField
                variant="outlined"
                required
                margin="normal"
                // fullwidth
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
                // fullwidth
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
                // fullwidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <AtomDialogActions
              // className={classes.action}
              >
                <HorizonetalStripeButton
                  // fullwidth
                  variant="contained"
                  color="primary"
                  label="Đăng ký"
                  // className={classes.submit}
                  onClick={() => {
                    if (name && email && password) {
                      addUser();
                      // dispatch({ type: "ADD_USER", content: { name, email } });
                      handleClose();
                    }
                  }}
                ></HorizonetalStripeButton>
              </AtomDialogActions>
            </form>
          </div>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
}
