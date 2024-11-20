import React from 'react'
import Portada from '../../../components/ui/portada';

const Notificacion = () => {
  const handleClick = () => {
    console.log('Botón de notificaicones clickeado!');
  };

  return (
    <div>
      <Portada name="Historial" onClick={handleClick} />
    </div>
  );
}

export default Notificacion;