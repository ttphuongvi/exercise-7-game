import { React, useEffect, useState } from "react";
import axios from "axios";
import HorizontalStripeButton from "./../molecules/HorizontalStripeButton";
import DialogPlayGame from "../molecules/DialogPlayGame";
import { useSelector, useDispatch } from "react-redux";
import { SET_LIST_GAME } from "../../store/const";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomCardContent from "../atoms/AtomCardContent";
import ReleaseYear from "../molecules/ReleaseYear";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import LinkStyle from "../molecules/LinkStyle";
import { styled } from "@mui/material/styles";
import AtomCardAction from "../atoms/AtomCardAction";

const ItemCard = styled(AtomCard)(({ theme }) => ({
  position: "relative",
  paddingBottom: "10%",
  backgroundColor: theme.palette.background.card,
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    transform: "scale(1.05)",
  },
}));

const GridContainer = styled(AtomGrid)({
  marginBottom: "10px",
});

const CardMediaStyle = styled(AtomCardMedia)(({ theme }) => ({
  paddingTop: "56.25%",
  margin: theme.spacing(2),
  WebkitBoxShadow: "0px 2px 3px 1px rgb(0 0 0)",
  borderRadius: "5px",
  boxShadow: "0px 2px 3px 1px rgb(0 0 0)",
  border: "3px solid #22394c",
}));

const GridListGame = (props) => {
  const [hiddenLoadding, setHidden] = useState(false);

  const onClickLoadding = () => {
    axios
      .get("https://game.phong940253.tk/games?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: SET_LIST_GAME, content: res.data });
      });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://game.phong940253.tk/games?_sort=id&_order=desc&_start=0&_limit=8"
      )
      .then((res) => {
        dispatch({ type: SET_LIST_GAME, content: res.data });
      });
  }, [dispatch]);

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
    <AtomGrid container alignItems={"center"} direction={"column"}>
      <AtomGrid item>
        {" "}
        <GridContainer container spacing={3}>
          {filteredData &&
            filteredData.map((value) => {
              return (
                <AtomGrid key={value.id} item xs={12} sm={4} md={3} lg={3}>
                  <ItemCard>
                    <CardMediaStyle
                      image={value.image}
                      title={value.caption}
                    ></CardMediaStyle>
                    <AtomCardContent>
                      <LinkStyle to={`/${value.id}`}>
                        {" "}
                        <CaptionGame>{value.caption}</CaptionGame>
                      </LinkStyle>
                      <ReleaseYear>Phát hành ngày {value.release}</ReleaseYear>
                      <DescriptionGame>
                        {value.description}
                      </DescriptionGame>{" "}
                      <AtomCardAction style={{ justifyContent: "flex-end" }}>
                        <DialogPlayGame
                          caption={value.caption}
                          link={value.link}
                        />
                      </AtomCardAction>
                    </AtomCardContent>
                  </ItemCard>
                </AtomGrid>
              );
            })}
        </GridContainer>
      </AtomGrid>
      <AtomGrid mt={2} item>
        {!hiddenLoadding && (
          <HorizontalStripeButton
            onClick={onClickLoadding}
            label="Tải thêm game"
          ></HorizontalStripeButton>
        )}
      </AtomGrid>
    </AtomGrid>
  );
};

export default GridListGame;
