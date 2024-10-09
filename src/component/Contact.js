import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgwjazg"); // Use your Formspree form ID
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    if (state.succeeded) {
      setSubmitted(true);
    }
  };

  return (
    <div data-aos="fade-up">
      <h2>Contact Me</h2>
      {submitted && <p>Thank you for your message!</p>}
      <form onSubmit={handleFormSubmit}>
        <div className='Form'>
          <label>First Name:</label>
          <input
            className='input'
            type="text"
            name="firstName"
            required
          />
          <ValidationError field="firstName" errors={state.errors} />
        </div>
        <div className='Form'>
          <label>Last Name:</label>
          <input
            className='input'
            type="text"
            name="lastName"
            required
          />
          <ValidationError field="lastName" errors={state.errors} />
        </div>
        <div className='Form'>
          <label>Email:</label>
          <input
            className='input'
            type="email"
            name="email"
            required
          />
          <ValidationError field="email" errors={state.errors} />
        </div>
        <div className='Form'>
          <label>Message:</label>
          <textarea
            className='message'
            name="message"
            required
          />
          <ValidationError field="message" errors={state.errors} />
        </div>
        <div className='Form'>
          <label>Gender:</label>
          <select
            className='input'
            name="gender"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;