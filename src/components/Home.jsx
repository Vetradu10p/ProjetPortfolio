import React, { useState } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

import imgHome from '@/assets/Images/imgHome.jpg';
import '@/assets/Css/home.css';
import '@/assets/Css/button.css';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className='HomeContainer' id='Home'>
      <div className="description">
        <h1 className='H1Home'>Je suis un développeur web doté d'un grand sens de l'humour et d'un esprit créatif !</h1>
        <p className='PHome'>Je suis un concepteur web passionné avec des années d'expérience dans la création de designs épurés et conviviaux. Je m'engage à fournir un travail de haute qualité qui répond aux besoins uniques de chaque client. Travaillons ensemble pour donner vie à votre vision en un rien de temps.</p>
        <div className='ButtonContainer'>
          <Button className='Button' onClick={handleOpenModal}>Mon histoire</Button>
          <a href='#Work' className='ButtonSpecial'>Mes projets</a>
        </div>
      </div>
      <div className='imgHomeContainer'>
        <img src={imgHome} alt="Photo de moi-même" />
      </div>
      <Modal isOpen={showModal} closeModal={handleCloseModal} />
    </div>
  )
}