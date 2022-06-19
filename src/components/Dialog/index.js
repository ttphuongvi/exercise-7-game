import { CustomDialog, useDialog } from "react-st-modal";
import { useState } from "react";
import Button from "./../../components/Button";
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
        <div className="div__container-label-input">
          <label className="label__content">
            Ảnh:
            <input
              value={image}
              className="form__input"
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
            ></input>
          </label>
        </div>
        <div className="div__container-label-input">
          <label className="label__content">
            Tên:
            <input
              value={caption}
              className="form__input"
              onChange={(e) => {
                setCaption(e.target.value);
              }}
              type="text"
            ></input>
          </label>
        </div>{" "}
        <div className="div__container-label-input">
          <label className="label__content">
            Ngày phát hành:
            <input
              value={release}
              className="form__input"
              onChange={(e) => {
                setRelease(e.target.value);
              }}
              type="date"
            ></input>
          </label>
        </div>{" "}
        <div className="div__container-label-input">
          <label className="label__content">
            Mô tả:
            <input
              value={description}
              className="form__input"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="textarea"
            ></input>
          </label>
        </div>{" "}
        <div className="div__container-label-input">
          <label className="label__content">
            Link game:
            <input
              value={link}
              className="form__input"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              type="text"
            ></input>
          </label>
        </div>
      </div>
      <Button
        class="custom-btn btn-3"
        title=" Lưu Game"
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
      ></Button>
    </form>
  );
};

const Dialog = () => {
  return (
    <div className="div__Dialog">
      <Button
        class="snip1582  "
        title="+ TẠO GAME MỚI"
        onClick={async () => {
          const result = await CustomDialog(<CustomDialogContent />, {
            title: "TẠO GAME",
            showCloseIcon: true,
          });
        }}
      ></Button>
    </div>
  );
};
export default Dialog;
