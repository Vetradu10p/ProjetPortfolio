import React, { useState } from 'react';
import Card from '@/components/Card';

import WorksService from '@/_Service/Works.service';

import '@/assets/Css/work.css';


export default function Work() {


  // return (
  //   <section className='WorkContainer' id='Work'>
  //     <h2>Mes Projets</h2>
  //     <p className='PWork'>Voici les projets que j'ai réalisés</p>
  //     <ul className='Listework'>
  //       {
  //         WorksService.GetAllWorks().map((work) =>
  //           <Card  element={work}/>
  //         )
  //       }
  //     </ul>
  //   </section>
  // );
}
