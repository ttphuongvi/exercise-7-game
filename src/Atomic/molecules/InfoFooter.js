import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomGrid from "../atoms/AtomGrid";
import { styled } from "@mui/material/styles";

const TypographyInfo = styled(AtomTypography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
}));

const GridInfoFooter = styled(AtomGrid)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const InfoFooter = (props) => {
  return (
    <GridInfoFooter alignItems="flex-start" container spacing={1}>
      <AtomGrid item sx={2}>
        {props.icon}
      </AtomGrid>
      <AtomGrid item sx={10}>
        <TypographyInfo>{props.info}</TypographyInfo>
      </AtomGrid>
    </GridInfoFooter>
  );
};

export default InfoFooter;
