import React, { useState } from "react";
import AtomDialog from "./../../atoms/AtomDialog";
import AtomDialogTitle from "./../../atoms/AtomDialogTitle";
import AtomDialogContent from "./../../atoms/AtomDialogContent";
import AtomDialogAtions from "./../../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import HorizontalStripeButton from "./../../molecules/HorizontalStripeButton";
import AtomStack from "./../../atoms/AtomStack";
import AtomDivider from "./../../atoms/AtomDivider";
import AtomTextField from "../../atoms/AtomTextField";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ADD_GAME } from "../../../store/const";

const DialogTitleStyles = styled(AtomDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.titleGame.fontFamily,
}));

const DialogCreateGame = (props) => {
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
    axios.post("https://game.phong940253.tk/games", item).then((res) => {
      dispatch({
        type: ADD_GAME,
        content: item,
      });
    });
  };

  return (
    <div id={props.id}>
      <HorizontalStripeButton
        label=" + TẠO GAME MỚI"
        onClick={handleClickOpen}
      ></HorizontalStripeButton>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitleStyles id="form-dialog-title">
          Tạo game mới
        </DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>
            <AtomTextField
              margin="normal"
              fullWidth
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
              id="outlined-basic"
              variant="outlined"
              label="Ảnh"
            />
            <AtomTextField
              margin="normal"
              fullWidth
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              value={caption}
              id="outlined-basic"
              variant="outlined"
              label="Tên"
            />
            <AtomTextField
              margin="normal"
              fullWidth
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
              margin="normal"
              fullWidth
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              id="outlined-basic"
              variant="outlined"
              label="Mô tả"
            />
            <AtomTextField
              margin="normal"
              fullWidth
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={link}
              id="outlined-basic"
              variant="outlined"
              label="Link game"
            />
            <AtomDialogAtions>
              <HorizontalStripeButton
                variant="contained"
                color="primary"
                onClick={saveGame}
                label="Lưu game"
              ></HorizontalStripeButton>
            </AtomDialogAtions>
          </AtomStack>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};

export default DialogCreateGame;
