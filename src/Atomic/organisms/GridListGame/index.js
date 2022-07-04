import { React, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import DialogPlayGame from "../../molecules/DialogPlayGame";
import { useSelector, useDispatch } from "react-redux";
import { SET_LIST_GAME } from "../../../redux/const";
import DivFlexColumn from "../../templates/DivFlexColumn";
import AtomGrid from "../../atoms/AtomGrid";
import useStyles from "./styles";
import AtomCard from "../../atoms/AtomCard";
import AtomCardMedia from "../../atoms/AtomCardMedia";
import AtomCardContent from "../../atoms/AtomCardContent";
import AtomTypography from "../../atoms/AtomTypography";
import ReleaseYear from "../../templates/ReleaseYear";
import DescriptionGame from "../../templates/DescriptionGame";
const GridListGame = (props) => {
  const classes = useStyles();
  const [hiddenLoadding, setHidden] = useState(false);
  const onClickLoadding = () => {
    axios.get("/games?_sort=id&_order=desc").then((res) => {
      dispatch({ type: SET_LIST_GAME, content: res.data });
    });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=8").then((res) => {
      dispatch({ type: SET_LIST_GAME, content: res.data });
    });
  }, []);
  return (
    <DivFlexColumn className={classes.root}>
      <AtomGrid className={classes.gridContainer} container spacing={3}>
        {dataSource &&
          dataSource.map((value, key) => {
            return (
              <AtomGrid item xs={3}>
                <AtomCard className={classes.itemListgame} elevation={7}>
                  <AtomCardMedia
                    className={classes.media}
                    image={value.image}
                    title={value.caption}
                  ></AtomCardMedia>
                  <AtomCardContent className={classes.contentListGame}>
                    <Link to={`/${value.id}`}>
                      {" "}
                      <AtomTypography className={classes.caption} variant="h6">
                        {value.caption}
                      </AtomTypography>
                    </Link>
                    <ReleaseYear>Phát hành ngày {value.release}</ReleaseYear>
                    <DescriptionGame>{value.description}</DescriptionGame>
                    <DialogPlayGame caption={value.caption} link={value.link} />
                  </AtomCardContent>
                </AtomCard>
              </AtomGrid>
            );
          })}
      </AtomGrid>
      {!hiddenLoadding && (
        <ButtonStyle2
          onClick={onClickLoadding}
          label="Tải thêm game"
        ></ButtonStyle2>
      )}
    </DivFlexColumn>
  );
};

export default GridListGame;
