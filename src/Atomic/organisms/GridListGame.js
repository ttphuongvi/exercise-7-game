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
import { styled } from "@mui/styles";

const ItemCard = styled(AtomCard)({
  position: "relative",
  paddingBottom: "10%",

  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    transform: "scale(1.05)",
  },
});

const GridContainer = styled(AtomGrid)({
  marginBottom: "10px",
});

const CardMediaStyle = styled(AtomCardMedia)({
  height: 0,
  paddingTop: "56.25%",
  margin: "10% 10% 0 10%",
  border: "3px solid #22394c",
  WebkitBoxShadow: "0px 2px 3px 1px rgb(0 0 0)",
  borderRadius: "5px",
  boxShadow: "0px 2px 3px 1px rgb(0 0 0)",
});

const ContentListGame = styled(AtomCardContent)({
  margin: "0 5% 0 5%",
});
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
    <>
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
                  <ContentListGame>
                    <LinkStyle to={`/${value.id}`}>
                      {" "}
                      <CaptionGame>{value.caption}</CaptionGame>
                    </LinkStyle>
                    <ReleaseYear>Phát hành ngày {value.release}</ReleaseYear>
                    <DescriptionGame>{value.description}</DescriptionGame>
                    <DialogPlayGame caption={value.caption} link={value.link} />
                  </ContentListGame>
                </ItemCard>
              </AtomGrid>
            );
          })}
      </GridContainer>
      {!hiddenLoadding && (
        <HorizontalStripeButton
          onClick={onClickLoadding}
          label="Tải thêm game"
        ></HorizontalStripeButton>
      )}
    </>
  );
};

export default GridListGame;
