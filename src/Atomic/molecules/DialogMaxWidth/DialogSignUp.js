import React, { useState } from "react";
import AtomTextField from "../../atoms/AtomTextField";
import axios from "axios";
import DialogMaxWidth from ".";
import AtomAlert from "../../atoms/AtomAlert";

export default function SignUp() {
  // const [setOpen] = React.useState(false);

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
      // alert(" Đăng ký thành công!");
      // handleClose();
    } else {
      setShowAlertError(true);
    }
  };

  return (
    <DialogMaxWidth
      actionName="Đăng ký"
      onClick={onSignUp}
      content={
        <>
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
        </>
      }
    ></DialogMaxWidth>
  );
}
