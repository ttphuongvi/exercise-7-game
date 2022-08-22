import React from "react";
import AtomDialog from "./../../atoms/AtomDialog";
import AtomDialogTitle from "./../../atoms/AtomDialogTitle";
import AtomDialogContent from "./../../atoms/AtomDialogContent";
import AtomDialogAtions from "./../../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import HorizontalStripeButton from "./../../molecules/ButtonHorizontalStripe";
import AtomStack from "./../../atoms/AtomStack";
import AtomDivider from "./../../atoms/AtomDivider";
import AtomBox from "../../atoms/AtomBox";
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
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitleStyles id="form-dialog-title">
          <AtomStack
            edge="end"
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            {props.title}
            <AtomIconButton onClick={props.handleClose} size="large">
              <AtomIconClose />
            </AtomIconButton>
          </AtomStack>
        </DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>
            <AtomBox
              component="img"
              alt=""
              src="/images/logo_hahalolo.png"
              sx={{ width: "40%" }}
            ></AtomBox>

            {props.content}
            <AtomDialogAtions>
              <HorizontalStripeButton
                variant="contained"
                color="primary"
                onClick={props.onClick}
                label={props.action}
              ></HorizontalStripeButton>
            </AtomDialogAtions>
          </AtomStack>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};

export default DialogMaxWidth;
