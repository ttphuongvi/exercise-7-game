import { React, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import { useNavigate } from "react-router-dom";
import DivContainerCaptionSlider from "../../templates/TemplateTag/DivContainerCaptionSlider";
import DescriptionGameSlider from "../../templates/TemplateTag/DescriptionGameSlider";
import CaptionSlider from "../../templates/TemplateTag/CaptionSlider";
import ImageSlider from "../../templates/TemplateTag/ImageSlider";
import DivFlexRow from "../../templates/TemplateTag/DivFlexRow";
import AtomGrid from "../../atoms/AtomGrid";
import AtomBox from "../../atoms/AtomBox";
import { makeStyles } from "@material-ui/core/styles";
import waves from "../../../img/waves.jpg";

const useStyles = makeStyles({
  gridContainer: {
    padding: "10% 100px 10% 30px",
  },
  slider: {
    width: "100%",
    height: "100%",
    /* border-radius: 10px; */
    overflow: "hidden",
    position: "relative",
    marginTop: "60px",
    backgroundImage: `url(${waves})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const Slider = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=6").then((res) => {
      setDataSource(res.data);
    });
    let counter = 1;

    const interval = setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      console.log(counter);
      counter++;
      if (counter > 6) {
        counter = 1;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AtomBox className={classes.slider}>
      <div class="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <input type="radio" name="radio-btn" id="radio5" />
        <input type="radio" name="radio-btn" id="radio6" />
        <>
          {dataSource.map((value, index) => {
            console.log(index);
            if (index === 0) {
              return (
                <div class="slide first" key={value.id}>
                  <AtomGrid container className={classes.gridContainer}>
                    <DivContainerCaptionSlider item xs={6}>
                      <CaptionSlider>{value.caption}</CaptionSlider>
                      <DescriptionGameSlider>
                        {value.description}
                      </DescriptionGameSlider>
                      <ButtonStyle1
                        label="Xem chi tiết"
                        onClick={() => {
                          navigate(`/${value.id}`);
                        }}
                      />
                    </DivContainerCaptionSlider>
                    <AtomGrid item xs={6}>
                      <ImageSlider src={value.image} alt="" />
                    </AtomGrid>
                  </AtomGrid>
                </div>
              );
            }
            return (
              <div class="slide" key={value.id}>
                <AtomGrid container className={classes.gridContainer}>
                  <DivContainerCaptionSlider item xs={6}>
                    <CaptionSlider>{value.caption}</CaptionSlider>
                    <DescriptionGameSlider>
                      {value.description}
                    </DescriptionGameSlider>
                    <ButtonStyle1
                      label="Xem chi tiết"
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    />
                  </DivContainerCaptionSlider>
                  <AtomGrid item xs={6}>
                    <ImageSlider src={value.image} alt="" />
                  </AtomGrid>
                </AtomGrid>
              </div>
            );
          })}
        </>

        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
          <div class="auto-btn6"></div>
        </div>
      </div>
      <div class="navigation-manual">
        <label htmlFor="radio1" class="manual-btn"></label>
        <label htmlFor="radio2" class="manual-btn"></label>
        <label htmlFor="radio3" class="manual-btn"></label>
        <label htmlFor="radio4" class="manual-btn"></label>
        <label htmlFor="radio5" class="manual-btn"></label>
        <label htmlFor="radio6" class="manual-btn"></label>
      </div>
    </AtomBox>
  );
};

export default Slider;
