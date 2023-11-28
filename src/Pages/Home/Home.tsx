import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Aside from "../../Bar/Aside/Aside";
import { CustomTokenPayload } from "../Login/Logout";

const Home = ({ bar }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar si hay un token en el localStorage y si el rol es "admin"
    const userRole = getRol();
    if (userRole === "1") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []); // El segundo parámetro de useEffect es un arreglo de dependencias. Al pasar un arreglo vacío, el efecto se ejecutará solo una vez al montar el componente.

  const getRol = () => {
    const isToken = localStorage.getItem("token");
    if (isToken != null) {
      let rol = jwtDecode<CustomTokenPayload>(isToken).User.rol;
      console.log("Rol: ", rol);
      return rol;
    } else {
      return null;
    }
  };

  const itemsBuscaBar = [
    { path: "/", label: "BARES" },
    { path: "/buscar", label: "BUSCAR" },
    { path: "/login", label: "MI SESION" },
    // Agrega la ruta "ADMIN" solo si el usuario es administrador
    ...(isAdmin ? [{ path: "/admin", label: "ADMIN" }] : []),
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
