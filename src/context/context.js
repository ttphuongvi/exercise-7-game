import React from "react";

const defaultValue = {
  openAlert: false,
  darkMode: false,
  customTheme: null,
  openLogin: false,
  openSignUp: false,
};

export const AppContext = React.createContext(defaultValue);

export const ContextProvider = (props) => {
  const [darkMode, setDarkMode] = React.useState(defaultValue.darkMode);
  const [customTheme, setCustomTheme] = React.useState(
    defaultValue.customTheme
  );

  const [openAlert, setOpenAlert] = React.useState(defaultValue.openAlert);

  const [openLogin, setOpenLogin] = React.useState(defaultValue.openLogin);

  const [openSignUp, setOpenSignUp] = React.useState(defaultValue.openSignUp);

  const handleLogin = (bool) => {
    setOpenLogin(bool);
  };

  // const handleCloseLogin = () => {
  //   setOpenLogin(false);
  // };

  // const handleClickOpenSignUp = () => {
  //   setOpenSignUp(true);
  // };

  // const handleCloseSignUp = () => {
  //   setOpenSignUp(false);
  // };
  const hanleSignUp = (bool) => {
    setOpenSignUp(bool);
  };

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeCustomTheme = (colorString) => {
    setCustomTheme(colorString);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        customTheme,
        openAlert,
        openLogin,
        setOpenLogin,
        openSignUp,
        setOpenSignUp,
        changeDarkMode,
        changeCustomTheme,
        handleCloseAlert,
        handleOpenAlert,
        handleLogin,
        // handleCloseLogin,
        // handleClickOpenSignUp,
        // handleCloseSignUp,
        hanleSignUp,
      }}
      {...props}
    ></AppContext.Provider>
  );
};
