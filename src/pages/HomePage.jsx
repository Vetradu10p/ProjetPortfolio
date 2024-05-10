import React from 'react'
import Header from "@/components/Header.jsx"
import Home from '@/components/Home'
import Services from "@/components/Services"
import Work from "@/components/Work"
import Testimonial from "@/components/Testimonial"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div>
        <Header/>
        <div className="container">
          <Home/>
          <Services/>
          <Work/>
          <Testimonial/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

// #404040