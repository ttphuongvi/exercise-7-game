import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomBox from "../atoms/AtomBox";
import AtomBreadcrumbs from "../atoms/AtomBreadcrumbs";
import AtomNavigateNextIcon from "../atoms/AtomNavigateNextIcon";
import { styled } from "@mui/material/styles";

const RouteLinkStyles = styled(AtomBox)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
}));

const TitlePage = (props) => {
  return (
    <AtomBreadcrumbs
      separator={<AtomNavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <AtomTypography variant="titleGame">
        <RouteLinkStyles component={AtomRouteLink} to="/">
          HAHALOLO
        </RouteLinkStyles>
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
