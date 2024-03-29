import React from "react";
import AtomAppBar from "../../atoms/AtomAppBar";
import AtomCloseIcon from "../../atoms/AtomCLoseIcon";
import AtomDialog from "../../atoms/AtomDialog";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomSlide from "../../atoms/AtomSlide";
import AtomToolBar from "../../atoms/AtomToolbar";
import AtomTypography from "../../atoms/AtomTypography";
import Iframe from "react-iframe";
import ButtonStyle1 from "../ButtonSquareStripe";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <AtomSlide direction="up" ref={ref} {...props} />;
});
const DialogPlayGame = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  return (
    <div>
      <ButtonStyle1 label="Chơi game" onClick={handleClickOpen}></ButtonStyle1>
      <AtomDialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AtomAppBar>
          <AtomToolBar>
            <AtomIconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <AtomCloseIcon />
            </AtomIconButton>
            <AtomTypography component={"span"} variant="titleGame">
              {props.caption}
            </AtomTypography>
          </AtomToolBar>
        </AtomAppBar>
        <Iframe url={props.link} width="100%" height="100%" />
      </AtomDialog>
    </div>
  );
};

export default DialogPlayGame;
