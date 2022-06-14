import { CustomDialog, useDialog } from "react-st-modal";
import { useState } from "react";
import Button from "./../../components/Button";
import "./styles.css";
import data from "./data.js";
function CustomDialogContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <form className="div__Dialog">
      {data.map((value, key) => (
        <label key={key}>
          {value.label}:<input type={value.type}></input>
        </label>
      ))}
      {/* <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Tên:
        <input
          value="Submit"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </label> */}
      <label>
        Ngày phát hành:
        <input
          value="Submit"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </label>

      <Button
        class="custom-btn btn-7 set-width-savegame"
        title=" Lưu Game"
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value);
        }}
      ></Button>
    </form>
  );
}

const Dialog = () => {
  return (
    <div className="div__Dialog">
      <Button
        class="set-width-creategame custom-btn btn-7 "
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
