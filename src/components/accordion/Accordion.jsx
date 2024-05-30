import React, { useState } from 'react';
import websiteImage from '@/assets/Images/Website.jpg'; 
import Photography from '@/assets/Images/Photography.jpg'; 

const accordionData = [
  {
    title: 'Developpement web',
    content: 'Vous voulez un site internet, je suis là',
    image: websiteImage,
    icon: 'fa-globe'
  },
  {
    title: 'Photographie',
    content: 'Vous avez besoin de photos professionnelles ou même personnelles, je suis aussi là',
    image: Photography,
    icon: 'fa-camera'
  }
];

const AccordionItem = ({ title, content, icon, isOpen, onClick }) => (
  <li className="AccordionItem">
    <div className={`AccordionTitle ${isOpen ? 'active' : ''}`} onClick={onClick}>
      <i className={icon}></i> {title}
    </div>
    {isOpen && (
      <div className="AccordionContent">
        <p>{content}</p>
      </div>
    )}
  </li>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const activeImage = activeIndex !== null ? accordionData[activeIndex].image : null;

  return (
    <div className="AccordionContainer">
      <ul className="accordion">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            icon={item.icon}
            isOpen={index === activeIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </ul>
      {activeImage && (
        <div className="ImageContainer">
          <img src={activeImage} alt={`Image pour ${accordionData[activeIndex].title}`} />
        </div>
      )}
    </div>
  );
};

export default Accordion;