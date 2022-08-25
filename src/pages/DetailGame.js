import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DialogPlayGame from "../Atomic/molecules/DialogFullWidth/DialogPlayGame";
import AtomCardMedia from "../Atomic/atoms/AtomCardMedia";
import CaptionGame from "../Atomic/molecules/CaptionGame";
import AtomBox from "../Atomic/atoms/AtomBox";
import AtomCardAction from "../Atomic/atoms/AtomCardAction";
import TitleCategory from "../Atomic/molecules/TittePage";
import { darken, styled } from "@mui/material/styles";
import AtomTypography from "../Atomic/atoms/AtomTypography";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import { BOXSHAW_PAPER } from "../store/const";

const PaperStyles = styled(AtomPaper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  boxShadow: BOXSHAW_PAPER,
}));

const CardAction = styled(AtomCardAction)({
  justifyContent: "center",
});

const DescriptionGame = styled(AtomTypography)({
  textAlign: "justify",
});

const CardMedia = styled(AtomCardMedia)(({ theme }) => ({
  height: "500px",
  // paddingTop: "56.25%",
  border: ` 1px solid ${darken(theme.palette.primary.main, 0.7)}`,
  borderRadius: "5px",
  boxShadow: ` 0px 2px 3px 1px ${darken(theme.palette.primary.main, 0.9)}`,
}));

const DetailsGame = () => {
  let { params } = useParams();
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("listGame"));

    data.map((item) => {
      if (parseInt(params) === item.id) setDataSource(item);
      return null;
    });
  }, [params]);

  return (
    <AtomBox>
      {dataSource && (
        <AtomContainer maxWidth={false} sx={{ minHeight: "100vh" }}>
          <AtomStack>
            <PaperStyles>
              <AtomBox
                sx={(theme) => ({
                  padding: theme.spacing(2),
                })}
              >
                <TitleCategory title="CHI TIẾT GAME"></TitleCategory>
                <Divider />
                <AtomContainer
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  maxWidth={"md"}
                >
                  <AtomStack spacing={2}>
                    <CardMedia
                      component="img"
                      image={dataSource.image}
                      title={dataSource.caption}
                      onError={(e) => {
                        const imgDefault = "/images/default.jpg";

                        e.target.src = imgDefault;
                      }}
                    ></CardMedia>
                    <AtomStack spacing={1}>
                      <CaptionGame>{dataSource.caption}</CaptionGame>
                      <AtomTypography variant="subtitle2">
                        {" "}
                        Ngày phát hành {dataSource.release}
                      </AtomTypography>
                      <Divider />
                      <DescriptionGame>
                        {dataSource.description}
                      </DescriptionGame>
                    </AtomStack>

                    <CardAction>
                      <DialogPlayGame
                        caption={dataSource.caption}
                        link={
                          dataSource.link ||
                          "https://codepen.io/HunorMarton/full/xxOMQKg"
                        }
                      />
                    </CardAction>
                  </AtomStack>
                </AtomContainer>
              </AtomBox>
            </PaperStyles>
          </AtomStack>
        </AtomContainer>
      )}
    </AtomBox>
  );
};
export default DetailsGame;
