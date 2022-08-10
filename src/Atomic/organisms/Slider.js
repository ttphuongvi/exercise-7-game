import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import ButtonStyle1 from "../molecules/ButtonSquareStripe";
import { styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import AtomStack from "../atoms/AtomStack";

const DescriptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  display: "-webkit-box",
}));

const Slide = () => {
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

  let data = getNewGames(); // Get from file
  if (localStorage.getItem("listGame") != null)
    // Get from localStorage
    data = JSON.parse(localStorage.getItem("listGame")).slice(0, 6);

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
                  height: "100vh",
                }}
              >
                <AtomBox
                  component="img"
                  src={value.image || "/images/default.png"}
                  sx={{
                    width: "100%",
                    height: "100%",
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
                    container
                    spacing={2}
                    // justifyContent={"center"}
                    // alignItems={"center"}
                    // direction={"column"}
                  >
                    {/* <AtomGrid item xl={6}>
                      // {/* <AtomBox component="img" src={value.image} alt="">
                      //   {" "}
                      // </AtomBox> 
                      <img src={value.image} alt=""></img>
                    </AtomGrid> */}
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
                          <AtomTypography
                            sx={{ textTransform: "uppercase" }}
                            variant="h4"
                          >
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
                    {/* <AtomGrid item xs={9} sm={9} md={9} lg={9} xl={9}>
                      <img src={value.image} alt="" />
                      <AtomCardMedia
                    component={"img"}
                    image={value.image}
                  ></AtomCardMedia>
                    </AtomGrid> */}
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
export default Slide;
