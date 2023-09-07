import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import NavbarMenu from "./NavbarMenu";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("eror....", error);
        const errorDescription = error.response.data.message;
        console.log("error creating account", errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <NavbarMenu />
      <div className="Auth-Form ">
        {errorMessage && <Alert className="my-3">{errorMessage}</Alert>}
        <Form onSubmit={handleSignupSubmit}>
          <Form.Group className="my-4">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              required={true}
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
            Signup
          </Button>
        </Form>
        <p>
          Avez-vous un compte?
          <Link to="/login">
            <Button variant="info" size="sm" className="ml-2">
              Login
            </Button>
          </Link>
        </p>
        <p>
          Retour à l'accueil
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

export default SignupPage;
