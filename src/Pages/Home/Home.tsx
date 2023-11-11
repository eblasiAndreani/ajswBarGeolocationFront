import React from "react";
import Aside from "../../Bar/Aside/Aside";

const Home = ({ bar }) => {
  const itemsBuscaBar = [
    { path: "/", label: "BARES" },
    { path: "/buscar", label: "BUSCAR" },
    { path: "/login", label: "MI SESION" },
  ];

  const itemsBar = [
    { path: "/reserva", label: "RESERVAR" },
    { path: "/volver", label: "VOLVER" },
  ];

  return (
    <div>
      <Aside
        title={bar.name}
        imageSrc={bar.logo}
        menuItems={bar.id === 0 ? itemsBuscaBar : itemsBar}
      />
    </div>
  );
};

export default Home;
