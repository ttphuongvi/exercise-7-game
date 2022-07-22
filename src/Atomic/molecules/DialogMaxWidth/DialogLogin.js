import React from "react";
import axios from "axios";
import AtomTextField from "../../atoms/AtomTextField";
import { useDispatch } from "react-redux";
import DialogMaxWidth from ".";

const DialogLogin = () => {
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
            // handleClose();
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
    <DialogMaxWidth
      actionName="Đăng nhập"
      onClick={onLogin}
      content={
        <>
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
        </>
      }
    ></DialogMaxWidth>
  );
};
export default DialogLogin;
