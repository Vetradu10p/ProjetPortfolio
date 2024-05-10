import React, {useEffect, useState} from 'react'
import Card from "@/components/Card"


export default function Work() {
  
  const [data, setData] = useState(null)
  
  
  useEffect(()=>{
    const getData = () => {
      try{
        fetch("../datas/cards.json", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then(response => 
          response.json()
        ).then(data => console.log(data))
      }catch(error){
        console.error("Error fetching data: ", error)
      }
    }
  
    getData()
  },[])

  return (
    <div>
        <h2 id='Work'>Mes Projets</h2>
        <p>Voici les projets que j'ai réalisés</p>
        <div>
          {
            data?.map((elt, index)=> <Card key={index} element={elt}/>)
          }
        </div>
    </div>
  )
}
