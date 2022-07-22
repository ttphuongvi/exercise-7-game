import { React, useState } from "react";
import SquareStripeButton from "../Atomic/molecules/SquareStripeButton";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import { styled } from "@mui/styles";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import AtomBox from "../Atomic/atoms/AtomBox";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import AtomCard from "../Atomic/atoms/AtomCard";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import Divider from "../Atomic/molecules/Divider";
import AtomCardAction from "../Atomic/atoms/AtomCardAction";
import theme from "styled-theming";
import AtomPaper from "../Atomic/atoms/AtomPaper";

const ContainerContact = styled("div")({
  minHeight: "100vh",
});

const PaperStyles = styled(AtomPaper)({
  width: "60%",
  marginTop: "20px",
});

const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <TemplatePage
      content={
        <ContainerContact>
          <AtomGrid container justifyContent={"center"}>
            <PaperStyles>
              <AtomCardContent sx={{ paddingBottom: "0" }}>
                <TitleCatogery title="Liên hệ" />
                <Divider />
                <AtomGrid container spacing={2} justifyContent="center">
                  <AtomGrid item xs={12}>
                    {" "}
                    <AtomTextField
                      fullWidth
                      id="outlined-basic"
                      variant="outlined"
                      label="Họ tên"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </AtomGrid>
                  <AtomGrid item xs={12}>
                    {" "}
                    <AtomTextField
                      fullWidth
                      id="outlined-basic"
                      variant="outlined"
                      label="Tiêu đề"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    ></AtomTextField>{" "}
                  </AtomGrid>
                  <AtomGrid item xs={12}>
                    {" "}
                    <AtomTextField
                      fullWidth
                      id="outlined-basic"
                      variant="outlined"
                      label="Nội dung liên hệ"
                      multiline
                      rows={3}
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    ></AtomTextField>{" "}
                  </AtomGrid>
                  <AtomGrid item>
                    <SquareStripeButton label="Gửi yêu cầu">
                      {" "}
                    </SquareStripeButton>
                  </AtomGrid>
                </AtomGrid>{" "}
              </AtomCardContent>
            </PaperStyles>
          </AtomGrid>
        </ContainerContact>
      }
    ></TemplatePage>
  );
};

export default Contact;
