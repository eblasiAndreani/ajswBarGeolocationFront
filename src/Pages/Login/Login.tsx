import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [token, setToken] = useState(null);

  useEffect(() => {
    // Verificar si hay un token en localStorage al cargar el componente
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  const handleLogin = async () => {
    try {
      //Aca debemos hcer la llamada al pos
      const response = {
        data: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlYmxhc2kiLCJpc3MiOiJnZW9iYXIiLCJpZCI6MywiZXhwIjoxNjk4MjcyNjk2fQ.hyPcSRpMexa-Z-utsVAA_U6HRrvUqNw_xbMkTNnfysI",
      };
      localStorage.setItem("token", JSON.stringify(response));
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const name = () => {
    const decodedToken = jwtDecode(token.data);
    console.log(decodedToken);
    return decodedToken.sub;
  };

  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem("token");
  };

  return (
    <body>
      {token ? (
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
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Card style={{ width: "32rem" }} className="bg-secondary text-black">
            <Card.Body>
              <h1 style={{ textAlign: "center" }}>Iniciar Sesión</h1>
              <Form>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-white">
                    Ingresar E-Mail
                  </Form.Label>
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
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Text>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="success" onClick={() => handleLogin()}>
                    Ingresar
                  </Button>
                  <Button variant="success" onClick={() => handleLogin()}>
                    Registrarse
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </body>
  );
};

export default Login;
