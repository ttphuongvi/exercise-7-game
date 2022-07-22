import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import AtomGrid from "../atoms/AtomGrid";
import { styled } from "@mui/material/styles";

const TypographyInfo = styled(AtomTypography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
}));

const InfoFooter = (props) => {
  return (
    <AtomGrid m={2} alignItems="flex-start" container spacing={1}>
      <AtomGrid item>{props.icon}</AtomGrid>
      <AtomGrid item>
        <TypographyInfo>{props.info}</TypographyInfo>
      </AtomGrid>
    </AtomGrid>
  );
};

export default InfoFooter;
