import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import ImageLogo from "../molecules/ImageLogo";
import AtomIconLocation from "../atoms/AtomIconLocation";
import { makeStyles } from "@mui/styles";
import AtomTypography from "../atoms/AtomTypography";
import AtomIconPhone from "../atoms/AtomIconPhone";
import AtomIconEmail from "../atoms/AtomIconEmail";
import AtomIconYoutube from "../atoms/AtomIconYoutube";
import AtomIconFacebook from "../atoms/AtomIconFacebook";
import InfoFooter from "../molecules/InfoFooter";
import AtomLink from "../atoms/AtomLink";
import AtomContainer from "../atoms/AtomContainer";
import { styled } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     // backgroundColor: theme.palette.background.paper,
//     alignItems: "center",
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//     fontFamily: "Oswald",
//     boxShadow: theme.shadows[3],
//   },
//   item: {
//     textAlign: "center",
//     margin: "0 auto",
//   },
//   containerLink: {
//     justifyContent: "center",
//   },
//   link: {
//     marginRight: theme.spacing(1),
//     color: theme.palette.text.secondary,
//   },
//   typography: {
//     textTransform: "uppercase",
//   },
//   margin: {
//     margin: theme.spacing(3),
//     alignItems: "center",
//   },
//   typoLinkContact: {
//     fontFamily: "Oswald",
//   },
// }));

const IconFaceBook = styled(AtomIconFacebook)({
  color: blue[500],
});

const IconYoutube = styled(AtomIconYoutube)({
  color: red[500],
});

const LinkStyles = styled(AtomLink)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const TypoContact = styled(AtomTypography)(({ theme }) => ({
  fontFamily: theme.typography.subtitle1.fontFamily,
}));

const GridInfoFooter = styled(AtomGrid)(({ theme }) => ({
  margin: theme.spacing(3),
}));

const GridContainerStyles = styled(AtomGrid)(
  ({ theme }) => ` 
  margin-top: ${theme.spacing(3)} ;
padding: ${theme.spacing(2)};
color: ${theme.palette.text.primary};
font-family: ${theme.typography.subtitle1};
box-shadow: ${theme.shadows[3]};
`
);
const Footer = () => {
  // const classes = useStyles();
  return (
    <GridContainerStyles alignItems="center" container>
      <AtomGrid container justifyContent={"center"} xs={4}>
        <ImageLogo src="/images/logo_hahalolo.png"></ImageLogo>
      </AtomGrid>
      <AtomGrid container xs={8} alignContent="center" spacing={3}>
        <AtomGrid item xs={6}>
          <InfoFooter
            icon={<AtomIconLocation />}
            info="400/8B Ung Văn Khiêm, P.25, Q.Bình Thạnh, TP.HCM"
          ></InfoFooter>
          <InfoFooter
            icon={<AtomIconPhone />}
            info="(+84) 911 432 933"
          ></InfoFooter>
        </AtomGrid>
        <AtomGrid item xs={6}>
          <InfoFooter
            icon={<AtomIconEmail />}
            info="Cskh@hahalolo.com"
          ></InfoFooter>
          <InfoFooter
            icon={<TypoContact>Kết nối: </TypoContact>}
            info={
              <AtomGrid container justifyContent={"center"}>
                <LinkStyles
                  href="https://www.facebook.com/HahaloloVN/"
                  target={"_blank"}
                >
                  <IconFaceBook />
                </LinkStyles>
                <LinkStyles
                  href="https://www.youtube.com/channel/UCatAZ8yjCYTevBWfexZ2qqA"
                  target={"_blank"}
                >
                  <IconYoutube />
                </LinkStyles>
              </AtomGrid>
            }
          ></InfoFooter>
        </AtomGrid>
      </AtomGrid>
    </GridContainerStyles>
  );
};

export default Footer;
