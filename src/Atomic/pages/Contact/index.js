import { React, useState } from "react";
import Title from "../../../components/Title";
import "./styles.css";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
import TitleCatogery from "../../molecules/TitleCatogery";
import TemplateContact from "../../templates/TemplateContact";
import AtomTextField from "../../atoms/AtomTextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  AtomTextField: {
    marginBottom: "15px",
    width: "100%",
    borderRadius: "10px",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <TemplateContact
      name={
        <AtomTextField
          className={classes.AtomTextField}
          id="outlined-basic"
          variant="outlined"
          label="Họ tên"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      }
      title={
        <AtomTextField
          className={classes.AtomTextField}
          id="outlined-basic"
          variant="outlined"
          label="Tiêu đề"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></AtomTextField>
      }
      content={
        <AtomTextField
          className={classes.AtomTextField}
          id="outlined-basic"
          variant="outlined"
          label="Nội dung liên hệ"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></AtomTextField>
      }
      button={
        <ButtonStyle1
          className={classes.button}
          label="Gửi yêu cầu"
        ></ButtonStyle1>
      }
    ></TemplateContact>
  );
};

export default Contact;
