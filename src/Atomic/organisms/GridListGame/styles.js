import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  gridContainer: {
    marginBottom: "10px",
  },
  itemListgame: {
    // border: "3px solid rgb(0 0 0 / 20%)",
    // borderRadius: "10px",
    position: "relative",
    paddingBottom: "10%",
    boxShadow:
      "0 4px 8px 0 rgb(227 211 211 / 20%), 0 6px 20px 0 rgb(168 163 163 / 19%)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    margin: "10% 10% 0 10%",
    border: "3px solid #22394c",
    WebkitBoxShadow: "0px 2px 3px 1px rgb(0 0 0)",
    borderRadius: "5px",
    boxShadow: "0px 2px 3px 1px rgb(0 0 0)",
    // 16:9
  },
  caption: {
    textShadow: "none",
    fontFamily: '"Oswald", Helvetica, Arial, sans-serif',
    background: "none",
    display: "block",
    height: "20px",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "0px 0px 10px 0px",
    margin: "0px 0px 0px 0px",
    float: "left",
    color: "#2ac0ff",
  },
  contentListGame: {
    margin: "0 5% 0 5%",
  },
});
export default useStyles;
