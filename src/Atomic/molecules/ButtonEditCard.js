import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomIconMoreVert from "../atoms/AtomIconMoreVert";
import AtomPopper from "../atoms/AtomPopper";
import AtomGrow from "../atoms/AtomGrow";
import AtomPaper from "../atoms/AtomPaper";
import AtomMenuList from "../atoms/AtomMenuList";
import AtomClickAwayListener from "../atoms/AtomClickAwayListener";
import DialogEditGame from "./DialogMaxWidth/DialogEditGame";
import DialogDelete from "./DialogAlert/DialogDelete";

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
                  <DialogEditGame
                    image={props.image}
                    caption={props.caption}
                    release={props.release}
                    link={props.link}
                    description={props.description}
                    id={props.id}
                  />
                  <DialogDelete id={props.id} />
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
