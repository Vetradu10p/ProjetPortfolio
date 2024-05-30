import React, { useState } from 'react'

import ImgContact from "@/assets/Images/Contact.jpg"
import Linkedin from '@/assets/Images/Linkedin.png';
import Instagram from '@/assets/Images/Instagram.png';

export default function Contact() {

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
    <section className='ContactContainer'>
        <div className='ImgContainer'>
            <img className='ImgContact' src={ ImgContact } alt="" />
        </div>

        <div className='WriterContactContainer'>
            <div className="TitleButton">
            <h2 className='H2Contact' id='Contact'>Travaillez avec moi</h2>
            <a href="@/assets/Cv/cv.pdf" download="cv.pdf">
              <button className='CvButton'>Télécharger mon CV</button>
            </a>            
          </div>
            <p className='PContact'>Connectons-nous et discutons de votre projet de conception web dès aujourd'hui !</p>
            <div className='logoContactContainer'>
              <a href="https://www.linkedin.com/in/micka%C3%ABl-azede/" target="_blank" rel="noopener noreferrer">
              <img className='Linkedin' src={Linkedin} alt="Logo de Linkedin" />
              </a>            
              <a href="https://www.instagram.com/vetraphoto/" target="_blank" rel="noopener noreferrer">
              <img className='Instagram' src={Instagram} alt="Logo d'Instagram" />
              </a>          
            </div>

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
      <div className='MessageContact'>
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
        </div>
    </section>
  )
}