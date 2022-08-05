import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomBox from "../atoms/AtomBox";
import AtomBreadcrumbs from "../atoms/AtomBreadcrumbs";
import AtomNavigateNextIcon from "../atoms/AtomNavigateNextIcon";

const TitlePage = (props) => {
  return (
    <AtomBreadcrumbs
      separator={<AtomNavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <AtomTypography variant="titleGame">
        <AtomBox
          component={AtomRouteLink}
          sx={(theme) => ({
            color: theme.palette.primary.main,
            textDecoration: "none",
          })}
          to="/"
        >
          HAHALOLO
        </AtomBox>
      </AtomTypography>
      <AtomBox
        component={AtomTypography}
        sx={(theme) => ({ color: theme.palette.text.primary })}
        variant="titleGame"
      >
        {props.title}
      </AtomBox>
    </AtomBreadcrumbs>
  );
};
export default TitlePage;
