import React from 'react'
import LogoPortfolio from '@/assets/Images/LogoPortfolio.avif'


export default function Header() {
  return (
    <div className='Headercontainer'>
        <img src={LogoPortfolio} alt="logo" />
        <nav>
            <ul>
                <li><a href="#Home">Accueil</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Work">Projets</a></li>
                <li><a href="#Testimonial">Temoignages</a></li>
                <li className='lastli'><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}