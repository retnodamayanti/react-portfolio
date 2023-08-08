import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }


    console.log('Form data:', { name, email, message });
  };

  const isValidEmail = (email) => {
    // 
    return true;
  };

  return (
    <section className="contact">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
