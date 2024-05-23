import React, { useState } from 'react';

import '@/assets/Css/components/contactForm.css';



const ContactForm = () => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <form className='FormContainer' onSubmit={handleSubmit}>
        <div className="NamemailContainer">  
            <div className='NameContact'>
                <label htmlFor="name"></label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder='Votre nom & prénom'
                value={formData.name} 
                onChange={handleChange} 
                required 
                />
            </div>
            <div className='EmailContact'>
                <label htmlFor="email"></label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Votre Email'
                value={formData.email} 
                onChange={handleChange} 
                required 
                />
            </div>
        </div>
      <div>
        <label htmlFor="message"></label>
        <textarea 
        className='MessageForm'
          id="message" 
          name="message"
          placeholder='Écrivez votre message'
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>
      <button className='SubmitButton' type="submit">Envoyer le message</button>
    </form>
  );
};

export default ContactForm;
