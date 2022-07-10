import { React, useMemo, useState } from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Switch } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
  },
});

function Category() {
  const classes = useStyles();
  const [mode, setMode] = useState("light");
  // const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "hsl(0, 0%, 100%)",
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container} maxWidth="lg">
        <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
      </Container>
    </ThemeProvider>
  );
}

export default Category;
// import React from "react";

// const index = () => {
//   return <div>index</div>;
// };

// export default index;
