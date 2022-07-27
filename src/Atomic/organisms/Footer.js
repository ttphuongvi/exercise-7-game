import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import ImageLogo from "../molecules/ImageLogo";
import AtomIconLocation from "../atoms/AtomIconLocation";
import AtomTypography from "../atoms/AtomTypography";
import AtomIconPhone from "../atoms/AtomIconPhone";
import AtomIconEmail from "../atoms/AtomIconEmail";
import AtomIconYoutube from "../atoms/AtomIconYoutube";
import AtomIconFacebook from "../atoms/AtomIconFacebook";
import InfoFooter from "../molecules/InfoFooter";
import AtomLink from "../atoms/AtomLink";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import AtomStack from "../atoms/AtomStack";

const IconFaceBook = styled(AtomIconFacebook)({
  color: blue[500],
});

const IconYoutube = styled(AtomIconYoutube)({
  color: red[500],
});

const TypoContact = styled(AtomTypography)(({ theme }) => ({
  fontFamily: theme.typography.titleGame.fontFamily,
}));

const GridContainerStyles = styled(AtomGrid)(
  ({ theme }) => ` 
  margin-top: ${theme.spacing(3)} ;
  padding: ${theme.spacing(2)};
  color: ${theme.palette.text.primary};
  font-family: ${theme.typography.titleGame};
  box-shadow: ${theme.shadows[3]};
  background-color: ${theme.palette.background.paper};

`
);
const Footer = () => {
  return (
    <GridContainerStyles alignItems="center" container>
      <AtomGrid item xl={4} lg={4} xs={12}>
        <AtomGrid container justifyContent={"center"}>
          <ImageLogo src="/images/logo_hahalolo.png"></ImageLogo>
        </AtomGrid>
      </AtomGrid>
      <AtomGrid item xl={8} lg={8} xs={12}>
        <AtomGrid container>
          <AtomGrid item xl={7} lg={7} xs={12}>
            <InfoFooter
              left={<AtomIconLocation />}
              right={
                <TypoContact>
                  400/8B Ung Văn Khiêm, P.25, Q.Bình Thạnh, TP.HCM
                </TypoContact>
              }
            ></InfoFooter>
            <InfoFooter
              left={<AtomIconPhone />}
              right={<TypoContact>(+84) 911 432 933</TypoContact>}
            ></InfoFooter>
          </AtomGrid>
          <AtomGrid item xl={5}>
            <InfoFooter
              left={<AtomIconEmail />}
              right={<TypoContact>Cskh@hahalolo.com</TypoContact>}
            ></InfoFooter>
            <InfoFooter
              left={<TypoContact>Kết nối: </TypoContact>}
              right={
                <AtomStack spacing={1} direction={"row"}>
                  {" "}
                  <AtomLink
                    href="https://www.facebook.com/HahaloloVN/"
                    target={"_blank"}
                  >
                    <IconFaceBook />
                  </AtomLink>
                  <AtomLink
                    href="https://www.youtube.com/channel/UCatAZ8yjCYTevBWfexZ2qqA"
                    target={"_blank"}
                  >
                    <IconYoutube />
                  </AtomLink>
                </AtomStack>
              }
            ></InfoFooter>
          </AtomGrid>
        </AtomGrid>
      </AtomGrid>
    </GridContainerStyles>
  );
};

export default Footer;
