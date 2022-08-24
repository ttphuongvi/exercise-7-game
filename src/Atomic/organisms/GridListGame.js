import { React, useEffect, useState } from "react";
import HorizontalStripeButton from "./../molecules/ButtonHorizontalStripe";
import { useDispatch, useSelector } from "react-redux";
import { SET_LIST_GAME } from "../../store/const";
import AtomGrid from "../atoms/AtomGrid";
import CardListGame from "../molecules/CardListGame";
import { useNavigate } from "react-router-dom";
import AtomStack from "../atoms/AtomStack";
import getGamesDefault from "../../services/games";
import AtomIconArrowForwardOutlined from "../atoms/AtomIconArrowForwardOutlined";
// import { useNavigate } from "react-router-dom";

const GridListGame = (props) => {
  const [hiddenLoadding, setHidden] = useState(false);

  // let data = getNewGames();

  const onClickLoadding = () => {
    const data = JSON.parse(localStorage.getItem("listGame"));
    dispatch({ type: SET_LIST_GAME, content: data });
    console.log("listGame", data);
    // });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content) || [];
  const [filteredData, setFilteredData] = useState(dataSource);
  // console.log("fil", filteredData);
  // console.log("data", dataSource);

  const dispatch = useDispatch();

  useEffect(() => {
    let dataDefault = getGamesDefault();

    if (localStorage.getItem("listGame") != null) {
      // get data from localStorage
      let listGame = JSON.parse(localStorage.getItem("listGame"));
      dispatch({ type: SET_LIST_GAME, content: listGame });
      console.log("list game", listGame);
    } else {
      console.log("data", dataDefault);

      // set localstorage
      localStorage.setItem("listGame", JSON.stringify(dataDefault));
      dispatch({ type: SET_LIST_GAME, content: dataDefault });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  useEffect(
    () => {
      console.log("data", dataSource);
      let newFilterArray = dataSource.filter((item) => {
        let arrFilterByYear = null;
        let arrFilterAll = null;
        if (item.release.toString().includes(props.year)) {
          arrFilterByYear = item;
        }
        if (arrFilterByYear) {
          if (arrFilterByYear.caption.toLowerCase().includes(props.input)) {
            arrFilterAll = arrFilterByYear;
          }
        }
        return arrFilterAll;
      });

      // limit 8 or none limit
      if (hiddenLoadding) setFilteredData(newFilterArray);
      else setFilteredData(newFilterArray.slice(0, 8));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataSource, props.input, props.year]
  );

  // create a new array by filtering the original array
  // const filteredData = dataSource.filter((el) => {
  //   let arrFilterByYear = null;
  //   let arrFilterAll = null;
  //   if (el.release.toString().includes(props.year)) {
  //     arrFilterByYear = el;
  //   }
  //   if (arrFilterByYear) {
  //     if (arrFilterByYear.caption.toLowerCase().includes(props.input)) {
  //       arrFilterAll = arrFilterByYear;
  //     }
  //   }
  //   console.log("chanage filter");

  //   return arrFilterAll;
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
                  id={value.id}
                />
              </AtomGrid>
            );
          })}
      </AtomGrid>
      {!hiddenLoadding && (
        <HorizontalStripeButton
          icon={<AtomIconArrowForwardOutlined />}
          onClick={onClickLoadding}
          label="Tải thêm game"
        ></HorizontalStripeButton>
      )}
    </AtomStack>
  );
};

export default GridListGame;
