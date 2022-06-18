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
      <div className="div__dialog-content">
        {data.map((value, key) => (
          <div className="div__container-label-input">
            <label className="label__content" key={key}>
              {value.label}:
              <input
                className="form__input"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type={value.type}
              ></input>
            </label>
          </div>
        ))}

        <Button
          class="custom-btn btn-3"
          title=" Lưu Game"
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(value);
          }}
        ></Button>
      </div>
    </form>
  );
}

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
