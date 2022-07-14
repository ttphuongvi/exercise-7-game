import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DialogPlayGame from "../Atomic/molecules/DialogPlayGame";
import AtomCardMedia from "../Atomic/atoms/AtomCardMedia";
import CaptionGame from "../Atomic/molecules/CaptionGame";
import ReleaseYear from "../Atomic/molecules/ReleaseYear";
import AtomBox from "../Atomic/atoms/AtomBox";
import TemplatePage from "../Atomic/templates/TemplatePage";
import AtomCard from "../Atomic/atoms/AtomCard";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import AtomCardAction from "../Atomic/atoms/AtomCardAction";
import TitleCategory from "../Atomic/molecules/TitleCategory";
import Container from "../Atomic/molecules/Container";
import { styled } from "@material-ui/core/styles";

const ContainerDetaiGame = styled(Container)({
  width: "60%",
  "&:hover": {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
});

const CardAction = styled(AtomCardAction)({
  justifyContent: "center",
});

const CardContent = styled(AtomCardContent)({
  padding: "16px 0 16px 0",
});

const DescriptionGame = styled("div")({
  textAlign: "justify",
});

const CardMedia = styled(AtomCardMedia)({
  height: "50%,",
  paddingTop: "56.25%",
  // width: "100%",
  border: "3px solid #22394c",
  WebkitBoxShadow: "0px 2px 3px 1px rgb(0 0 0)",
  borderRadius: "5px",
  boxShadow: "0px 2px 3px 1px rgb(0 0 0)",
});

const DetailsGame = () => {
  let { params } = useParams();
  const [dataSource, setDataSource] = useState(null);
  // const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`https://game.phong940253.tk/games?id=${params}`).then((res) => {
      setDataSource(res.data[0]);
    });
  }, [params]);

  return (
    <AtomBox>
      {dataSource && (
        <TemplatePage
          content={
            <ContainerDetaiGame>
              <TitleCategory title="CHI TIẾT GAME"></TitleCategory>
              <AtomCard elevation={0}>
                <CardMedia
                  fullWidth
                  image={dataSource.image}
                  title={dataSource.caption}
                ></CardMedia>
                <CardContent>
                  <CaptionGame>{dataSource.caption}</CaptionGame>
                  <ReleaseYear>
                    {" "}
                    Ngày phát hành {dataSource.release}
                  </ReleaseYear>
                  <DescriptionGame>{dataSource.description}</DescriptionGame>
                </CardContent>
                <CardAction>
                  <DialogPlayGame
                    caption={dataSource.caption}
                    link={dataSource.link}
                  />
                </CardAction>
              </AtomCard>
            </ContainerDetaiGame>
          }
        ></TemplatePage>
      )}
    </AtomBox>
  );
};
export default DetailsGame;
