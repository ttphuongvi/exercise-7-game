import { React, useState } from "react";
import Button from "../../atoms/Button";
import Title from "../../../components/Title";
import "./styles.css";
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
            <Button class="custom-btn btn-3 btn--margin">Gửi yêu cầu</Button>
          </form>
        </div>
      </Title>
    </div>
  );
};

export default Contact;
