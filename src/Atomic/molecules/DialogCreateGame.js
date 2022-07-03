import React, { useState } from "react";
import axios from "axios";
import Button from "../atoms/AtomButton";
import Dialog from "../atoms/AtomDialog";
import DialogActions from "../atoms/AtomDialogActions";
import DialogContent from "../atoms/AtomDialogContent";
import DialogTitle from "../atoms/AtomDialogTitle";
import ButtonStyle2 from "./ButtonStyle2";
import { makeStyles } from "@material-ui/core/styles";
import AtomTextField from "../atoms/AtomTextField";
import ButtonStyle1 from "./ButtonStyle1";
import { useDispatch } from "react-redux";
import { ADD_GAME, SET_LIST_GAME } from "../../redux/const/index";

const useStyles = makeStyles({
  AtomTextField: {
    marginBottom: "15px",
    width: "100%",
    borderRadius: "10px",
  },
  FormCreateGame: { padding: "20px" },
});
const DialogCreateGame = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();

  const saveGame = () => {
    const item = {
      caption: caption,
      image: image,
      description: description,
      release: release,
      link: link,
    };
    axios.post("/games", item).then((res) => {
      dispatch({
        type: ADD_GAME,
        content: item,
      });
    });
  };

  return (
    <div>
      <ButtonStyle2 label=" + TẠO GAME MỚI" onClick={handleClickOpen}>
        Open form dialog
      </ButtonStyle2>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Tạo game mới</DialogTitle>
        <DialogContent>
          <AtomTextField
            className={classes.AtomTextField}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            id="outlined-basic"
            variant="outlined"
            label="Ảnh"
          />
          <AtomTextField
            className={classes.AtomTextField}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            value={caption}
            id="outlined-basic"
            variant="outlined"
            label="Tên"
          />
          <AtomTextField
            className={classes.AtomTextField}
            onChange={(e) => {
              setRelease(e.target.value);
            }}
            value={release}
            id="outlined-basic"
            variant="outlined"
            type={"date"}
            label="Ngày phát hành"
            defaultValue="2022-05-29"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <AtomTextField
            className={classes.AtomTextField}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            id="outlined-basic"
            variant="outlined"
            label="Mô tả"
          />
          <AtomTextField
            className={classes.AtomTextField}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            value={link}
            id="outlined-basic"
            variant="outlined"
            label="Link game"
          />
        </DialogContent>
        <DialogActions>
          <ButtonStyle1
            onClick={() => {
              if (caption && description && image && release && link) {
                saveGame();
                // alert("Đã lưu thành công");
                // Сlose the dialog and return the value
                // dialog.close(value);
              } else {
                alert("Vui lòng nhập đầy đủ thông tin");
              }
            }}
            label=" Lưu game"
          ></ButtonStyle1>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogCreateGame;
