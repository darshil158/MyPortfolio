import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container className="d-flex flex-column justify-content-center align-items-center row-gap-2 mt-5 mb-0">
        <h4 className="fs34 fw800 text-uppercase">&lt;Darshil /&gt;</h4>

        <p className="fs18 fw400 fst-italic">© 2026 PortFolio. All Rights Reserved.</p>

        <div className="d-flex justify-content-center align-items-center column-gap-4">
          <i className="bi bi-github social-icon"></i>

          <i className="bi bi-linkedin social-icon"></i>

          <i className="bi bi-instagram social-icon"></i>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
