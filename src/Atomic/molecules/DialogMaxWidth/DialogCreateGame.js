import React, { useState } from "react";
import HorizontalStripeButton from "./../../molecules/ButtonHorizontalStripe";
import AtomTextField from "../../atoms/AtomTextField";
import { useSelector, useDispatch } from "react-redux";
import { ADD_GAME } from "../../../store/const";
import AtomAlert from "../../atoms/AtomAlert";
import DialogMaxWidth from ".";
import AtomIconCreate from "../../atoms/AtomIconCreate";
import AtomDialogActions from "../../atoms/AtomDialogActions";
import ButtonCancel from "../ButtonCancel";
import AtomIconClose from "../../atoms/AtomIconClose";
import ButtonSquareStripe from "../ButtonSquareStripe";

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
  const dataSource = useSelector((state) => state.listGame.content);

  const [showAlertEror, setShowAlertError] = useState(false);

  const saveGame = () => {
    let nextId = parseInt(dataSource.sort((a, b) => b.id - a.id)[0].id) + 1;
    const item = {
      caption: caption,
      image: image,
      description: description,
      release: release,
      link: link,
      id: nextId,
    };
    if (
      caption === "" ||
      description === "" ||
      image === "" ||
      release === "" ||
      link === ""
    ) {
      // alert("Please fill all fields");

      setShowAlertError(true);
    } else {
      setShowAlertError(false);

      dispatch({
        type: ADD_GAME,
        content: item,
      });
      handleClose();
    }
  };

  return (
    <>
      <HorizontalStripeButton
        icon={<AtomIconCreate />}
        label="TẠO GAME MỚI"
        onClick={handleClickOpen}
      ></HorizontalStripeButton>
      <DialogMaxWidth
        title=" Tạo game mới"
        open={open}
        onClose={handleClose}
        content={
          <>
            <AtomTextField
              margin="normal"
              fullWidth
              variant="outlined"
              required
              label=" Ảnh"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <AtomTextField
              required
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
              required
              margin="normal"
              fullWidth
              onChange={(e) => {
                setRelease(e.target.value);
              }}
              value={release}
              id="outlined-basic"
              color="primary"
              variant="outlined"
              type={"date"}
              label="Ngày phát hành"
              // defaultValue="2022-05-29"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <AtomTextField
              multiline
              rows={3}
              required
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
              required
              margin="normal"
              fullWidth
              onChange={(e) => {
                setLink(e.target.value);
              }}
              value={link}
              id="outlined-basic"
              variant="outlined"
              label="Link game"
              // defaultValue={"https://codepen.io/HunorMarton/full/xxOMQKg"}
            />
            {showAlertEror && (
              <AtomAlert sx={{ width: "100%" }} severity="error">
                Vui lòng nhập đầy đủ thông tin!
              </AtomAlert>
            )}
          </>
        }
        action={
          <AtomDialogActions
            sx={(theme) => ({ padding: theme.spacing(0, 3, 2, 0) })}
          >
            <ButtonCancel
              variant="outlined"
              startIcon={<AtomIconClose />}
              onClick={handleClose}
              label="Hủy"
            ></ButtonCancel>
            <ButtonSquareStripe
              icon={props.icon}
              variant="contained"
              color="primary"
              onClick={saveGame}
              label="Thêm game"
            ></ButtonSquareStripe>
          </AtomDialogActions>
        }
      ></DialogMaxWidth>
    </>
  );
};

export default DialogCreateGame;
