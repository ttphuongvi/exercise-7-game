// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AtomGrid from "../atoms/AtomGrid";
import DivContainerCaptionSlider from "../molecules/DivContainerCaptionSlider";
import CaptionSlider from "../molecules/CaptionSlider";
import DescriptionGameSlider from "../molecules/DescriptionGameSlider";
import ButtonStyle1 from "../molecules/ButtonStyle1";
import ImageSlider from "../molecules/ImageSlider";
import { makeStyles } from "@material-ui/core/styles";
import waves from "../../img/waves.jpg";

const useStyles = makeStyles({
  gridContainer: {
    padding: "10% 100px 10% 30px",
  },
  slider: {
    height: "100%",
    backgroundImage: `url(${waves})`,
    // backgroundColor: "blue",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    top: "0",
  },
});

const Slide1 = () => {
  const classes = useStyles();

  const update = (swiper) => {
    //console.log("visibleSlidesIndexes", swiper.activeIndex);
    swiper.slides.map((slide, index) => {
      if (index === swiper.activeIndex) {
        slide.removeAttribute("inert");
        swiper.slides[index].setAttribute("tabindex", "0");
      } else {
        swiper.slides[index].setAttribute("tabindex", "-1");
        slide.setAttribute("inert", "");
      }
      return slide;
    });

    swiper.update();
  };

  let navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  axios
    .get(
      "https://game.phong940253.tk/games?_sort=id&_order=desc&_start=0&_limit=6"
    )
    .then((res) => {
      setDataSource(res.data);
    });

  return (
    <div className="wrapper">
      <Swiper
        className={classes.slider}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        onSlideChangeTransitionEnd={(swiper) => update(swiper)}
        onSlideChange={(swiper) => update(swiper)}
        onSwiper={(swiper) => {
          update(swiper);
        }}
        // navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination
        modules={[Autoplay, Navigation, Pagination]}
      >
        {dataSource.map((value) => {
          return (
            <SwiperSlide key={value.id} className={classes.slider}>
              <div key={value.id}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Slide1;
