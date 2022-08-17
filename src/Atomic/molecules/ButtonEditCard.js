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
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomIconEditOutlined from "../atoms/AtomIconEditOutlined";
import DialogEditGame from "./DialogMaxWidth/DialogEditGame";

const ButtonEditCard = (props) => {
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

  const [openDialogAlert, setOpenDialogAlert] = React.useState(false);

  const handlekOpenDialogAlert = (e) => {
    e.stopPropagation();
    setOpenDialogAlert(true);
  };

  const handleCloseDialogAlert = (e) => {
    e.stopPropagation();
    setOpenDialogAlert(false);
  };

  //remove item game

  const handleRemove = (e) => {
    e.stopPropagation();

    // dispatch({
    //   type: REMOVE_GAME,
    //   content: removeData,
    // });
  };

  //even DialogEditGame
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);

  const handleClickOpenDialogEdit = (e) => {
    e.stopPropagation();
    setOpenDialogEdit(true);
  };

  const handleCloseDialogEdit = (e) => {
    e.stopPropagation();
    setOpenDialogEdit(false);
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
                  <AtomMenuItem onClick={handleClickOpenDialogEdit}>
                    <AtomListItemIcon>
                      <AtomIconEditOutlined fontSize="small" />
                    </AtomListItemIcon>
                    Chỉnh sửa
                  </AtomMenuItem>
                  <DialogEditGame
                    open={openDialogEdit}
                    hanleClose={handleCloseDialogEdit}
                    image={props.image}
                    caption={props.caption}
                    release={props.release}
                    link={props.link}
                    description={props.description}
                  />
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
