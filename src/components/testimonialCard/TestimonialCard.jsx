import React, { useState } from 'react';
import TestimonialService from '@/_Service/Testimonial.service';
import '@/assets/Css/components/testimonialCard.css';

export default function TestimonialCard() {
  const [expanded, setExpanded] = useState({});

  const toggleExpansion = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ul className='TestimonialCardContainer'>
      {TestimonialService.GetAllTestimonial().map((testimonial, index) => {
        const isExpanded = expanded[index];
        const description = isExpanded
          ? testimonial.description
          : `${testimonial.description.substring(0, 120)}${testimonial.description.length > 120 ? '...' : ''}`;

        return (
          <li key={index} className='TestimonialCard'>
            <img src={testimonial.cover} alt={testimonial.Name} />
            <h3>{testimonial.Name}</h3>
            <h4>{testimonial.job}</h4>
            <p className='PTestimonialCard'>{description}</p>
            {testimonial.description.length > 120 && (
              <button className='ToggleButton' onClick={() => toggleExpansion(index)}>
                {isExpanded ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
