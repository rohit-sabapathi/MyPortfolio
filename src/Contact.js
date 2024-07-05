import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  }

  return (
    <section className='contact1' id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br/>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:<br/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:<br/>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
