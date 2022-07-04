import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  caption: {
    fontFamily: "Oswald",
    color: "#2ac0ff",
    paddingBottom: "10px",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  gridContainer: {
    marginBottom: "10px",
  },
}));
export default useStyle;
