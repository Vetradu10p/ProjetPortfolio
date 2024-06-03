import React from 'react'
import LogoPortfolio from '@/assets/Images/LogoPortfolio.avif'

export default function Footer() {
  return (
    <div className='FooterContainer'>
      <img src={LogoPortfolio} alt="logo" />
      <p className='PFooter'>
        &copy; Tous droits reservés
      </p>
    </div>
  )
}
