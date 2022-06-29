import { CustomDialog, useDialog } from "react-st-modal";
import { useState } from "react";
import Button from "../../atoms/Button/index";
import "./styles.css";
// import data from "./data.js";
import axios from "axios";
const CustomDialogContent = () => {
  const dialog = useDialog();
  const [value, setValue] = useState();
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
    <form className="div__Dialog">
      <div className="div__dialog-content">
        <div className="dialog__container-label-input">
          <label className="label__create-game">Ảnh:</label>
          <input
            value={image}
            className="form__input"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div className="dialog__container-label-input">
          <label className="label__create-game">Tên:</label>
          <input
            value={caption}
            className="form__input"
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
          ></input>
        </div>{" "}
        <div className="dialog__container-label-input">
          <label className="label__create-game">Ngày phát hành:</label>
          <input
            value={release}
            className="form__input"
            onChange={(e) => {
              setRelease(e.target.value);
            }}
            type="date"
          ></input>
        </div>{" "}
        <div className="dialog__container-label-input">
          <label className="label__create-game">Mô tả:</label>
          <input
            value={description}
            className="form__input"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="textarea"
          ></input>
        </div>{" "}
        <div className="dialog__container-label-input">
          <label className="label__create-game">Link game:</label>
          <input
            value={link}
            className="form__input"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            type="text"
          ></input>
        </div>
      </div>
      <Button
        class="custom-btn btn-3"
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
      >
        Lưu game
      </Button>
    </form>
  );
};

const DialogCreateGame = () => {
  return (
    <div className="div__Dialog">
      <Button
        class="snip1582  "
        onClick={async () => {
          const result = await CustomDialog(<CustomDialogContent />, {
            title: "TẠO GAME",
            showCloseIcon: true,
          });
        }}
      >
        + TẠO GAME MỚI
      </Button>
    </div>
  );
};
export default DialogCreateGame;
