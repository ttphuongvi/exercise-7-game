import React from "react";
import AtomDialog from "./../../atoms/AtomDialog";
import AtomDialogTitle from "./../../atoms/AtomDialogTitle";
import AtomDialogContent from "./../../atoms/AtomDialogContent";
import AtomDialogAtions from "./../../atoms/AtomDialogActions";
import { styled } from "@mui/material/styles";
import ButtonLogin from "./../ButtonLogin";
import HorizontalStripeButton from "./../../molecules/HorizontalStripeButton";
import AtomStack from "./../../atoms/AtomStack";
import AtomDivider from "./../../atoms/AtomDivider";
import PropTypes from "prop-types";
import AtomAvatar from "../../atoms/AtomAvatar";

const DialogTitleStyles = styled(AtomDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
}));

const DialogMaxWidth = ({ actionName, content, onClick }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonLogin onClick={handleClickOpen}>{actionName}</ButtonLogin>
      <AtomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"xs"}
        fullWidth={true}
      >
        <DialogTitleStyles id="form-dialog-title">
          {actionName}
        </DialogTitleStyles>
        <AtomDivider />
        <AtomDialogContent>
          <AtomStack alignItems={"center"}>
            <AtomAvatar src="/images/logo_none_text.png"></AtomAvatar>
            {content}
            <AtomDialogAtions>
              <HorizontalStripeButton
                variant="contained"
                color="primary"
                onClick={onClick}
                label={actionName}
              ></HorizontalStripeButton>
            </AtomDialogAtions>
          </AtomStack>
        </AtomDialogContent>
      </AtomDialog>
    </div>
  );
};

DialogMaxWidth.prototype = {
  content: PropTypes.node,
  onClick: PropTypes.func,
  actionName: PropTypes.string,
};
export default DialogMaxWidth;
