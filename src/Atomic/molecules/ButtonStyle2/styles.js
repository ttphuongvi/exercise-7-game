import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button1: {
    backgroundColor: "#2ac0ff",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: '"Oswald", sans-serif',
    fontSize: "1em",
    /* font-size: 22px; */
    width: "200px",
    lineHeight: "1em",
    margin: "15px 0px",
    outline: "none",
    padding: "12px 40px 10px",
    position: "relative",
    textTransform: "uppercase",
    fonWeight: 700,
    "&:before, &:after": {
      borderColor: "transparent",
      webkitTransition: "all 0.25s",
      transition: "all 0.25s",
      borderStyle: "solid",
      borderWidth: 0,
      content: "''",
      height: "24px",
      position: "absolute",
      width: "24px",
    },
    "&:before": {
      borderColor: "#2ac0ff",
      borderTopWidth: "2px",
      left: "0px",
      top: "-5px",
    },
    "&:after": {
      borderColor: "#2ac0ff",
      borderBottomWidth: "2px",
      right: "0px",
      bottom: "-5px",
    },
    "&:hover": {
      backgroundColor: "#2ac0ff",
      "&:before": {
        height: "100%",
        width: "100%",
      },
      "&:after": {
        height: "100%",
        width: "100%",
      },
    },

    "& label": {
      position: "relative",
      paddingRight: 0,
      transition: "padding-right 0.5s",
      color: "#363858",
      fontFamily: "'Oswald', sans-serif",
      fontWeight: 200,
    },
  },
});
export default useStyles;
