import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs className="navbar bg-danger mb-3">
      <Container>
        <Nav className="d-flex gap-3">
<<<<<<< HEAD
          <h3 className="life-quest text-dark">
=======
        <h3 className="life-quest text-dark">
>>>>>>> e427b24551673506a250af55b64f058ff0ee5409
            Life<span className="text-danger">Quest</span>
          </h3>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
            Admin Login
          </Nav.Link>
          <Nav.Link to="/bloodbank" as={NavLink}>
            BloodBank
          </Nav.Link>
          <Nav.Link to="/team" as={NavLink}>
            Team Members
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}