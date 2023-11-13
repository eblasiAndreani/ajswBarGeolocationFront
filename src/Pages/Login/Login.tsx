import React, { useState, useEffect } from "react";

import Registrarse from "./Registrarse";
import Logout from "./Logout";
import LoginPage from "./LoginPage";
import Swal from "sweetalert2";

const Login = () => {
  const [token, setToken] = useState(null);

  const [registrar, setRegistrar] = useState(false);

  const validateToken = () => {
    const isToken = localStorage.getItem("token");
    setToken(isToken);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div>
      validateToken
      {registrar ? (
        <Registrarse setRegistrar={setRegistrar} />
      ) : token ? (
        <Logout setToken={setToken} token={token} />
      ) : (
        <LoginPage setToken={setToken} setRegistrar={setRegistrar} />
      )}
    </div>
  );
};

export default Login;
