import React from "react";
import AtomDialog from "../../atoms/AtomDialog";
import AtomDialogTitle from "../../atoms/AtomDialogTitle";
import AtomDialogContent from "../../atoms/AtomDialogContent";
import AtomDialogContentText from "../../atoms/AtomDialogContentText";
import AtomDialogActions from "../../atoms/AtomDialogActions";
import AtomButton from "../../atoms/AtomButton";
import AtomIconClose from "../../atoms/AtomIconClose";

const DialogAlert = (props) => {
  return (
    <AtomDialog
      fullWidth
      maxWidth={"xs"}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AtomDialogTitle id="alert-dialog-title">{props.title}</AtomDialogTitle>
      <AtomDialogContent>
        <AtomDialogContentText id="alert-dialog-description">
          {props.content}
        </AtomDialogContentText>
      </AtomDialogContent>
      <AtomDialogActions sx={{ textTranform: "none" }}>
        <AtomButton
          variant="outlined"
          startIcon={<AtomIconClose />}
          onClick={props.onClose}
        >
          Đóng
        </AtomButton>
        <AtomButton
          variant="contained"
          color="error"
          startIcon={props.startIcon}
          onClick={props.onClick}
          autoFocus
        >
          {props.action}
        </AtomButton>
      </AtomDialogActions>
    </AtomDialog>
  );
};

export default DialogAlert;
