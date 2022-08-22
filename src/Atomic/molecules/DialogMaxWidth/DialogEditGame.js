import React, { useState } from "react";
import AtomTextField from "../../atoms/AtomTextField";
import { useDispatch } from "react-redux";
import AtomAlert from "../../atoms/AtomAlert";
import DialogMaxWidth from ".";
import AtomMenuItem from "../../atoms/AtomMenuItem";
import AtomListItemIcon from "../../atoms/AtomListItemIcon";
import AtomIconEditOutlined from "../../atoms/AtomIconEditOutlined";
import { EDIT_GAME } from "../../../store/const";

const DialogEditGame = (props) => {
  const [caption, setCaption] = useState(props.caption);
  const [description, setDescription] = useState(props.description);
  const [image, setImage] = useState(props.image);
  const [release, setRelease] = useState(props.release);
  const [link, setLink] = useState(props.link);

  const dispatch = useDispatch();
  // const dataSource = useSelector((state) => state.listGame.content);

  const [showAlertEror, setShowAlertError] = useState(false);

  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);

  const handleClickOpenDialogEdit = (e) => {
    e.stopPropagation();
    setOpenDialogEdit(true);
  };

  const handleCloseDialogEdit = (e) => {
    // e.stopPropagation();
    setOpenDialogEdit(false);
  };

  const saveEditGame = (e) => {
    // e.stopPropagation();
    if (
      caption === "" ||
      description === "" ||
      image === "" ||
      release === "" ||
      link === ""
    ) {
      setShowAlertError(true);
    } else {
      dispatch({
        type: EDIT_GAME,
        content: {
          id: props.id,
          caption: caption,
          description: description,
          image: image,
          release: release,
          link: link,
        },
      });
      handleCloseDialogEdit();
    }
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
        onClick={saveEditGame}
        open={openDialogEdit}
        onClose={handleCloseDialogEdit}
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
              InputLabelProps={{
                shrink: true,
              }}
            />
            <AtomTextField
              multiline
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
