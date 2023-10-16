import React, { useEffect, useState } from 'react';

const LocalizacionService = ({ lat, lng }) => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Realiza la solicitud de geocodificación inversa cuando se monta el componente
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBQMqYztlbGu5culuNHx1wxAd0AHTtfJ8I`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK' && data.results.length > 0) {
          const result = data.results[0];
          const formattedAddress = result.formatted_address;
          setAddress(formattedAddress);
        }
      })
      .catch((error) => {
        console.error('Error al realizar la geocodificación inversa', error);
      });
  }, [lat, lng]);

  return <div>{address}</div>;
};

export default LocalizacionService;