import React, { useState } from "react";
import AtomTextField from "../../atoms/AtomTextField";
import { useSelector, useDispatch } from "react-redux";
import { ADD_GAME } from "../../../store/const";
import AtomAlert from "../../atoms/AtomAlert";
import DialogMaxWidth from ".";
import AtomMenuItem from "../../atoms/AtomMenuItem";
import AtomListItemIcon from "../../atoms/AtomListItemIcon";
import AtomIconEditOutlined from "../../atoms/AtomIconEditOutlined";

const DialogEditGame = (props) => {
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.listGame.content);

  const [showAlertEror, setShowAlertError] = useState(false);

  const saveGame = (e) => {
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
      e.stopPropagation();
      setShowAlertError(false);

      dispatch({
        type: ADD_GAME,
        content: item,
      });
      // handleClose();
    }
  };
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);
  const handleClickOpenDialogEdit = (e) => {
    e.stopPropagation();
    setOpenDialogEdit(true);
  };

  const handleCloseDialogEdit = (e) => {
    e.stopPropagation();
    setOpenDialogEdit(false);
  };

  return (
    <>
      <AtomMenuItem onClick={handleClickOpenDialogEdit}>
        <AtomListItemIcon>
          <AtomIconEditOutlined fontSize="small" />
        </AtomListItemIcon>
        Chỉnh sửa
      </AtomMenuItem>
      <DialogMaxWidth
        action="Lưu thay đổi"
        title=" Chỉnh sửa game"
        onClick={saveGame}
        open={openDialogEdit}
        handleClose={handleCloseDialogEdit}
        content={
          <>
            <AtomTextField
              margin="normal"
              fullWidth
              variant="outlined"
              required
              label=" Ảnh"
              // value={image}
              defaultValue={props.image}
              onChange={(e) => setImage(e.target.value)}
            />
            <AtomTextField
              required
              margin="normal"
              fullWidth
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              // value={caption}
              defaultValue={props.caption}
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
              // value={release}
              id="outlined-basic"
              color="primary"
              variant="outlined"
              type={"date"}
              label="Ngày phát hành"
              defaultValue={props.release}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <AtomTextField
              required
              margin="normal"
              fullWidth
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              // value={description}
              defaultValue={props.description}
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
              // value={link}
              id="outlined-basic"
              variant="outlined"
              label="Link game"
              defaultValue={props.link}
            />
            {showAlertEror && (
              <AtomAlert sx={{ width: "100%" }} severity="error">
                Vui lòng nhập đầy đủ thông tin!
              </AtomAlert>
            )}
          </>
        }
      ></DialogMaxWidth>
    </>
  );
};

export default DialogEditGame;
