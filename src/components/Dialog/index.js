import { CustomDialog, useDialog } from "react-st-modal";
import { useState } from "react";
import Button from "./../../components/Button";
function CustomDialogContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        class="custom-btn btn-7 set-width-savegame"
        title=" Lưu Game"
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value);
        }}
      ></Button>
    </div>
  );
}

const Dialog = () => {
  return (
    <div>
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
