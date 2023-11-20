import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import ServiceUser from "../../service/User/UserService";
import Swal from "sweetalert2";

const Registrarse = ({ setRegistrar }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    user: "",
    pass: "",
    role: "3",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistrarse = async () => {
    try {
      await ServiceUser.autenticacion(formData);
      Swal.fire({
        title: "Genial!!",
        text: "Ya tienes un usuario, inicia sesion",
        icon: "success",
        confirmButtonText: "ok",
      });
    } catch (error) {
      console.error("Error al realizar la llamada", error);
      Swal.fire({
        title: "Ha surgido un error!",
        text: "Te pedimos disculpas, vuelve a intentarlo",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
    setRegistrar(false);
  };

  const handleAtras = async () => {
    setRegistrar(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "32rem" }} className="bg-secondary text-black">
        <Card.Body>
          <h1 style={{ textAlign: "center" }}>Registrarse</h1>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="text-white">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="nombre"
                onChange={handleInputChange}
              />
              <Form.Label className="text-white">Apellido</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                placeholder="apellido"
                onChange={handleInputChange}
              />
              <Form.Label className="text-white">User</Form.Label>
              <Form.Control
                type="text"
                name="user"
                placeholder="user"
                onChange={handleInputChange}
              />
              <Form.Label htmlFor="inputPassword5" className="text-white">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="pass"
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
              <Button variant="success" onClick={() => handleRegistrarse()}>
                Registrarse
              </Button>
              <Button variant="success" onClick={() => handleAtras()}>
                Atras
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Registrarse;
