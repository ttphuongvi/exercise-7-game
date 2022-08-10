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
import AtomCard from "../atoms/AtomCard";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardMedia from "../atoms/AtomCardMedia";
import { Hidden } from "@mui/material";

const DescriptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  display: "-webkit-box",
  textAlign: "center",
}));

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
                sx={(theme) => ({
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
                })}
              >
                <AtomBox
                  component="img"
                  src={value.image || "/images/default.png"}
                  sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                    filter: "blur(3px)",
                    webkitFilter: " blur(3px)",
                    // backgroundColor: theme.palette.background.default,
                    position: "absolute",
                  })}
                ></AtomBox>
                <AtomBox>
                  <AtomGrid
                    container
                    pl={5}
                    pr={5}
                    justifyContent={"center"}
                    // alignContent={"center"}
                    // alignItems={"center"}
                    spacing={2}
                  >
                    <AtomGrid item xs={10}>
                      <AtomBox
                        sx={(theme) => ({
                          position: "relative",
                          zIndex: 99,
                          backgroundColor: theme.palette.background.default,
                          borderRadius: "0.5em",
                        })}
                      >
                        <AtomCard
                          elevation={0}
                          sx={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px" }}
                        >
                          <AtomGrid container alignItems={"center"}>
                            <Hidden smDown>
                              <AtomGrid item xs={6} sm={12} md={12} xl={6}>
                                <AtomCardMedia
                                  component="img"
                                  image={value.image || "/images/default.png"}
                                  alt=""
                                />
                              </AtomGrid>
                            </Hidden>
                            <AtomGrid item xs={12} md={12} xl={6}>
                              <AtomCardContent>
                                <AtomStack
                                  spacing={2}
                                  alignItems={"center"}
                                  justifyContent={"center"}
                                >
                                  <AtomTypography
                                    sx={(theme) => ({
                                      width: "60%",
                                      padding: theme.spacing(1),
                                      textAlign: "center",
                                      borderBottom: `3px solid ${theme.palette.primary.main}`,
                                      fontWeight: "bold",
                                      fontSize: theme.typography.h5.fontSize,
                                      textTransform: "uppercase",
                                    })}
                                    variant="titleGame"
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
                              </AtomCardContent>
                            </AtomGrid>
                          </AtomGrid>
                        </AtomCard>
                      </AtomBox>{" "}
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
