import { React, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import { useNavigate } from "react-router-dom";

const Slider = () => {
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
    <div class="slider">
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
                  <div className="slide__container">
                    <div className="slider__container-caption">
                      <div className="slider__caption">{value.caption}</div>
                      <p>{value.description}</p>
                      <ButtonStyle1
                        label="Xem chi tiết"
                        onClick={() => {
                          navigate(`/${value.id}`);
                        }}
                      />
                    </div>
                    <img src={value.image} alt="" />
                  </div>
                </div>
              );
            }
            return (
              <div class="slide" key={value.id}>
                <div className="slide__container">
                  <div className="slider__container-caption">
                    <div className="slider__caption">{value.caption}</div>
                    <p>{value.description}</p>
                    <ButtonStyle1
                      label="Xem chi tiết"
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    />
                  </div>
                  <img src={value.image} alt="" />
                </div>
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
    </div>
  );
};

export default Slider;
