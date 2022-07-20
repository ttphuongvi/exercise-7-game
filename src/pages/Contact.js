import { React, useState } from "react";
import ButtonStyle1 from "../Atomic/molecules/ButtonStyle1";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import { styled } from "@mui/styles";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import AtomBox from "../Atomic/atoms/AtomBox";
import Container from "../Atomic/molecules/PageContainer";
import AtomGrid from "../Atomic/atoms/AtomGrid";

const Input = styled(AtomTextField)({
  marginBottom: "15px",
  width: "100%",
  borderRadius: "10px",
});

const Content = styled(AtomBox)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
});

const ContainerContact = styled(Container)({
  width: "60%",
});

const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <TemplatePage
      content={
        <Content>
          <ContainerContact>
            <TitleCatogery title="Liên hệ" />
            <AtomGrid container direction="column" alignItems="center">
              <Input
                id="outlined-basic"
                variant="outlined"
                label="Họ tên"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                id="outlined-basic"
                variant="outlined"
                label="Tiêu đề"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></Input>
              <Input
                id="outlined-basic"
                variant="outlined"
                label="Nội dung liên hệ"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></Input>

              <ButtonStyle1 label="Gửi yêu cầu"></ButtonStyle1>
            </AtomGrid>
          </ContainerContact>
        </Content>
      }
    ></TemplatePage>
  );
};

export default Contact;
