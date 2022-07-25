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
import ButtonStyle1 from "../molecules/SquareStripeButton";
import { alpha, styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomContainer from "../atoms/AtomContainer";
import AtomTypography from "../atoms/AtomTypography";

const SwiperStyles = styled(Swiper)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
}));

const GridContainerStyles = styled(AtomGrid)(
  ({ theme }) => `
  padding: ${theme.spacing(20)} ${theme.spacing(4)}
  // minHeight: "100vh";
  // height: "100vh",
  `
);

const CaptionSlider = styled(AtomTypography)({
  fontSize: "40px",
  width: "100%",
  zIndex: 99,
  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
  fontFamily: '"Economica", Arial, sans-serif',
  fontWeight: 700,
  // textShadow: '0px 2px 3px rgba(0, 0, 0, 1)',
});

const DescriptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  color: alpha(theme.palette.primary.main, 0.8),
  fontSize: "16px",
  marginBottom: theme.spacing(2),
  overflow: "hidden",
  fontFamily: '"Economica", Arial, sans-serif',
  fontWeight: 400,
  fontStyle: "italic",
  textShadow: "0px 1px 1px rgba(0, 0, 0, 1)",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 7,
  display: "-webkit-box",
  textAlign: "justify",
}));

const ImageSlider = styled("img")({
  width: "80%",
  height: "100%",
  objectFit: "fill",
  position: "absolute",
  zIndex: 1,
  top: "0px",
  right: "0px",
  // borderRadius: "50% 0% 0% 50%",
});

const Slide1 = () => {
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
            <SwiperSlide key={value.id}>
              <AtomContainer maxWidth="xl" key={value.id}>
                <GridContainerStyles container spacing={2}>
                  <AtomGrid item xs={2}>
                    <AtomGrid container>
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
                    </AtomGrid>{" "}
                  </AtomGrid>
                  <AtomGrid item xs={10}>
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
