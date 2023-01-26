import React from 'react'

const ComponenteB = (props) => {
  return (
    <div>
    {console.log(props.Conectado)}
      <h3>{(props) ? "Contacto en Línea":"Contacto No Disponible"}</h3>
    </div>
  )
}

export default ComponenteB

