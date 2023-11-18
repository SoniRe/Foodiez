import React from "react";
import contactImage from "./../../assets/about-us-image.avif";

const Contact = () => {
  return (
    <div id="contact">
      <img src={contactImage} alt="" />
      <div id="overlay"></div>
      <div id="contact-left">
        <h1>Get In Touch</h1>
        <p>
          Need assistance or have a question? Contact our friendly team for
          quick and helpful support
        </p>
      </div>

      <div id="contact-right">
        <label>Name</label>
        <input type="text" placeholder="Eg:Aditya Verma" />
        <label>Email</label>
        <input type="email" placeholder="xyz@gmail.com" />
        <label>Tell Us More</label>
        <textarea placeholder="Write Here..." cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
