import React from "react";
import AtomDrawer from "../atoms/AtomDrawer";
import Divider from "../molecules/Divider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomToolBar from "../atoms/AtomToolbar";
import AtomBox from "../atoms/AtomBox";
import dataRoutes from "../../routesGame/dataRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import AtomCollapse from "../atoms/AtomCollapse";
import AtomExpandLess from "../atoms/AtomExpandLess";
import AtomExpandMore from "../atoms/AtomExpandMore";
import AtomLink from "../atoms/AtomLink";

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
  const location = useLocation();

  const drawer = (
    <div>
      <AtomToolBar />
      <Divider />
      <AtomList component="nav">
        {dataRoutes.map((route, indexRoute) => (
          <div key={indexRoute}>
            <AtomListItemButton
              onClick={() => {
                navigate(`${route.path}`);
                handleClick(indexRoute, !openState[indexRoute].open);
              }}
            >
              <AtomListItemText primary={route.name}></AtomListItemText>
              {openState[indexRoute].open ? (
                <AtomExpandLess />
              ) : (
                <AtomExpandMore />
              )}
            </AtomListItemButton>
            <AtomCollapse
              in={openState[indexRoute].open}
              timeout="auto"
              unmountOnExit
            >
              <AtomList disablePadding>
                {route.hashLink.map((hash, indexHash) => {
                  // console.log(location.hash === hash.href);
                  return (
                    <AtomListItem
                      key={indexHash}
                      sx={{ pl: 4 }}
                      selected={location.hash === hash.href}
                    >
                      <AtomLink
                        color={
                          location.hash === hash.href ? "primary" : "secondary"
                        }
                        underline="none"
                        sx={(theme) => ({
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          // color: theme.palette.text.primary,
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        })}
                        href={hash.href}
                      >
                        {hash.name}
                        {/* <AtomLink href={hash.href}>{hash.name}</AtomLink> */}
                      </AtomLink>
                    </AtomListItem>
                  );
                })}
              </AtomList>
            </AtomCollapse>
          </div>
        ))}
        {/* {dataRoutes[(0, 1, 2)].haskLink.map((route, index) => (
          <AtomCollapse in={open} timeout="auto" unmountOnExit>
            <AtomList disablePadding>
              <AtomListItem sx={{ pl: 4 }}>
                <AtomLink href={route.href}>{route.name}</AtomLink>
              </AtomListItem>
            </AtomList>
          </AtomCollapse>
        ))} */}
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
