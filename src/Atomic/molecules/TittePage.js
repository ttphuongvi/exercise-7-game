import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import { styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AtomRouteLink from "../atoms/AtomRouteLink";

const LinkStyles = styled(AtomRouteLink)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  text-decoration: none;
 
`
);

const TypographyStyles = styled(AtomTypography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.titleGame.fontFamily,
  fontSize: theme.typography.titleGame.fontSize,
}));

const TitlePage = (props) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <AtomTypography variant="titleGame">
        <LinkStyles to="/">HAHALOLO</LinkStyles>
      </AtomTypography>
      <TypographyStyles>{props.title}</TypographyStyles>
    </Breadcrumbs>
  );
};
export default TitlePage;
