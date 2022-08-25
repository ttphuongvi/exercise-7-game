import React from "react";
import AtomDialog from "./../../atoms/AtomDialog";
import AtomDialogTitle from "./../../atoms/AtomDialogTitle";
import AtomDialogContent from "./../../atoms/AtomDialogContent";
import { styled } from "@mui/material/styles";
import AtomStack from "./../../atoms/AtomStack";
import AtomDivider from "./../../atoms/AtomDivider";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomIconClose from "../../atoms/AtomIconClose";

const DialogTitleStyles = styled(AtomDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.titleGame.fontFamily,
}));

const DialogMaxWidth = (props) => {
  return (
    <div>
      {/* <ButtonMenu onClick={handleClickOpen}>{actionName}</ButtonMenu> */}
      <AtomDialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitleStyles id="form-dialog-title">
          <AtomStack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            {props.title}
            <AtomIconButton edge="end" onClick={props.onClose} size="large">
              <AtomIconClose />
            </AtomIconButton>
          </AtomStack>
        </DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>{props.content}</AtomStack>
        </AtomDialogContent>
        {props.action}
      </AtomDialog>
    </div>
  );
};

export default DialogMaxWidth;
