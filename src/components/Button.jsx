import React from 'react'
import '@/assets/Css/button.css'

export default function Button({onClick, children, className}) {
  return (
    <button className={ className } onClick={onClick}>
      {children}
    </button>
  )
}