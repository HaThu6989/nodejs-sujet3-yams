import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import logoutIcon from "../assets/logout.svg";

function NavbarMenu() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow p-1">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="font-weight-bolder text-white" to="/" as={Link}>
            Accueil
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/yams"
            as={Link}
          >
            Yams
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/patriesWinner"
            as={Link}
          >
            Pâtisseries gagnées
          </Nav.Link>
        </Nav>

        {!isLoggedIn && (
          <Nav>
            <Nav.Link
              className="font-weight-bolder text-white"
              to="/login"
              as={Link}
            >
              <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/32/000000/external-login-100-most-used-icons-flaticons-lineal-color-flat-icons.png" />
              Login
            </Nav.Link>
            <Nav.Link
              className="font-weight-bolder text-white"
              to="/signup"
              as={Link}
            >
              <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/32/000000/external-register-nursing-flaticons-flat-flat-icons.png" />
              Signup
            </Nav.Link>
          </Nav>
        )}

        {isLoggedIn && (
          <Nav>
            <Nav.Link className="font-weight-bolder text-white" disabled>
              Bienvenue, {user.email}!
            </Nav.Link>
            <Button
              variant="secondary"
              className="font-weight-bolder text-white"
              onClick={logOutUser}
            >
              <img
                src={logoutIcon}
                alt="logoutIcon"
                width="32"
                height="32"
                className="mr-2"
              />
              Logout
            </Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMenu;
