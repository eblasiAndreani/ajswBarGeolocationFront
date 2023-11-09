import React, { useState } from "react";

import Registrarse from "./Registrarse";
import Logout from "./Logout";
import LoginPage from "./LoginPage";

const Login = () => {
  const [token, setToken] = useState(null);

  const [registrar, setRegistrar] = useState(false);

  return (
    <div>
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
