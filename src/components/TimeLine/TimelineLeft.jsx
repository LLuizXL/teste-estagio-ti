import React from 'react'

const TimelineLeft = (props) => {
  return (
     <div className="d-flex flex-row col-12 col-md-6 justify-content-md-end gap-3 end-0">
        <article className="article p-3">
          <small className="fw-light text-body-tertiary">{props.ano}</small>
          <header>{props.nome}</header>
          <p>{props.descricao}</p>
          <small>{props.graduacao}</small>
        </article>
        
 </div>
  )
}

export default TimelineLeft