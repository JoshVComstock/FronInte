import React from 'react'
import Portada from '../../../components/ui/portada';

const TareaPendiente = () => {
  const handleClick = () => {
    console.log('Botón de tareas pendientes clickeado!');
  };

  return (
    <div>
      <Portada name="Pendiente" onClick={handleClick} />
    </div>
  );
}

export default TareaPendiente;