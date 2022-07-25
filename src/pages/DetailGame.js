import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DialogPlayGame from "../Atomic/molecules/DialogPlayGame";
import AtomCardMedia from "../Atomic/atoms/AtomCardMedia";
import CaptionGame from "../Atomic/molecules/CaptionGame";
import AtomBox from "../Atomic/atoms/AtomBox";
import TemplatePage from "../Atomic/templates/TemplatePage";
import AtomCardAction from "../Atomic/atoms/AtomCardAction";
import TitleCategory from "../Atomic/molecules/TittePage";
import Container from "../Atomic/molecules/PageContainer";
import { styled } from "@mui/material/styles";
import AtomTypography from "../Atomic/atoms/AtomTypography";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";

const ContainerDetaiGame = styled(Container)(({ theme }) => ({
  width: "60%",
  "&:hover": {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const PaperStyles = styled(AtomPaper)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CardAction = styled(AtomCardAction)({
  justifyContent: "center",
});

const DescriptionGame = styled(AtomTypography)({
  textAlign: "justify",
});

const CardMedia = styled(AtomCardMedia)({
  height: "50%,",
  paddingTop: "56.25%",
  // width: "100%",
  border: "3px solid #22394c",
  WebkitBoxShadow: "0px 2px 3px 1px rgb(0 0 0)",
  borderRadius: "5px",
  boxShadow: "0px 2px 3px 1px rgb(0 0 0)",
});

const DetailsGame = () => {
  let { params } = useParams();
  const [dataSource, setDataSource] = useState(null);
  // const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`https://game.phong940253.tk/games?id=${params}`).then((res) => {
      setDataSource(res.data[0]);
    });
  }, [params]);

  return (
    <AtomBox>
      {dataSource && (
        <TemplatePage
          content={
            <ContainerDetaiGame maxWidth={false}>
              <AtomStack>
                <PaperStyles>
                  <AtomBox
                    sx={(theme) => ({
                      padding: theme.spacing(2),
                    })}
                  >
                    <TitleCategory title="CHI TIẾT GAME"></TitleCategory>
                    <Divider />
                    <AtomStack spacing={2}>
                      <CardMedia
                        image={dataSource.image}
                        title={dataSource.caption}
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
                          link={dataSource.link}
                        />
                      </CardAction>
                    </AtomStack>
                  </AtomBox>
                </PaperStyles>
              </AtomStack>
            </ContainerDetaiGame>
          }
        ></TemplatePage>
      )}
    </AtomBox>
  );
};
export default DetailsGame;
