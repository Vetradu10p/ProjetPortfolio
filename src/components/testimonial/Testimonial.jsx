import React from 'react'
import TestimonialCard from '@/components/testimonialCard/TestimonialCard';

export default function Testimonial() {
  return (
    <section className='SectionTestimonial' id='Testimonial'>
      <h2 className='H2Testimonial'>Temoignages</h2>
      <p className='PTestimonial'>Voici quelques témoignages impressionnants de personnes qui m'ont fréquenté !</p>
      <TestimonialCard />
    </section>
  )
}
