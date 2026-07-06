import React from 'react'

const CardProjetos = (props) => {
    // Tambem vai ter os links para o projeto, que vai aparecer no evento hover apenas
  return (  
    <div className='d-flex flex-column text-center'>
   
    <figure ><img src={props.img} width={200} height={200} alt="" /></figure>
    <p>{props.projeto}</p>
    </div>
  )
}

export default CardProjetos