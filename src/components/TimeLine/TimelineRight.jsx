import React from 'react'

const TimelineRight = (props) => {
  return (
     <div className=" d-flex flex-row gap-3 position-relative justify-content-md-start col-12 col-md-6">
        
        <article className="article p-3">
          <small className="fw-light text-body-tertiary">{props.ano}</small>
          <header>{props.nome}</header>
          <p>{props.descricao}</p>
          <small>{props.graduacao}</small>
        </article>
 </div>
  )
}

export default TimelineRight