import React from "react";
import email from "../../assets/images/email.gif";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zx6aiz5",
        "template_h9vkmoh",
        form.current,
        "lBOWjAhKbhsqa9P-Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="pt-16">
      <h1 className="text-2xl text-center text-primary">Connect with me</h1>
      <div className="flex">
        <img src={email} alt="" />
        <div>
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
