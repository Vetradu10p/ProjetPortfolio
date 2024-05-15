import React from 'react'
import Accordion from '@/components/Accordion';

import '@/assets/Css/services.css';


export default function Services() {
  return (
    <div className='ServicesContainer' id='Services'>
      <div className="WriterContainerServices">
        <h2 className='H2Services'>Mes Services</h2>
        <p className='PServices'>Voici tous les services que je peux vous proposer:</p>
      </div>
        <>
            <Accordion />
        </>
    </div>
  )
}
