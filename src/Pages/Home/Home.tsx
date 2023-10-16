import React from 'react';
import Aside from '../../Bar/Aside/Aside';

const Home = ({ bar }) => {
  const itemsBuscaBar = [
    { path: '/', label: 'BUSCAR' },
    { path: '/bares', label: 'BARES' },
    { path: '/nosotros', label: 'NOSOTROS' },
  ];

  const itemsBar = [
    { path: '/reserva', label: 'RESERVAR' },
    { path: '/vertragos', label: 'VER TRAGOS' },
    { path: '/volver', label: 'VOLVER' },
  ];

  return (
    <div>
      <Aside title={bar.name} imageSrc={bar.logo} menuItems={bar.id === 0 ? itemsBuscaBar : itemsBar} />
    </div>
  );
};

export default Home;