import React from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/const";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBox from "../atoms/AtomBox";
import AtomClickAwayListener from "../atoms/AtomClickAwayListener";
import AtomGrow from "../atoms/AtomGrow";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomMenuList from "../atoms/AtomMenuList";
import AtomPaper from "../atoms/AtomPaper";
import AtomPopper from "../atoms/AtomPopper";

const IconAvatar = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    handleClose();
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const anchorRef = React.useRef(null);

  return (
    <AtomBox>
      <AtomIconButton
        size="large"
        ref={anchorRef}
        // size="medium"
        aria-label="account of current user"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ p: 0 }}
      >
        <AtomAvatar className="avatar--margin" src="/broken-image.jpg" />
      </AtomIconButton>
      <AtomPopper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <AtomGrow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <AtomPaper>
              <AtomClickAwayListener onClickAway={handleClose}>
                <AtomMenuList
                  elevation={4}
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <AtomMenuItem onClick={handleLogout}>Đăng xuất</AtomMenuItem>
                </AtomMenuList>
              </AtomClickAwayListener>
            </AtomPaper>
          </AtomGrow>
        )}
      </AtomPopper>
    </AtomBox>
  );
};

export default IconAvatar;
