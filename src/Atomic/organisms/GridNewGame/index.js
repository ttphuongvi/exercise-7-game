import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import AtomGrid from "../../atoms/AtomGrid";
import useStyle from "./styles";
import TitleCatogery from "../../molecules/TitleCatogery";
import AtomTypography from "../../atoms/AtomTypography";
import AtomCard from "../../atoms/AtomCard";
import ContainerImageNewGame from "../../templates/ContainerImageNewGame";
import ImageNewGame from "../../templates/ImageNewGame";
import ContainerContentNewGame from "../../templates/ContainerContentNewGame";
import DescriptionGame from "../../templates/DescriptionGame";
import DivFlexRow from "../../templates/DivFlexRow";

const GridNewGame = ({ navigateTabListgame }) => {
  const [dataSource, setDataSource] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=6").then((res) => {
      setDataSource(res.data);
    });
    console.log(dataSource);
  }, []);

  const classes = useStyle();

  return (
    <TitleCatogery title="Game mới nhất">
      <div className={classes.root}>
        <AtomGrid className={classes.gridContainer} container spacing={3}>
          {dataSource.map((value, key) => {
            return (
              <AtomGrid spacing={3} item xs={4} key={value.id}>
                <AtomCard className={classes.paper} elevation={7}>
                  <AtomTypography variant="h6" className={classes.caption}>
                    {value.caption}
                  </AtomTypography>
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
        <ButtonStyle2
          onClick={() => {
            navigateTabListgame(0, 1);
          }}
          label="Xem thêm"
        ></ButtonStyle2>
      </div>
    </TitleCatogery>
  );
};

export default GridNewGame;
