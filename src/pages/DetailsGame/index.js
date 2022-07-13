import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import DialogPlayGame from "../../Atomic/molecules/DialogPlayGame";
import TemplateDetailGame from "../../Atomic/templates/TemplateDetailGame";
import AtomCardMedia from "../../Atomic/atoms/AtomCardMedia";
import useStyles from "./styles";
import CaptionGame from "../../Atomic/templates/TemplateTag/CaptionGame";
import ReleaseYear from "../../Atomic/templates/TemplateTag/ReleaseYear";
import AtomBox from "../../Atomic/atoms/AtomBox";

const DetailsGame = () => {
  let { params } = useParams();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios
      .get(`https://game.phong940253.tk${urlRequest}${params}`)
      .then((res) => {
        setDataSource(res.data[0]);
      });
  });

  const classes = useStyles();
  return (
    <AtomBox>
      {dataSource && (
        <TemplateDetailGame
          caption={<CaptionGame>{dataSource.caption}</CaptionGame>}
          release={
            <ReleaseYear> Ngày phát hành {dataSource.release}</ReleaseYear>
          }
          image={
            <AtomCardMedia
              fullWidth
              className={classes.media}
              image={dataSource.image}
              title={dataSource.caption}
            ></AtomCardMedia>
          }
          description={
            <div className="details-game__description">
              {dataSource.description}
            </div>
          }
          dialogPlayGame={
            <DialogPlayGame
              caption={dataSource.caption}
              link={dataSource.link}
            />
          }
        ></TemplateDetailGame>
      )}
    </AtomBox>
  );
};
export default DetailsGame;
