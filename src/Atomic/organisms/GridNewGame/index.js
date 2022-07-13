import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import AtomGrid from "../../atoms/AtomGrid";
import useStyle from "./styles";
import TitleCatogery from "../../molecules/TitleCategory";
import AtomCard from "../../atoms/AtomCard";
import ContainerImageNewGame from "../../templates/TemplateTag/ContainerImageNewGame";
import ImageNewGame from "../../templates/TemplateTag/ImageNewGame";
import ContainerContentNewGame from "../../templates/TemplateTag/ContainerContentNewGame";
import DescriptionGame from "../../templates/TemplateTag/DescriptionGame";
import DivFlexRow from "../../templates/TemplateTag/DivFlexRow";
import CaptionGame from "../../templates/TemplateTag/CaptionGame";

const GridNewGame = ({ navigateTabListgame }) => {
  const [dataSource, setDataSource] = useState([]);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  useEffect(() => {
    axios
      .get(
        "https://game.phong940253.tk/games?_sort=id&_order=desc&_start=0&_limit=6"
      )
      .then((res) => {
        setDataSource(res.data);
      });
    // console.log(dataSource);
  }, []);

  const classes = useStyle();

  return (
    <TitleCatogery title="Game mới nhất">
      <div className={classes.root}>
        <AtomGrid className={classes.gridContainer} container spacing={3}>
          {dataSource.map((value) => {
            return (
              <AtomGrid key={value.id} item xs={12} sm={6} md={6} lg={4}>
                <AtomCard className={classes.paper} elevation={7}>
                  <CaptionGame className={classes.caption}>
                    {value.caption}
                  </CaptionGame>
                  <DivFlexRow>
                    <ContainerImageNewGame>
                      <ImageNewGame src={value.image} alt=""></ImageNewGame>
                    </ContainerImageNewGame>
                    <ContainerContentNewGame>
                      <DescriptionGame>{value.description}</DescriptionGame>
                      <ButtonStyle1
                        label="Xem chi tiết"
                        onClick={() => {
                          navigate(`/${value.id}`);
                        }}
                      />
                    </ContainerContentNewGame>
                  </DivFlexRow>
                </AtomCard>
              </AtomGrid>
            );
          })}
        </AtomGrid>
        <ButtonStyle2 onClick={handleClick} label="Xem thêm"></ButtonStyle2>
      </div>
    </TitleCatogery>
  );
};

export default GridNewGame;
