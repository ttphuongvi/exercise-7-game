import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  titleCatogery: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    justifyContent: "space-between",
    position: "relative",
    margin: "20px auto",
    padding: "20px 30px",
  },
  header: {
    padding: "0px 0px 0px 0px",
    height: "55px",
    marginBottom: "20px",
    float: "left",
    top: 0,
    // display: "flex",
    // justifyContent: "center",
  },
  typography: {
    fontFamily: "Oswald",
    fontSize: "18px",
    color: "#000",
    borderBottom: "1px solid #23313c",
    padding: "7px 0px 10px 25px",
    textTransform: "uppercase",
    background:
      "url('http://skywarriorthemes.com/orizon/blue/images/hbullet.png')left top no-repeat",
    "& span": {
      color: "#2ac0ff",
      float: "left",
    },
  },
});
export default useStyles;
