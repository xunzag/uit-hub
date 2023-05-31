import React from 'react';
import backgroundImage from '../images/bg-signup.jpg';
import '../contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="title">Contact Us</h1>
          <p className="subtitle">Leave a Comment</p>
        </div>
        <form className="form">
        <form className="form">
      <form className="form">
        <div className="group">
          <input placeholder="‎" type="text" required="" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="group">
          <input placeholder="‎" type="email" id="email" name="email" required="" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="group">
          <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
          <label htmlFor="comment">Comment</label>
        </div>
        <button type="submit">Submit</button>
      </form>
      </form>
        </form>
      </div>
    </div>
  );
};

export default Contact;
