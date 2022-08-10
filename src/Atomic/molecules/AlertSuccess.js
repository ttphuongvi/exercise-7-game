import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import AtomAlert from "../atoms/AtomAlert";
import AtomSnackBar from "../atoms/AtomSnackbar";

const AlertSuccess = () => {
  const { handleCloseAlert, openAlert } = useContext(AppContext);
  return (
    <AtomSnackBar
      open={openAlert}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <AtomAlert onClose={handleCloseAlert} severity="success">
        Đăng ký tài khoản thành công!
      </AtomAlert>
    </AtomSnackBar>
  );
};

export default AlertSuccess;
