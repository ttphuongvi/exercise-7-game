import { makeStyles, styled } from "@material-ui/core/styles";
import AtomPaper from "../atoms/AtomPaper";

const StyledContainer = styled(AtomPaper)({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  justifyContent: "space-between",
  position: "relative",
  margin: "20px auto",
  padding: "20px 30px",
  //   minHeight: "100vh",
  // boxShadow:
  //   "0 4px 8px 0 rgb(175 156 156 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)",
});

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.default,
  },
}));

const Container = (props) => {
  const classes = useStyles();
  return (
    <StyledContainer className={classes.container}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
