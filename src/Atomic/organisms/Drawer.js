import React from "react";
import AtomDrawer from "../atoms/AtomDrawer";
import Divider from "../molecules/Divider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomToolBar from "../atoms/AtomToolbar";
import AtomBox from "../atoms/AtomBox";
import PropTypes from "prop-types";
import dataRoutes from "../../routesGame/dataRoutes";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Drawer = (props, { handleDrawerToggle, mobileOpen }) => {
  const { window } = props;
  let navigate = useNavigate();
  const drawer = (
    <div>
      <AtomToolBar />
      <Divider />
      <AtomList>
        {dataRoutes.map((route, index) => (
          <AtomListItem key={index} disablePadding>
            <AtomListItemButton
              onClick={() => {
                navigate(`${route.path}`);
              }}
            >
              <AtomListItemText primary={route.name}></AtomListItemText>
            </AtomListItemButton>
          </AtomListItem>
        ))}
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
        open={mobileOpen}
        onClose={handleDrawerToggle}
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

Drawer.propTypes = {
  handleDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
};

export default Drawer;
