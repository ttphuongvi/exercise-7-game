import React from "react";
import DialogAlert from ".";
import AtomIconDeleteOutlined from "../../atoms/AtomIconDeleteOutlined";
import AtomListItemIcon from "../../atoms/AtomListItemIcon";
import AtomMenuItem from "../../atoms/AtomMenuItem";

const DialogDelete = (props) => {
  const [openDialogAlert, setOpenDialogAlert] = React.useState(false);

  const handlekOpenDialogAlert = (e) => {
    e.stopPropagation();
    setOpenDialogAlert(true);
  };

  const handleCloseDialogAlert = (e) => {
    e.stopPropagation();
    setOpenDialogAlert(false);
  };
  return (
    <>
      <AtomMenuItem onClick={handlekOpenDialogAlert}>
        {" "}
        <AtomListItemIcon>
          <AtomIconDeleteOutlined fontSize="small" />
        </AtomListItemIcon>
        Xóa
      </AtomMenuItem>
      <DialogAlert
        open={openDialogAlert}
        onClose={handleCloseDialogAlert}
        onClick={props.handleRemove}
        startIcon={<AtomIconDeleteOutlined />}
        title="Xác nhận xóa game"
        content="Bạn có chắc chắn muốn xóa game?"
        action="Xóa"
      />
    </>
  );
};

export default DialogDelete;
