import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#">
          <span className="logo fw600">&lt;Darshil /&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs18 fw600">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#work">
              Work
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button className="resume-btn ms-lg-3 fw600 fs14">Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
