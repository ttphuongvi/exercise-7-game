import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import { styled } from "@mui/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AtomRouteLink from "../atoms/AtomRouteLink";
import { Divider } from "@mui/material";

const LinkStyles = styled(AtomRouteLink)({
  // borderBottom: "1px solid #23313c",
  padding: "7px 0px 10px 0px",
  textTransform: "uppercase",
  color: "#2ac0ff",
  textDecoration: "none",
});

const HeaderStyles = styled("div")({
  padding: "0px 0px 0px 0px",
  height: "55px",
  marginBottom: "10px",
  float: "left",
  top: 0,
});

const TitlePage = (props) => {
  return (
    <HeaderStyles>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {/* <HeaderStyles>
        <TypographyStyles variant="h5">
          <AtomBox fontWeight={500} m={1}>
            {" "} */}
        <AtomTypography variant="subtitle1">
          <LinkStyles to="/">HAHALOLO</LinkStyles>
        </AtomTypography>

        <AtomTypography variant="subtitle1">{props.title}</AtomTypography>
        {/* </AtomBox>
        </TypographyStyles>
      </HeaderStyles> */}
      </Breadcrumbs>
      <Divider light />
    </HeaderStyles>
  );
};
export default TitlePage;
