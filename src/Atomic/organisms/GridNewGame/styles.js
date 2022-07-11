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
    // color: theme.palette.text.secondary,
  },

  gridContainer: {
    marginBottom: "10px",
  },
  caption: {
    marginBottom: "10px",
  },
}));
export default useStyle;
