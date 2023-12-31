import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import ServiceLogin from "../../service/Login/LoginService";
import Swal from "sweetalert2";

const LoginPage = ({ setToken, setRegistrar }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await ServiceLogin.autenticacion(
        formData.username,
        formData.password
      );
      const token = response.body.jwt.split(" ");
      localStorage.setItem("token", token[1]);
      setToken(token[1]);
    } catch (error) {
      Swal.fire({
        title: "Ha surgido un error!",
        text: "Te pedimos disculpas, vuelve a intentarlo",
        icon: "error",
        confirmButtonText: "ok",
      });
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegistrarse = () => {
    setRegistrar(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "32rem" }} className="bg-secondary text-black">
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>Iniciar Sesión</h1>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="text-white">Ingresar E-Mail</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                aria-describedby="passwordHelpBlock"
                onChange={handleInputChange}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="success" onClick={() => handleLogin()}>
                Ingresar
              </Button>
              <Button variant="success" onClick={() => handleRegistrarse()}>
                Registrarse
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
