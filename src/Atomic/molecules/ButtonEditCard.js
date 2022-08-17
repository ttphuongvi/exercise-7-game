import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomIconMoreVert from "../atoms/AtomIconMoreVert";
import AtomPopper from "../atoms/AtomPopper";
import AtomGrow from "../atoms/AtomGrow";
import AtomPaper from "../atoms/AtomPaper";
import AtomMenuList from "../atoms/AtomMenuList";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomClickAwayListener from "../atoms/AtomClickAwayListener";
import DialogAlert from "./DialogAlert";
import AtomIconDeleteOutlined from "../atoms/AtomIconDeleteOutlined";

const ButtonEditCard = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const hanleClickButtonEdit = (e) => {
    e.stopPropagation();
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const anchorRef = React.useRef(null);

  const handleCloseMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      setOpenMenu(false);
    } else if (event.key === "Escape") {
      setOpenMenu(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  //even DialogAlert

  const [openDialog, setOpenDialog] = React.useState(false);

  const handlekOpenDialog = (e) => {
    e.stopPropagation();

    setOpenDialog(true);
  };

  const handleCloseDialog = (e) => {
    e.stopPropagation();
    setOpenDialog(false);
  };

  //remove item game

  const handleRemove = (e) => {
    e.stopPropagation();

    // dispatch({
    //   type: REMOVE_GAME,
    //   content: removeData,
    // });
  };

  return (
    <>
      <AtomIconButton
        color="inherit"
        ref={anchorRef}
        id="composition-button"
        aria-controls={openMenu ? "composition-menu" : undefined}
        aria-expanded={openMenu ? "true" : undefined}
        aria-haspopup="true"
        edge={"end"}
        onClick={hanleClickButtonEdit}
      >
        <AtomIconMoreVert />
      </AtomIconButton>
      <AtomPopper
        open={openMenu}
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
              <AtomClickAwayListener onClickAway={handleCloseMenu}>
                <AtomMenuList
                  autoFocusItem={openMenu}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <AtomMenuItem onClick={handleCloseMenu}>
                    Chỉnh sửa
                  </AtomMenuItem>
                  <AtomMenuItem onClick={handlekOpenDialog}>Xóa</AtomMenuItem>
                  <DialogAlert
                    open={openDialog}
                    onClose={handleCloseDialog}
                    onClick={handleRemove}
                    startIcon={<AtomIconDeleteOutlined />}
                    title="Xác nhận xóa game"
                    content="Bạn có chắc chắn muốn xóa game?"
                    action="Xóa"
                  />
                </AtomMenuList>
              </AtomClickAwayListener>
            </AtomPaper>
          </AtomGrow>
        )}
      </AtomPopper>
    </>
  );
};

export default ButtonEditCard;
