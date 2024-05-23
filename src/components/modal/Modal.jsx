import React from 'react';
import ReactModal from 'react-modal';

import ImgHome from '@/assets/Images/imgHome.jpg';
import Linkedin from '@/assets/Images/Linkedin.png';
import Instagram from '@/assets/Images/Instagram.png';



import '@/assets/Css/modal.css';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="ModalContainer">
        <div className="ImgContainer">
          <img className='Myself' src={ImgHome} alt="Photo de moi-même" />
          <div className="IconContainer">
          <a href="https://www.linkedin.com/in/micka%C3%ABl-azede/" target="_blank" rel="noopener noreferrer">
            <img className='Linkedin' src={Linkedin} alt="Logo de Linkedin" />
          </a>            
          <a href="https://www.instagram.com/vetraphoto/" target="_blank" rel="noopener noreferrer">
            <img className='Instagram' src={Instagram} alt="Logo d'Instagram" />
          </a>          
          </div>
        </div>

        <div className="WriterContainer">
          <h3 className='TitleModal'>Que dire sur moi</h3>
          <p className='Paragraph'>Bonjour à toi, si tu lis ceci, c'est que tu t'intéresses à moi (ou à mon portfolio). Je suis un mec tranquille, nouveau dans le domaine du développement, MAIS qui a soif d'apprendre !
            Je viens de finir ma formation chez OpenClassroom et j'ai appris beaucoup de choses. Alors certes, je ne suis pas encore un expert, mais le devenir un jour, j'espère (quel poète).
            De nature joyeuse et joviale, je ne pense pas manquer de bagout ni d'imagination. 
          </p>
          <p className='Paragraph'>
            Mes passions ? (Je sais que tu ne m'as pas demandé, mais je fais comme si) : les films, les séries, les mangas et les jeux vidéo. On peut dire que je suis un "Cinéphile-Otaku".
            Si ma personnalité te plaît, n'hésite pas à m'envoyer un petit message dans la rubrique "contact" qui se trouve tout en bas de la page.
          </p>
          </div>
      </div>
    </ReactModal>
  );
}

export default Modal;