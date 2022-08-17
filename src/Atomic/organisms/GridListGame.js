import { React, useEffect, useState } from "react";
import HorizontalStripeButton from "./../molecules/ButtonHorizontalStripe";
import { useDispatch, useSelector } from "react-redux";
import { SET_LIST_GAME } from "../../store/const";
import AtomGrid from "../atoms/AtomGrid";
import getNewGames from "../../services/games";
import CardListGame from "../molecules/CardListGame";
import { useNavigate } from "react-router-dom";
import AtomStack from "../atoms/AtomStack";
// import { useNavigate } from "react-router-dom";

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
    let data1 = getNewGames();
    if (localStorage.getItem("listGame") != null) {
      let listGame = JSON.parse(localStorage.getItem("listGame"));
      console.log("list game", listGame);
      dispatch({ type: SET_LIST_GAME, content: listGame.slice(0, 8) });
    } else {
      console.log("data", data1);
      localStorage.setItem("listGame", JSON.stringify(data1));
      dispatch({ type: SET_LIST_GAME, content: data1.slice(0, 8) });
    }
  }, [dispatch]);

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
  let navigate = useNavigate();
  return (
    <AtomStack id="list-game" alignItems={"center"} spacing={3}>
      {" "}
      <AtomGrid container spacing={2} justifyContent={"center"}>
        {filteredData &&
          filteredData.map((value) => {
            return (
              <AtomGrid
                minWidth={"300px"}
                key={value.id}
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
              >
                <CardListGame
                  // to={`/${value.id}`}
                  onClick={() => {
                    navigate(`/${value.id}`);
                  }}
                  title={value.caption}
                  release={value.release}
                  image={value.image}
                  caption={value.caption}
                  link={value.link}
                  description={value.description}
                />
              </AtomGrid>
            );
          })}
      </AtomGrid>
      {!hiddenLoadding && (
        <HorizontalStripeButton
          onClick={onClickLoadding}
          label="Tải thêm game"
        ></HorizontalStripeButton>
      )}
    </AtomStack>
  );
};

export default GridListGame;
