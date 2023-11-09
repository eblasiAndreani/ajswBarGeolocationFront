import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";

const Logout = (setToken, token) => {
  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem("token");
    setToken(null);
  };

  const name = () => {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken.sub;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "40rem" }} className="bg-secondary text-black">
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>
            ¡Has iniciado sesión con éxito!
          </h1>
          <h1 style={{ textAlign: "center" }}>Usuario: {name()}</h1>
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
  );
};

export default Logout;
