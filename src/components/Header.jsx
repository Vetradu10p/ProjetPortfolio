import React from 'react'
import '@/assets/Css/header.css'

export default function Header() {
  return (
    <div className='Headercontainer'>
        <img src="" alt="logo" />
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Services</li>
                <li>Projets</li>
                <li>Temoignages</li>
                <li className='lastli'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
