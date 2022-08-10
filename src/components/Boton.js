import React from 'react';
import '../stylesheets/Boton.css';

function Boton ({ texto , esBotonClick , manejarClick } ) {
  return (
    <button 
    className={esBotonClick ? 'botonClick' : 'botonReiniciar' }
    onClick ={manejarClick}>
    {texto}
    </button>
  )
}

export default Boton