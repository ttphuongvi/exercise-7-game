import { alpha } from "@mui/material/styles";
import React from "react";
import AtomRouteLink from "../atoms/AtomRouteLink";
import { menuAppBar } from "../../routesGame/dataRoutes";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import { useNavigate } from "react-router-dom";

const MenuTab = () => {
  let navigate = useNavigate();

  return (
    <AtomGrid sx={{ display: { xs: "none", md: "none", lg: "flex" } }}>
      {menuAppBar.map((route, index) => {
        return (
          <AtomButton
            // color="inherit"
            sx={(theme) => ({
              fontFamily: theme.typography.titleGame.fontFamily,
              // ở đây em không dùng thuộc tính color của button là vì em muốn khi ở bình thường,
              // màu menu là màu mặc định của text, mà thuộc tính clor của API button của mui
              // không có dạng text mà chỉ có các kiểu styles như primary, secondary, .. nên em color ở đây
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
              },
              "&.active": {
                color: theme.palette.primary.main,
              },
            })}
            onClick={() => {
              navigate(`${route.path}`);
            }}
            component={AtomRouteLink}
            key={index}
            to={route.path}
          >
            {route.name}
          </AtomButton>
        );
      })}
    </AtomGrid>
  );
};

export default MenuTab;
