import React from 'react'
import '@/assets/Css/button.css'

export default function Button({children, className}) {
  return (
    <div className={ className }>{children}</div>
  )
}
