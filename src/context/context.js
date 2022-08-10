import React from "react";

const defaultValue = {
  openAlert: false,
  darkMode: false,
  customTheme: null,
};

export const AppContext = React.createContext(defaultValue);

export const ContextProvider = (props) => {
  const [darkMode, setDarkMode] = React.useState(defaultValue.darkMode);
  const [customTheme, setCustomTheme] = React.useState(
    defaultValue.customTheme
  );

  const [openAlert, setOpenAlert] = React.useState(defaultValue.openAlert);

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
        changeDarkMode,
        changeCustomTheme,
        handleCloseAlert,
        handleOpenAlert,
      }}
      {...props}
    ></AppContext.Provider>
  );
};
