import React, { useState } from 'react';
import Card from '@/components/card/Card';
import WorksService from '@/_Service/Works.service';

export default function Work() {
  return (
    <section className='WorkContainer' id='Work'>
      <h2>Mes Projets</h2>
      <p className='PWork'>Voici les projets que j'ai réalisés</p>
      <ul className='Listework'>
        {
          WorksService.GetAllWorks().map((work, index) =>
            <Card key={index} element={work}/>
          )
        }
      </ul>
    </section>
  );
}
