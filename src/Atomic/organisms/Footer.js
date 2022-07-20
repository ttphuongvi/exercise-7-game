import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import ImageLogo from "../molecules/ImageLogo";
import logo from "../../img/hahalolo-logo-1.png";
import AtomIconLocation from "../atoms/AtomIconLocation";
import { makeStyles } from "@mui/styles";
import AtomTypography from "../atoms/AtomTypography";
import AtomIconPhone from "../atoms/AtomIconPhone";
import AtomIconEmail from "../atoms/AtomIconEmail";
import AtomIconYoutube from "../atoms/AtomIconYoutube";
import AtomIconFacebook from "../atoms/AtomIconFacebook";
import InfoFooter from "../molecules/InfoFooter";
import AtomLink from "../atoms/AtomLink";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontFamily: "Oswald",
    boxShadow: theme.shadows[3],
  },
  item: {
    textAlign: "center",
    margin: "0 auto",
  },
  containerLink: {
    justifyContent: "center",
  },
  link: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
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
          <InfoFooter
            icon={
              <AtomTypography className={classes.typoLinkContact}>
                Kết nối:{" "}
              </AtomTypography>
            }
            info={
              <AtomGrid container className={classes.containerLink}>
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
              </AtomGrid>
            }
          ></InfoFooter>
        </AtomGrid>
      </AtomGrid>
    </AtomGrid>
  );
};

export default Footer;
