import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomIconMoreVert from "../atoms/AtomIconMoreVert";
import AtomPopper from "../atoms/AtomPopper";
import AtomGrow from "../atoms/AtomGrow";
import AtomPaper from "../atoms/AtomPaper";
import AtomMenuList from "../atoms/AtomMenuList";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomClickAwayListener from "../atoms/AtomClickAwayListener";

const ButtonEditCard = () => {
  const [open, setOpen] = React.useState(false);
  const hanleClickButtonEdit = (e) => {
    // e.preventDefault();
    setOpen((prevOpen) => !prevOpen);
    e.preventDefault();
    e.stopPropagation();
  };

  const anchorRef = React.useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <AtomIconButton
        color="inherit"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        edge={"end"}
        onClick={hanleClickButtonEdit}
      >
        <AtomIconMoreVert />
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
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <AtomMenuItem onClick={handleClose}>Chỉnh sửa</AtomMenuItem>
                  <AtomMenuItem onClick={handleClose}>Xóa</AtomMenuItem>
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
