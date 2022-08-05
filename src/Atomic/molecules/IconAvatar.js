import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/const";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBox from "../atoms/AtomBox";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";

const IconAvatar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    handleCloseUserMenu();
  };

  return (
    <AtomBox>
      <AtomIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <AtomAvatar className="avatar--margin" src="/broken-image.jpg" />
      </AtomIconButton>
      <AtomMenu
        id="menu-appbar"
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <AtomMenuItem onClick={handleLogout}>ĐĂNG XUẤT</AtomMenuItem>
      </AtomMenu>
    </AtomBox>
  );
};

export default IconAvatar;
