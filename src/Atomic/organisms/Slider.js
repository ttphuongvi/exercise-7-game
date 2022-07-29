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
import { styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import AtomStack from "../atoms/AtomStack";

const DescriptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  // color: alpha(theme.palette.primary.main, 0.8),
  // fontSize: "16px",
  // marginBottom: theme.spacing(2),
  overflow: "hidden",
  // fontFamily: '"Economica", Arial, sans-serif',
  // fontWeight: 400,
  // fontStyle: "italic",
  // textShadow: "0px 1px 1px rgba(0, 0, 0, 1)",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  display: "-webkit-box",
  // textAlign: "justify",
}));

const ImageSlider = styled("img")({
  // width: "72%",
  // height: "100%",
  // objectFit: "fill",
  // position: "absolute",
  // zIndex: 1,
  // top: "0px",
  // right: "0px",
  // borderRadius: "40% 0% 0% 40%",
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
      <Swiper
        sx={{}}
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
              <AtomBox
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  // height: 500,
                }}
              >
                <AtomBox
                  component="img"
                  src={value.image}
                  sx={{
                    width: "100%",
                    // height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(3px)",
                    webkitFilter: " blur(3px)",
                    position: "absolute",
                  }}
                ></AtomBox>
                <AtomBox>
                  <AtomGrid
                    pl={5}
                    pr={5}
                    // pt={"10%"}
                    // pb={"10%"}
                    container
                    spacing={2}
                    // alignItems={"center"}
                  >
                    <AtomGrid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <AtomBox
                        sx={(theme) => ({
                          position: "absolute",
                          bottom: "0%",
                          left: "50%",
                          transform: "translate3d(-50%, -50%, 0)",
                          zIndex: 99,
                          textAlign: "center",
                          width: "70%",
                          fontWeight: 300,
                          backgroundColor: "rgba(255,255,255,.85)",
                          boxShadow: "0 1em 2em -1em rgba(0,0,0,.5)",
                          padding: "1em 2em",
                          lineHeight: 1.5,
                          color: "#333",
                          borderRadius: "0.5em",
                        })}
                      >
                        <AtomStack spacing={1} alignItems="center">
                          <AtomTypography sx={{}} variant="h4">
                            {value.caption}
                          </AtomTypography>
                          <DescriptionGameSlider>
                            {value.description}
                          </DescriptionGameSlider>
                          <ButtonStyle1
                            label="Xem chi tiết"
                            onClick={() => {
                              navigate(`/${value.id}`);
                            }}
                          />
                        </AtomStack>
                      </AtomBox>{" "}
                    </AtomGrid>
                    <AtomGrid item xs={9} sm={9} md={9} lg={9} xl={9}>
                      <ImageSlider src={value.image} alt="" />
                      {/* <AtomCardMedia
                    component={"img"}
                    image={value.image}
                  ></AtomCardMedia> */}
                    </AtomGrid>
                  </AtomGrid>
                </AtomBox>
              </AtomBox>

              {/* </AtomContainer> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slide1;
