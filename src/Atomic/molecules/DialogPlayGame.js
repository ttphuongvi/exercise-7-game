import React from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomCloseIcon from "../atoms/AtomCLoseIcon";
import AtomDialog from "../atoms/AtomDialog";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomSlide from "../atoms/AtomSlide";
import AtomToolBar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import { makeStyles } from "@material-ui/core/styles";
import Iframe from "react-iframe";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <AtomSlide direction="up" ref={ref} {...props} />;
});
const DialogPlayGame = (props) => {
  const classes = useStyles();
  return (
    <AtomDialog
      fullScreen
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
    >
      <AtomAppBar className={classes.appBar}>
        <AtomToolBar>
          <AtomIconButton
            edge="start"
            color="inherit"
            onClick={props.onClick}
            aria-label="close"
          >
            <AtomCloseIcon />
          </AtomIconButton>
          <AtomTypography variant="h6" className={classes.title}>
            {props.caption}
          </AtomTypography>
        </AtomToolBar>
      </AtomAppBar>
      <Iframe url={props.link} width="100%" height="100%" />
    </AtomDialog>
  );
};

export default DialogPlayGame;
