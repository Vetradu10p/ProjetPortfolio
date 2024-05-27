import React from 'react'
import Accordion from '@/components/accordion/Accordion';

import '@/assets/Css/components/services.css';


export default function Services() {
  return (
    <section className='ServicesContainer' id='Services'>
      <div className="WriterContainerServices">
        <h2 className='H2Services'>Mes Services</h2>
        <p className='PServices'>Voici les services que je peux vous proposer:</p>
            <Accordion />
      </div>
      
    </section>
  )
}