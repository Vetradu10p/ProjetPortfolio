import React from 'react'
import Button from "@/components/button/Button"
import ContactForm from '@/components/contactForm/ContactForm';


import ImgContact from "@/assets/Images/Contact.jpg"
import Linkedin from '@/assets/Images/Linkedin.png';
import Instagram from '@/assets/Images/Instagram.png';

import '@/assets/Css/components/contact.css';

export default function Contact() {
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
            < ContactForm />
        </div>
    </section>
  )
}
