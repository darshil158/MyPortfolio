import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <h2 className="section-title fs48 fw800">Contact Me</h2>

        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Your Subject" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={5} placeholder="Enter Your Message Here..." />
              </Form.Group>

              <Button className="hero-btn">Send</Button>
            </Form>
          </Col>

          <Col lg={6}>
            <div className="contact-info d-flex flex-column justify-content-center align-items-center row-gap-2">
              <h4 className="fs34 fw800">Let's Connect</h4>

              <p className="fs18 fw600">darshil@example.com</p>

              <p className="fs18 fw600">+91 9876543210</p>

              <p className="fs18 fw600">Surat, Gujarat</p>

              <p className="fs18 fw600">
                <a href="#" target="_blank">
                  <i className="bi bi-github"></i> GitHub
                </a>
              </p>

              <p className="fs18 fw600">
                <a href="#" target="_blank">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
