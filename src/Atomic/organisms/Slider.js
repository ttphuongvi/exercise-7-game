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
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";

const SwiperStyles = styled(Swiper)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  // [theme.breakpoints.down("xs")]: {
  //   width: 375,
  // },
  [theme.breakpoints.down("sm")]: {
    width: 600,
  },
  [theme.breakpoints.down("xl")]: {
    width: 1200,
  },
}));

const CaptionSlider = styled(AtomTypography)({
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
  width: "72%",
  height: "100%",
  objectFit: "fill",
  position: "absolute",
  zIndex: 1,
  top: "0px",
  right: "0px",
  borderRadius: "40% 0% 0% 40%",
});

const BoxStyles = styled(AtomBox)(({ theme }) => ({}));

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
    <BoxStyles id="slider">
      <SwiperStyles
        breakpoints={{
          600: {
            width: 600,
            slidesPerView: 0,
          },
          1200: {
            width: 1200,
            slidesPerView: 0,
          },
        }}
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
              <AtomGrid
                p={5}
                pt={"10%"}
                pb={"10%"}
                container
                spacing={2}
                alignItems={"center"}
              >
                <AtomGrid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <AtomGrid container>
                    <CaptionSlider variant="h4">{value.caption}</CaptionSlider>
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
                <AtomGrid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <ImageSlider src={value.image} alt="" />
                  {/* <AtomCardMedia
                    component={"img"}
                    image={value.image}
                  ></AtomCardMedia> */}
                </AtomGrid>
              </AtomGrid>
              {/* </AtomContainer> */}
            </SwiperSlide>
          );
        })}
      </SwiperStyles>
    </BoxStyles>
  );
};
export default Slide1;
