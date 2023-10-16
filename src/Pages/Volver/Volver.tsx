import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Volver = ({ updateBar, barDefault }) => {
    useEffect(() => {
        // Restablece el objeto bar con los valores predeterminados
        updateBar(barDefault);
    }, [updateBar, barDefault]);

    // Redirige a la página principal
    return <Navigate to="/" />;
}

export default Volver;
