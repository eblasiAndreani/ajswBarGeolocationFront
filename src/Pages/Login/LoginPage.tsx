import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import ServiceLogin from "../../service/Login/LoginService";

const LoginPage = ({ setToken, setRegistrar }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      //Aca debemos hcer la llamada al pos
      /* const response = {
            data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlYmxhc2kiLCJpc3MiOiJnZW9iYXIiLCJpZCI6MywiZXhwIjoxNjk4MjcyNjk2fQ.hyPcSRpMexa-Z-utsVAA_U6HRrvUqNw_xbMkTNnfysI",
          }; */
      const response = await ServiceLogin.autenticacion(
        formData.username,
        formData.password
      );
      console.log("Este es el reespone" + response);
      localStorage.setItem("token", response);
      setToken(response);
    } catch (error) {
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
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Ingresar E-Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
              <Form.Label htmlFor="inputPassword5" className="text-white">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
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
