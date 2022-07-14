import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

const TypographyStyles = styled(AtomTypography)({
  fontFamily: "Oswald",
  fontSize: "18px",
  borderBottom: "1px solid #23313c",
  padding: "7px 0px 10px 25px",
  textTransform: "uppercase",
  background:
    "url('http://skywarriorthemes.com/orizon/blue/images/hbullet.png')left top no-repeat",
  "& span": {
    color: "#2ac0ff",
    float: "left",
  },
});

const HeaderStyles = styled("div")({
  padding: "0px 0px 0px 0px",
  height: "55px",
  marginBottom: "10px",
  float: "left",
  top: 0,
});

const TitleCategory = (props) => {
  return (
    <HeaderStyles>
      <TypographyStyles variant="h5">
        <AtomBox fontWeight={500} m={1}>
          {" "}
          <Link to="/">
            <span>HAHALOLO // </span>
          </Link>
          {props.title}
        </AtomBox>
      </TypographyStyles>
    </HeaderStyles>
  );
};
export default TitleCategory;
