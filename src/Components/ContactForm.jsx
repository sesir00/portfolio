import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; // Import the CSS file for styling

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_f00qyvo', // Replace with your EmailJS service ID
        'template_bl4ihcd', // Replace with your EmailJS template ID
        form.current,
        'NR6OUO-dR9yn07sPY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          e.target.reset(); // Clear the form fields after submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-form-container" id='contactform'>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
