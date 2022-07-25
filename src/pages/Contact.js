import { React, useState } from "react";
import SquareStripeButton from "../Atomic/molecules/SquareStripeButton";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import { styled } from "@mui/material/styles";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import Divider from "../Atomic/molecules/Divider";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomStack from "../Atomic/atoms/AtomStack";
import AtomContainer from "../Atomic/atoms/AtomContainer";

const ContainerContact = styled(AtomContainer)({
  minHeight: "100vh",
});

const PaperStyles = styled(AtomPaper)(({ theme }) => ({ width: "60%" }));

const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <TemplatePage
      content={
        <ContainerContact
          maxWidth={"xl"}
          sx={(theme) => ({
            paddingTop: theme.spacing(2),
          })}
        >
          <AtomStack alignItems={"center"}>
            <PaperStyles>
              <AtomCardContent sx={{ paddingBottom: "0" }}>
                <TitleCatogery title="Liên hệ" />
                <Divider />
                <AtomStack spacing={2} alignItems="center">
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
                  />{" "}
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
                  <AtomGrid item>
                    <SquareStripeButton label="Gửi yêu cầu">
                      {" "}
                    </SquareStripeButton>
                  </AtomGrid>
                </AtomStack>{" "}
              </AtomCardContent>
            </PaperStyles>
          </AtomStack>
        </ContainerContact>
      }
    ></TemplatePage>
  );
};

export default Contact;
