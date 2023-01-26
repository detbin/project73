import React from 'react';
import { useState } from 'react';
import '../styles/clock.scss';
import { useEffect } from 'react';

const Ejercicio = () => { 
  const DidMount=()=>{
    useEffect(() => {
      return () => {
        this.timerID=setInterval(
        ()=>this.tick(),1000);
      };
    }, []);
  }

  const WillUnmount=()=>{
    useEffect(() => {
      return () => {
        clearInterval (this.timerID)
      };
    },);
  }
 
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  }


  function actualizapersona() {
  setPersona({
  fecha: ('July,14,1979'),
  edad: 25,
  nombre: 'David',
  apellidos: 'suarez'
  })
  }

  const [persona, setPersona] = useState(initialState);
  return (
    <div>
      <h2>
        Hora Actual:
        {this.state.fecha.toLocaleTimeString()}
      </h2>
      <h3>Datos de la Persona</h3>
      <h2>Persona:{persona.nombre+' '+persona.apellidos}</h2>
      <h2>Fecha:{persona.fecha}</h2>
      <h2>Edad:{persona.edad}</h2>
      <button onClick={actualizapersona}>Nuevos Datos</button>
      </div>
  )
}

export default Ejercicio
