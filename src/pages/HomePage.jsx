import React from 'react'
import Header from "@/components/Header.jsx"
import Home from '@/components/Home'
import Footer from "@/components/Footer"
import Services from "@/components/Services"
import Work from "@/components/Work"

export default function HomePage() {
  return (
    <div>
        <Header />
        <div className="container">
          <Home />
          <Services/>
          <Work/>
          <Footer/>
        </div>
    </div>
  )
}

// #404040