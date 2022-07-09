import React from "react";
import AtomGrid from "../../atoms/AtomGrid";
import ImageLogo from "../../templates/TemplateTag/ImageLogo";
import logo from "../../../img/hahalolo-logo-1.png";
import AtomIconLocation from "../../atoms/AtomIconLocation";
import { makeStyles } from "@material-ui/core/styles";
import AtomTypography from "../../atoms/AtomTypography";
import DivFlexRow from "../../templates/TemplateTag/DivFlexRow";
import AtomIconPhone from "../../atoms/AtomIconPhone";
import AtomIconEmail from "../../atoms/AtomIconEmail";
import AtomIconYoutube from "../../atoms/AtomIconYoutube";
import AtomIconFacebook from "../../atoms/AtomIconFacebook";
import InfoFooter from "../../molecules/InfoFooter";
import AtomLink from "../../atoms/AtomLink";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#20232a",
    alignItems: "center",
    padding: theme.spacing(2),
    color: "#fff",
  },
  item: {
    textAlign: "center",
    margin: "0 auto",
  },
  containerLink: {
    justifyContent: "center",
  },
  link: {
    margin: theme.spacing(1),
    color: "#fff",
  },
  typography: {
    fontFamily: "Oswald",
    textTransform: "uppercase",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AtomGrid className={classes.container} container>
      <AtomGrid className={classes.item} item xs={4}>
        <ImageLogo src={logo}></ImageLogo>
      </AtomGrid>
      <AtomGrid direction="column" item xs={4}>
        <InfoFooter
          icon={<AtomIconLocation />}
          info="400/8B Ung Văn Khiêm, P.25, Q.Bình Thạnh, TP.HCM"
        ></InfoFooter>
        <InfoFooter
          icon={<AtomIconPhone />}
          info="(+84) 911 432 933"
        ></InfoFooter>
        <InfoFooter
          icon={<AtomIconEmail />}
          info="Cskh@hahalolo.com"
        ></InfoFooter>
      </AtomGrid>
      <AtomGrid className={classes.item} item xs={4}>
        <AtomTypography className={classes.typography}>
          Thông tin liên hệ
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
      </AtomGrid>
    </AtomGrid>
  );
};

export default Footer;
