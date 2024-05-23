import React from 'react'
import '@/assets/Css/modalContent.css'
import imgHome from '@/assets/Images/imgHome.jpg'


export default function ModalContent() {
  return (
    <div className='ModalContainer'>
        <div className="LeftContent">
            <imgHome/>
        </div>
        <div className="RightContent">
            <h3 className='TitleModal'>Mickaël Azede</h3>
            <p className='ParagraphModal'>Bonjour à toi, si tu lis ceci, c'est que tu t'intéresses à moi (ou à mon portfolio). Je suis un mec tranquille, nouveau dans le domaine du développement, MAIS qui a soif d'apprendre!
               Je viens de finir ma formation de développeur web chez OpenClassroom et j'ai appris beaucoup de choses. Alors certes, je ne suis pas encore un expert, mais j'espère le devenir un jour (quel poète).
               De nature joyeuse et joviale, je ne pense pas manquer de bagout ni d'imagination. 
               <br />
               Mes passions ? (Je sais que tu ne m'as pas demandé, mais je fais comme si) : Les films, les séries, les mangas et les jeux vidéo. On peut dire que je suis un "Cinéphile-Otaku".
               Si ma personnalité te plaît pour me recruter (j'espère) ou me proposer un projet, n'hésite pas à m'envoyer un petit message dans la rubrique "contact" qui se trouve tout en bas de la page.</p>
        </div>
    </div>
  )
}
