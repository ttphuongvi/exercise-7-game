import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import DialogPlayGame from "../../molecules/DialogPlayGame";
import { useSelector, useDispatch } from "react-redux";
import { SET_LIST_GAME } from "../../../redux/const";
import DivFlexColumn from "../../templates/TemplateTag/DivFlexColumn";
import AtomGrid from "../../atoms/AtomGrid";
import useStyles from "./styles";
import AtomCard from "../../atoms/AtomCard";
import AtomCardMedia from "../../atoms/AtomCardMedia";
import AtomCardContent from "../../atoms/AtomCardContent";
import AtomTypography from "../../atoms/AtomTypography";
import ReleaseYear from "../../templates/TemplateTag/ReleaseYear";
import DescriptionGame from "../../templates/TemplateTag/DescriptionGame";
import { fi } from "date-fns/locale";
const GridListGame = (props) => {
  const classes = useStyles();

  const [hiddenLoadding, setHidden] = useState(false);

  const onClickLoadding = () => {
    axios.get("/games?_sort=id&_order=desc").then((res) => {
      dispatch({ type: SET_LIST_GAME, content: res.data });
    });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content) || [];
  const dispatch = useDispatch();
  console.log(dataSource);
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=8").then((res) => {
      dispatch({ type: SET_LIST_GAME, content: res.data });
    });
  }, []);

  //create a new array by filtering the original array
  const filteredData = dataSource.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.caption.toLowerCase().includes(props.input);
    }
  });

  return (
    <DivFlexColumn className={classes.root}>
      <AtomGrid className={classes.gridContainer} container spacing={3}>
        {filteredData &&
          filteredData.map((value, key) => {
            return (
              <AtomGrid item xs={12} sm={6} md={4} lg={3}>
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
