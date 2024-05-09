import React, {useState} from 'react'
import Button from '@/components/Button'


export default function Card({element}) {
  return (
    <div>
        <img src={element.cover} alt={element.title} />
        <h3>{element.title}</h3>
        <p>{element.description}</p>
        <Button>Voir projet</Button>
    </div>
  )
}
