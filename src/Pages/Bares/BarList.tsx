import React from 'react';
import { useNavigate  } from 'react-router-dom';// Importa useNavigate
import CardBar from '../../Common/CardBar/CardBar';
import LocalizacionService from '../../service/Localizacion/LocalizacionService';

const BarList = ({ bares, updateBar }) => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleClickOnCard = (bar) => {
    // Llama a la función updateBar con el objeto bar para actualizar el estado en App
    updateBar(bar);
    // Usa la función navigate para redirigir a la ruta /reserva
    navigate('/reserva');
  };
  
    return (
      <div className="bar-list">
        {bares.map((bar) => (
          <CardBar
            key={bar.id} // Asegúrate de tener una propiedad única en cada objeto bar (por ejemplo, "id")
            title={bar.name}
            address={<LocalizacionService lat={bar.latitude} lng={bar.longitude}/>}
            description={bar.description}
            imageUrl={bar.logo}
            onClick={() => handleClickOnCard(bar)}
          />
        ))}
      </div>
    );
  };
  
  export default BarList;