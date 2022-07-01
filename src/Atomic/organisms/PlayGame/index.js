import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import DialogPlayGame from "../../molecules/DialogPlayGame";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  floatRight: {
    float: "right",
  },
}));

const PlayGame = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.floatRight}>
      <ButtonStyle1 label="Chơi game" onClick={handleClickOpen}></ButtonStyle1>
      <DialogPlayGame
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        caption={props.caption}
        link={props.link}
      />
    </div>
  );
};
export default PlayGame;
