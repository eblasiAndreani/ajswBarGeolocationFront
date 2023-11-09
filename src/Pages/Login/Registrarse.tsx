import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import ServiceUser from "../../service/User/UserService";

const Registrarse = ({ setRegistrar }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    user: "",
    pass: "",
    role: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistrarse = async () => {
    // Display the user's input in the console
    console.log("User Input:", formData);
    alert("Mira el console log");
    try {
      const response = await ServiceUser.autenticacion(formData);
    } catch (error) {
      console.error("Error al realizar la llamada", error);
    }
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
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label
                controlId="exampleForm.ControlInput1"
                className="text-white"
              >
                Nombre
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="nombre"
                onChange={handleInputChange}
              />
              <Form.Label
                controlId="exampleForm.ControlInput1"
                className="text-white"
              >
                Apellido
              </Form.Label>
              <Form.Control
                type="text"
                name="surname"
                placeholder="apellido"
                onChange={handleInputChange}
              />
              <Form.Label
                controlId="exampleForm.ControlInput1"
                className="text-white"
              >
                User
              </Form.Label>
              <Form.Control
                type="text"
                name="user"
                placeholder="user"
                onChange={handleInputChange}
              />
              <Form.Label
                controlId="exampleForm.ControlInput1"
                htmlFor="inputPassword5"
                className="text-white"
              >
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
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Registrarse;