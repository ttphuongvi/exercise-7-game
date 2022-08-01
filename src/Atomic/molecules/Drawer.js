import React from "react";
import AtomDrawer from "../atoms/AtomDrawer";
import AtomList from "../atoms/AtomList";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomToolBar from "../atoms/AtomToolbar";
import AtomBox from "../atoms/AtomBox";
import dataRoutes from "../../routesGame/dataRoutes";
import { useNavigate } from "react-router-dom";
import AtomDivider from "../atoms/AtomDivider";
import DialogLogin from "./DialogMaxWidth/DialogLogin";
import DialogSignUp from "./DialogMaxWidth/DialogSignUp";
import { useSelector } from "react-redux";
import AtomButton from "../atoms/AtomButton";

const drawerWidth = 240;

const Drawer = (props) => {
  const { window } = props;
  let navigate = useNavigate();

  //   const [open, setOpen] = React.useState(true);

  const [openState, setOpenState] = React.useState([
    { open: false },
    { open: false },
    { open: false },
  ]);
  // console.log(openState);
  const handleClick = (index, value) => {
    const newOpenState = [...openState];
    newOpenState[index].open = value;
    setOpenState(newOpenState);
  };

  const user = useSelector((state) => state.user.content);
  const drawer = (
    <div>
      <AtomToolBar />
      <AtomDivider />
      <AtomList component="nav">
        {dataRoutes.map((route, indexRoute) => (
          <div key={indexRoute}>
            <AtomListItemButton
              onClick={() => {
                navigate(`${route.path}`);
                handleClick(indexRoute, !openState[indexRoute].open);
              }}
              sx={(theme) => ({
                "&.Mui-selected": {
                  backgroundColor: "rgba(220, 0, 50, 0.1)",
                },
              })}
              selected={0}
            >
              <AtomListItemText
                disableTypography
                sx={(theme) => ({
                  fontFamily: theme.typography.titleGame.fontFamily,
                  fontSize: theme.typography.body2.fontSize,
                  textTransform: "uppercase",
                  paddingTop: theme.spacing(1),
                  paddingBottom: theme.spacing(1),
                  paddingLeft: theme.spacing(1),
                })}
                primary={route.name}
              ></AtomListItemText>
            </AtomListItemButton>
          </div>
        ))}
        {user && user.isLogin ? (
          <></>
        ) : (
          <>
            <AtomListItemButton
              sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
            >
              <AtomListItemText>
                {" "}
                <DialogLogin />
              </AtomListItemText>
            </AtomListItemButton>
            <AtomListItemButton
              sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
            >
              <AtomListItemText>
                <DialogSignUp />
              </AtomListItemText>
            </AtomListItemButton>
          </>
        )}
      </AtomList>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AtomBox
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <AtomDrawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </AtomDrawer>
      <AtomDrawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </AtomDrawer>
    </AtomBox>
  );
};

export default Drawer;
