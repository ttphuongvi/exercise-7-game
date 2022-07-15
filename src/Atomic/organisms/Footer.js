import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import ImageLogo from "../molecules/ImageLogo";
import logo from "../../img/hahalolo-logo-1.png";
import AtomIconLocation from "../atoms/AtomIconLocation";
import { makeStyles } from "@material-ui/core/styles";
import AtomTypography from "../atoms/AtomTypography";
import DivFlexRow from "../molecules/DivFlexRow";
import AtomIconPhone from "../atoms/AtomIconPhone";
import AtomIconEmail from "../atoms/AtomIconEmail";
import AtomIconYoutube from "../atoms/AtomIconYoutube";
import AtomIconFacebook from "../atoms/AtomIconFacebook";
import InfoFooter from "../molecules/InfoFooter";
import AtomLink from "../atoms/AtomLink";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.status.black,
    alignItems: "center",
    padding: theme.spacing(2),
    color: theme.status.white,
    fontFamily: "Oswald",
  },
  item: {
    textAlign: "center",
    margin: "0 auto",
  },
  containerLink: {
    justifyContent: "center",
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "#fff",
  },
  typography: {
    textTransform: "uppercase",
  },
  margin: {
    margin: theme.spacing(3),
    alignItems: "center",
  },
  typoLinkContact: {
    fontFamily: "Oswald",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AtomGrid className={classes.container} container>
      <AtomGrid className={classes.item} item xs={4}>
        <ImageLogo src={logo}></ImageLogo>
      </AtomGrid>
      <AtomGrid container xs={8}>
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
          <DivFlexRow className={classes.margin}>
            <AtomTypography className={classes.typoLinkContact}>
              Kết nối:{" "}
            </AtomTypography>
            <DivFlexRow className={classes.containerLink}>
              <AtomLink
                className={classes.link}
                href="https://www.facebook.com/HahaloloVN/"
                target={"_blank"}
              >
                <AtomIconFacebook />
              </AtomLink>
              <AtomLink
                className={classes.link}
                href="https://www.youtube.com/channel/UCatAZ8yjCYTevBWfexZ2qqA"
                target={"_blank"}
              >
                <AtomIconYoutube />
              </AtomLink>
            </DivFlexRow>
          </DivFlexRow>
        </AtomGrid>
      </AtomGrid>
    </AtomGrid>
  );
};

export default Footer;
