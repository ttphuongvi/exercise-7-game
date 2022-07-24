import React from "react";

const defaultValue = {
  darkMode: false,
  customTheme: null,
};

export const AppContext = React.createContext(defaultValue);

export const ContextProvider = (props) => {
  const [darkMode, setDarkMode] = React.useState(defaultValue.darkMode);
  const [customTheme, setCustomTheme] = React.useState(
    defaultValue.customTheme
  );
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeCustomTheme = (colorString) => {
    setCustomTheme(colorString);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        customTheme,
        changeDarkMode,
        changeCustomTheme,
      }}
      {...props}
    ></AppContext.Provider>
  );
};
