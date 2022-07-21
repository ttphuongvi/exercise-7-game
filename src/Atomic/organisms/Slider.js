// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import DescriptionGameSlider from "../molecules/DescriptionGameSlider";
import ButtonStyle1 from "../molecules/SquareStripeButton";
import { makeStyles } from "@mui/styles";
// import waves from "/images/waves.jpg";
import { styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomContainer from "../atoms/AtomContainer";
import AtomTypography from "../atoms/AtomTypography";

const useStyles = makeStyles({
  gridContainer: {
    padding: "10% 0px 10% 0px",
  },
});

const SwiperStyles = styled(Swiper)({
  backgroundImage: `url(/images/waves.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

const GridContainerStyles = styled(AtomGrid)(
  ({ theme }) => `
  padding: ${theme.spacing(20)} ${theme.spacing(4)}`
);

const CaptionSlider = styled(AtomTypography)({
  color: "#fff",
  fontSize: "50px",
  width: "100%",
  top: "15px",
  zIndex: 1,
  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Economica", Arial, sans-serif',
  fontWeight: 700,
  // textShadow: '0px 2px 3px rgba(0, 0, 0, 1)',
});

const ImageSlider = styled("img")({
  width: "55%",
  height: "100%",
  objectFit: "fill",
  position: "absolute",
  zIndex: 1,
  top: "0px",
  right: "0px",
  borderRadius: "50% 0% 0% 50%",
});

const Slide1 = () => {
  const classes = useStyles();

  const update = (swiper) => {
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
  // const [dataSource, setDataSource] = useState([]);
  // axios
  //   .get(
  //     "https://game.phong940253.tk/games?_sort=id&_order=desc&_start=0&_limit=6"
  //   )
  //   .then((res) => {
  //     setDataSource(res.data);
  //   });
  const data = getNewGames(6);

  return (
    <>
      <SwiperStyles
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
        {data.map((value) => {
          return (
            <SwiperSlide key={value.id} className={classes.slider}>
              <AtomContainer maxWidth="xl" key={value.id}>
                <GridContainerStyles container spacing={2}>
                  <AtomGrid item xs={6}>
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
                  </AtomGrid>
                  <AtomGrid item xs={6}>
                    <ImageSlider src={value.image} alt="" />
                  </AtomGrid>
                </GridContainerStyles>
              </AtomContainer>
            </SwiperSlide>
          );
        })}
      </SwiperStyles>
    </>
  );
};
export default Slide1;
