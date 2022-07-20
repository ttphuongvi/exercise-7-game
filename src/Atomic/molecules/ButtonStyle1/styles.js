import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customButton: {
    width: "130px",
    height: "40px",
    color: "#fff",
    boderRadius: "5px",
    padding: "10px 25px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 500,
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    display: "inline-block",
    boxShadow:
      "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)",
    outline: "none",
    textTransform: "none",
  },
  button: {
    // background: "rgb(0, 172, 238)",
    background: "linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, #2ac0ff 100%)",
    width: "130px",
    height: "40px",
    lineHeight: "42px",
    padding: 0,
    border: "none",
    "& span": {
      position: "relative",
      display: "block",
      width: "100%",
      height: "100%",
      "&:hover": {
        color: "#2ac0ff",
        "&:before": {
          height: "100%",
        },
        "&:after": {
          width: "100%",
        },
      },

      "&:after": {
        position: "absolute",
        content: '""',
        left: 0,
        bottom: 0,
        background: "#2ac0ff",
        transition: "all 0.3s ease",
        width: "0%",
        height: "2px",
      },
      "&:before": {
        position: "absolute",
        content: '""',
        left: 0,
        bottom: 0,
        background: "#2ac0ff",
        transition: "all 0.3s ease",
        width: "2px",
        height: "0%",
      },
    },
    "&:before": {
      position: "absolute",
      content: '""',
      right: 0,
      top: 0,
      background: "#2ac0ff",
      transition: "all 0.3s ease",
      height: "0%",
      width: "2px",
    },
    "&:after": {
      position: "absolute",
      content: "''",
      right: 0,
      top: 0,
      background: "#2ac0ff",
      transition: "all 0.3s ease",
      width: "0%",
      height: "2px",
    },
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
      "&:before": {
        height: "100%",
      },
      "&:after": {
        width: "100%",
      },
    },
  },
});

export default useStyles;
