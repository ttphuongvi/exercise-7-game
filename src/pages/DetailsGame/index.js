import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import DialogPlayGame from "../../Atomic/molecules/DialogPlayGame";
import AtomCardMedia from "../../Atomic/atoms/AtomCardMedia";
import useStyles from "./styles";
import CaptionGame from "../../Atomic/molecules/CaptionGame";
import ReleaseYear from "../../Atomic/molecules/ReleaseYear";
import AtomBox from "../../Atomic/atoms/AtomBox";
import TemplatePage from "../../Atomic/templates/TemplatePage";
import AppBarNew from "../../Atomic/organisms/AppBarNew";
import TitleCatogery from "../../Atomic/molecules/TitleCategory";
import AtomCard from "../../Atomic/atoms/AtomCard";
import AtomCardContent from "../../Atomic/atoms/AtomCardContent";
import AtomCardAction from "../../Atomic/atoms/AtomCardAction";
import Footer from "../../Atomic/organisms/Footer";
import { styled } from "@material-ui/core/styles";

const TemplateDetailsGame = styled(TemplatePage)({
  "& PaperStyle": {
    width: "80%",
  },
});

const DetailsGame = () => {
  let { params } = useParams();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios
      .get(`https://game.phong940253.tk${urlRequest}${params}`)
      .then((res) => {
        // console.log(res.data[0]);
        setDataSource(res.data[0]);
      });
  }, []);
  console.log(dataSource);
  const classes = useStyles();
  return (
    <AtomBox>
      {dataSource && (
        <TemplateDetailsGame
          appbar={<AppBarNew />}
          title={<TitleCatogery title="Chi tiết game" />}
          content={
            <AtomCard elevation={0}>
              <AtomCardMedia
                fullWidth
                className={classes.media}
                image={dataSource.image}
                title={dataSource.caption}
              ></AtomCardMedia>
              <AtomCardContent>
                <CaptionGame>{dataSource.caption}</CaptionGame>
                <ReleaseYear> Ngày phát hành {dataSource.release}</ReleaseYear>
                <div className="details-game__description">
                  {dataSource.description}
                </div>
              </AtomCardContent>
              <AtomCardAction>
                <DialogPlayGame
                  caption={dataSource.caption}
                  link={dataSource.link}
                />
              </AtomCardAction>
            </AtomCard>
          }
          footer={<Footer />}
        ></TemplateDetailsGame>
      )}
    </AtomBox>
  );
};
export default DetailsGame;
