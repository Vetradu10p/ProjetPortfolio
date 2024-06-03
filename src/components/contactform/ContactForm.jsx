import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide.");
      setSuccess('');
      return;
      
    }

    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceId, templateId, formData, userId)
      .then((res) => {
        setSuccess("Votre message a bien été envoyé, il sera traité au plus vite.");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setError('');
        e.target.reset();
      })
      .catch((err) => {
        console.error('Il y a une erreur', err);
        setError("Une erreur s'est produite, veuillez réessayer.");
        setSuccess('');
      });
  };

  return (
    <form className='FormContainer' onSubmit={handleSubmit}>
      <div className="NamemailContainer">  
        <div className='NameContact'>
          <label htmlFor="name">Nom & Prénom</label>
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
          <label htmlFor="email">Email</label>
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
      <div className='MessageContact'>
        <label htmlFor="message">Message</label>
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
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button className='SubmitButton' type="submit">Envoyer le message</button>
    </form>
  );
};

export default ContactForm;