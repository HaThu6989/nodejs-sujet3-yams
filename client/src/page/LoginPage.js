import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { AuthContext } from "../context/auth.context";
import NavbarMenu from "../page/NavbarMenu";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, requestBody)
      .then((response) => {
        const jwt = response.data.authToken;
        console.log("Login was sucessful. JWT token: ", jwt);

        storeToken(jwt);
        authenticateUser();

        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log("error loggin in...", errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <NavbarMenu />
      <div className="Auth-Form ">
        {errorMessage && <Alert className="my-3">{errorMessage}</Alert>}
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="my-4">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="my-2">
            Login
          </Button>
        </Form>

        <p>
          Avez-vous un compte ?
          <Link to="/signup">
            <Button variant="info" size="sm" className="ml-2">
              Signup
            </Button>
          </Link>
        </p>

        <p>
          Retour à l'accueil ?
          <Link to="/">
            <Button variant="info" size="sm" className="ml-2">
              Accueil
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
