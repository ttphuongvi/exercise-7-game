import { React, useState } from "react";
import Button from "./../../components/Button";
import Title from "./../../components/Title";
import "./styles.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <Title title="Liên hệ">
        <div className="div__container-form">
          <form className="form__container-contact">
            {" "}
            <div className="div__contact-label-input">
              <label className="label__content">
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
              <label className="label__content">
                Tiêu đề:
                <small className="start--red">*</small>
              </label>
              <input
                value={title}
                className="form__input input__contact"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div className="div__contact-label-input">
              <label className="label__content">
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
