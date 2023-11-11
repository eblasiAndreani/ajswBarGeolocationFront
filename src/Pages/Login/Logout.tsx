import React from "react";
import { Card, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import VerPedido from "../VerPedido/VerPedido";

const Logout = ({ setToken, token }) => {
  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem("token");
    setToken(null);
  };

  const name = () => {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub;
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
