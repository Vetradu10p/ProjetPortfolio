import React from 'react'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div>
      <div className="description">
        <h1>Je m'appelle Mickaël, et je suis une concepteur web dotée d'un grand sens de l'humour et d'une expertise créative !</h1>
        <p>Je suis un concepteur web passionné avec des années d'expérience dans la création de designs épurés et conviviaux. Je m'engage à fournir un travail de haute qualité qui répond aux besoins uniques de chaque client. Travaillons ensemble pour donner vie à votre vision en un rien de temps.</p>
        <Button>Mon histoire</Button>
        <Button>Mes projets</Button>
      </div>
    </div>
  )
}
