import React from 'react'
import Header from "@/components/Header.jsx"
import Home from '@/components/Home'
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div>
        <Header />
        <div className="container">
          <Home />
          <Footer/>
        </div>
    </div>
  )
}

// #404040