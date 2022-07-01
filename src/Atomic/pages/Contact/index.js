import { React, useState } from "react";
import Title from "../../../components/Title";
import "./styles.css";
import ButtonStyle1 from "../../molecules/ButtonStyle1";

const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <Title class="div__container--flex mr-t--100" title="Liên hệ">
        <div className="div__container-form">
          <form className="form__container-contact">
            {" "}
            <div className="div__contact-label-input">
              <label className="label__contact">
                Họ và tên:
                <small className="start--red">*</small>
              </label>{" "}
              <input
                value={name}
                className="input__contact"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div className="div__contact-label-input">
              <label className="label__contact">
                Tiêu đề:
                <small className="start--red">*</small>
              </label>
              <input
                value={title}
                className=" input__contact"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div className="div__contact-label-input">
              <label className="label__contact">
                Nội dung liên hệ:
                <small className="start--red">*</small>
              </label>
              <input
                value={content}
                className="input__contact input__content "
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                type="textarea"
              ></input>
            </div>
            <ButtonStyle1 label="Gửi yêu cầu"></ButtonStyle1>
          </form>
        </div>
      </Title>
    </div>
  );
};

export default Contact;
