import React from "react";
import { Card, Button } from "react-bootstrap";
import VerPedido from "../VerPedido/VerPedido";
import { jwtDecode, JwtPayload } from "jwt-decode";

export interface CustomTokenPayload {
  jti: string;
  sub: string;
  authorities: string[];
  User: {
    id: number;
    user: string;
    pass: string;
    nombre: string;
    apellido: string;
    rol: string;
    guiduser: string;
  };
  iat: number;
  exp: number;
}

// Define la interfaz personalizada
export interface CustomTokenPayload extends JwtPayload {
  User: {
    id: number;
    user: string;
    pass: string;
    nombre: string;
    apellido: string;
    rol: string;
    guiduser: string;
  };
}

const Logout = ({ setToken, token }) => {
  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem("token");
    setToken(null);
  };

  const name = () => {
    // Usa la interfaz personalizada al decodificar el token
    const decodedToken = jwtDecode<CustomTokenPayload>(token);

    // Accede a las propiedades de User
    return decodedToken.User.nombre + " " + decodedToken.User.apellido;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          minHeight: "27vh",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "150px",
        }}
      >
        <Card style={{ width: "40rem" }} className="bg-secondary text-black">
          <Card.Body>
            <h1 style={{ textAlign: "center" }}>
              ¡Has iniciado sesión con éxito!
            </h1>
            <h1 style={{ textAlign: "center" }}>Usuario: {name()} </h1>
            <h1 style={{ textAlign: "center" }}>¿Deseas cerrar sesión?</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button variant="danger" onClick={() => handleLogout()}>
                Cerrar sesión
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <VerPedido />
    </div>
  );
};

export default Logout;
