import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import { styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import AtomStack from "../atoms/AtomStack";
import AtomCard from "../atoms/AtomCard";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomCardAction from "../atoms/AtomCardAction";
import ButtonSquareStripe from "../molecules/ButtonSquareStripe";

const DescriptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  display: "-webkit-box",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    WebkitLineClamp: 4,
  },
  [theme.breakpoints.up("xxl")]: {
    WebkitLineClamp: 5,
  },
  [theme.breakpoints.up("xxxl")]: {
    WebkitLineClamp: 6,
  },
}));

const CaptionGameSlider = styled(AtomTypography)(({ theme }) => ({
  width: "60%",
  padding: theme.spacing(1),
  textAlign: "center",
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  fontWeight: "bold",
  textTransform: "uppercase",
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
                  justifyContent: "center",
                  position: "relative",
                  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
                })}
              >
                <AtomBox
                  component="img"
                  src={value.image || "/images/default.jpg"}
                  onError={(e) => {
                    const imgDefault = "/images/default.jpg";

                    e.target.src = imgDefault;
                  }}
                  sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "blur(3px)",
                    webkitFilter: " blur(3px)",
                    // backgroundColor: theme.palette.background.default,
                    position: "absolute",
                  })}
                ></AtomBox>
                <AtomBox>
                  <AtomBox
                    sx={{ width: "70vw", position: "relative", zIndex: 99 }}
                  >
                    <AtomCard
                      elevation={0}
                      sx={{ boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px" }}
                    >
                      <AtomGrid container alignItems={"center"}>
                        <AtomGrid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={6}
                          xl={6}

                          // xxl={6}
                        >
                          <AtomCardMedia
                            sx={(theme) => ({
                              height: `calc( 100vh - ${theme.mixins.toolbar.minHeight}px - 100vh/1.5)`,

                              [theme.breakpoints.up("sm")]: {
                                height: `calc( 100vh - ${theme.mixins.toolbar.minHeight}px - 100vh/2)`,
                              },

                              [theme.breakpoints.up("xxl")]: {
                                height: `calc( 100vh - ${theme.mixins.toolbar.minHeight}px - 100vh/3)`,
                              },
                              [theme.breakpoints.up("xxxl")]: {
                                height: `calc( 100vh - ${theme.mixins.toolbar.minHeight}px - 100vh/4)`,
                              },
                            })}
                            component="img"
                            onError={(e) => {
                              const imgDefault = "/images/default.jpg";

                              e.target.src = imgDefault;
                            }}
                            image={value.image}
                            alt=""
                          />
                        </AtomGrid>

                        <AtomGrid
                          item
                          xs={12}
                          md={12}
                          lg={6}
                          xl={6}

                          // xxl={6}
                        >
                          <AtomCardContent>
                            <AtomStack
                              spacing={1}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <CaptionGameSlider variant="titleGame">
                                {value.caption}
                              </CaptionGameSlider>

                              <DescriptionGameSlider>
                                {value.description}
                              </DescriptionGameSlider>
                              <AtomCardAction>
                                <ButtonSquareStripe
                                  label="Xem chi tiết"
                                  onClick={() => {
                                    navigate(`/${value.id}`);
                                  }}
                                />
                              </AtomCardAction>
                            </AtomStack>
                          </AtomCardContent>
                        </AtomGrid>
                      </AtomGrid>
                    </AtomCard>
                  </AtomBox>
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
