import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // FORM VALIDATION
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!message) {
      validationErrors.message = 'Message is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted');
    setIsSubmitted(true);

    // Reset form fields and errors
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };



  return (
    <div class="bg3">
      <form className='signup' onSubmit={handleSubmit}>
      <div className='container'>
          <div className='form'>
        <h2>CONTACT US</h2>
        <div className='form-group'>
          <label htmlFor='name'></label>
          <input
            type='text'
            id='name'
            placeholder='Name: Write your name here..'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className='error'>{errors.name}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='email'></label>
          <input
            type='email'
            id='email'
            placeholder='Email: Let us know how to contact you back..'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='message'></label>
          <textarea
            id='message'
            placeholder='Message: What would you like to tell us..'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className='error'>{errors.message}</span>}
        </div>
        <button type='submit'>Send Message</button>
        {isSubmitted && <p className='success'>Form submitted successfully!</p>}
        </div>
        </div>
        <div className='container'>
          <div className='form'>
            <h2 className='main-text'>Sign up today</h2>
            <form className='register-form'>
              <div className='form-group'>
                <input type='text' placeholder='Full Name' />
              </div>
              <div className='form-group'>
                <input type='password' placeholder='Password' />
              </div>
              <div className='form-group'>
                <input type='email' placeholder='Email Address' />
              </div>
              <button className='btn'>SIGN ME UP!</button>
            </form>
          </div>
        </div>
      </form>
    
    </div>
  );
};

export default Contact;

