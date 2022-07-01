import { CustomDialog } from "react-st-modal";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import axios from "axios";
import AtomTextField from "../../atoms/AtomTextField";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import ButtonStyle2 from "../../molecules/ButtonStyle2";

const useStyles = makeStyles({
  AtomTextField: {
    marginBottom: "15px",
    width: "100%",
    borderRadius: "10px",
  },
  FormCreateGame: { padding: "20px" },
});
const CustomDialogContent = () => {
  const classes = useStyles();
  const saveGame = () => {
    axios.post("/games", {
      caption: caption,
      image: image,
      description: description,
      release: release,
      link: link,
    });
  };
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className="div__Dialog">
      <div className="div__dialog-content">
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
      </div>
      <ButtonStyle1
        onClick={() => {
          if (caption && description && image && release && link) {
            saveGame();
            alert("Đã lưu thành công");
            // Сlose the dialog and return the value
            // dialog.close(value);
          } else {
            alert("Vui lòng nhập đầy đủ thông tin");
          }
        }}
        label=" Lưu game"
      ></ButtonStyle1>
    </div>
  );
};

const DialogCreateGame = () => {
  return (
    <div className="div__Dialog">
      <ButtonStyle2
        onClick={async () => {
          const result = await CustomDialog(<CustomDialogContent />, {
            title: "TẠO GAME",
            showCloseIcon: true,
          });
        }}
        label=" + TẠO GAME MỚI"
      ></ButtonStyle2>
    </div>
  );
};
export default DialogCreateGame;
