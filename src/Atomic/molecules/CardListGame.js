import { darken, styled } from "@mui/material/styles";
import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomCard from "../atoms/AtomCard";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomStack from "../atoms/AtomStack";
import DescriptionNewGame from "./DescriptionGame";
import DialogPlayGame from "./DialogFullWidth/DialogPlayGame";
import CaptionGame from "./CaptionGame";
import AtomTypography from "../atoms/AtomTypography";
import ButtonEditCard from "./ButtonEditCard";

const ItemCard = styled(AtomCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
  },
}));

const CardMediaStyle = styled(AtomCardMedia)(({ theme }) => ({
  paddingTop: "56.25%",
  margin: theme.spacing(0, 2, 0, 2),
  //"0px 2px 3px 1px rgb(0 0 0)"
  borderRadius: "5px",
  boxShadow: ` 0px 2px 3px 1px ${darken(theme.palette.primary.main, 0.9)}`,
  border: ` 1px solid ${darken(theme.palette.primary.main, 0.7)}`, //"3px solid #22394c"
}));

const CardListGame = (props) => {
  return (
    <ItemCard elevation={0}>
      <AtomBox
        sx={(theme) => ({
          textDecoration: "none",
          color: theme.palette.text.primary,
        })}
        component={AtomRouteLink}
        to={props.to}
        // component={AtomButton}
        // onClick={props.onClick}
      >
        {/* <AtomCardHeader
          sx={(theme) => ({
            textTransform: "uppercase",
            color: theme.palette.primary.main,
            // fontFamily: theme.typography.titleGame.fontFamily,
            // fontSize: theme.typography.body2.fontSize,
            "&:hover": {
              color: alpha(theme.palette.primary.main, 0.8),
            },
          })}
          action={
            <AtomIconButton aria-label="settings">
              <AtomIconMoreVert />
            </AtomIconButton>
          }
          subheaderTypographyProps={{ variant: "subtitle2" }}
          titleTypographyProps={{ variant: "titleGame" }}
          title={props.title}
          subheader={props.subheader}
        ></AtomCardHeader> */}
        <AtomCardContent>
          <AtomStack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <AtomStack>
              <CaptionGame>{props.caption}</CaptionGame>
              <AtomTypography variant="subtitle2">
                Phát hành ngày {props.subheader}
              </AtomTypography>
            </AtomStack>

            {/* <AtomIconButton onClcick={hanleClickButtonEdit}>
              <AtomIconMoreVert />
            </AtomIconButton> */}
            <ButtonEditCard />
          </AtomStack>
        </AtomCardContent>

        <CardMediaStyle
          // component="img"
          image={props.image}
          title={props.title}
          onError={(e) => {
            const imgDefault = "/images/default.jpg";

            e.target.src = imgDefault;
          }}
          sx={{ height: "150px" }}
        ></CardMediaStyle>

        <AtomCardContent>
          <AtomStack spacing={1}>
            {" "}
            {/* <CaptionGame>{value.caption}</CaptionGame>
                          <AtomTypography variant="subtitle2">
                            Phát hành ngày {value.release}
                          </AtomTypography>
                          <AtomDivider /> */}
            <DescriptionNewGame>{props.description}</DescriptionNewGame>{" "}
          </AtomStack>
        </AtomCardContent>

        <AtomCardAction sx={{ justifyContent: "flex-end" }}>
          <DialogPlayGame
            caption={props.caption}
            link={props.link || "https://codepen.io/HunorMarton/full/xxOMQKg"}
          />
        </AtomCardAction>
      </AtomBox>
    </ItemCard>
  );
};

export default CardListGame;
