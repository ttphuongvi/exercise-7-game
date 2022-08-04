import { React, useEffect, useState } from "react";
import HorizontalStripeButton from "./../molecules/HorizontalStripeButton";
import DialogPlayGame from "../molecules/DialogFullWidth/DialogPlayGame";
import { useDispatch, useSelector } from "react-redux";
import { SET_LIST_GAME } from "../../store/const";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomCardContent from "../atoms/AtomCardContent";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import LinkStyle from "../molecules/LinkStyle";
import { styled } from "@mui/material/styles";
import AtomTypography from "../atoms/AtomTypography";
import AtomStack from "../atoms/AtomStack";
import { Divider } from "@mui/material";
import getNewGames from "../../services/games";

const ItemCard = styled(AtomCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
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

  let data = getNewGames();

  const onClickLoadding = () => {
    data = JSON.parse(localStorage.getItem("listGame"));
    dispatch({ type: SET_LIST_GAME, content: data });
    // });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("listGame") != null) {
      let listGame = JSON.parse(localStorage.getItem("listGame"));
      console.log("list game", listGame);
      dispatch({ type: SET_LIST_GAME, content: listGame.slice(0, 8) });
    } else {
      console.log("data", data);
      localStorage.setItem("listGame", JSON.stringify(data));
      dispatch({ type: SET_LIST_GAME, content: data.slice(0, 8) });
    }
  }, [dispatch, data]);

  //create a new array by filtering the original array
  const filteredData = dataSource.filter((el) => {
    let arrFilterByYear = null;
    let arrFilterAll = null;
    if (el.release.toString().includes(props.year)) {
      arrFilterByYear = el;
    }
    if (arrFilterByYear) {
      if (arrFilterByYear.caption.toLowerCase().includes(props.input)) {
        arrFilterAll = arrFilterByYear;
      }
    }

    return arrFilterAll;
  });
  // const filteredData = dataSource.filter((el) => {
  //   let arrFilterByYear = null;
  //   if (el.release.toString().includes(props.year)) {
  //     arrFilterByYear = el;
  //     if (arrFilterByYear) {
  //       if (arrFilterByYear.caption.toLowerCase().includes(props.input)) {
  //         return arrFilterByYear;
  //       }
  //     }
  //   }
  //   return arrFilterByYear;
  // });

  return (
    <AtomGrid
      id="list-game"
      container
      alignItems={"center"}
      direction={"column"}
    >
      <AtomGrid item>
        {" "}
        <GridContainer container spacing={2} justifyContent={"center"}>
          {filteredData &&
            filteredData.map((value) => {
              return (
                <AtomGrid
                  minWidth={"300px"}
                  key={value.id}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <LinkStyle to={`/${value.id}`}>
                    <ItemCard elevation={0}>
                      <CardMediaStyle
                        image={value.image}
                        title={value.caption}
                      ></CardMediaStyle>
                      <AtomCardContent>
                        <AtomStack spacing={1}>
                          {" "}
                          <CaptionGame>{value.caption}</CaptionGame>
                          <AtomTypography variant="subtitle2">
                            Phát hành ngày {value.release}
                          </AtomTypography>
                          <Divider />
                          <DescriptionGame>
                            {value.description}
                          </DescriptionGame>{" "}
                          <AtomStack alignItems={"flex-end"}>
                            <DialogPlayGame
                              caption={value.caption}
                              link={value.link}
                            />
                          </AtomStack>
                        </AtomStack>
                      </AtomCardContent>
                    </ItemCard>
                  </LinkStyle>
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
