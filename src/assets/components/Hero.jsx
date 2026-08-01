import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

// import img1 from "./img/1.jpeg";
// import img2 from "./img/2.png";
import img3 from "./img/3.jpeg";
import img4 from "./img/4.jpeg";
import img5 from "./img/5.jpg";
function Hero() {
  return (
    <Carousel className="hero-carousel my-4" interval={5000}>
      <Carousel.Item>
        <section className="hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="intro">Hello, I'm</p>

                <h1 className="fw800">Darshil</h1>

                <h2 className="fw600">Full Stack Developer</h2>

                <p className="hero-text">
                  I build responsive and modern web applications using
                  React, Bootstrap and JavaScript.
                </p>

                <Button className="me-3 hero-btn">Hire Me</Button>

                <Button variant="outline-light" className="hero-btn-outline">
                  RESUME
                </Button>
              </Col>

              <Col lg={6} className="text-center">
                <img src={img5} alt="Profile" className="hero-image" />
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section className="hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="intro">3rd Year College Student</p>

                <h1 className="fw800">Darshil</h1>

                <h2 className="fw600">Web Developer</h2>

                <p className="hero-text">
                  Creating beautiful, user-friendly websites with modern design principles.
                </p>

                <Button className="me-3 hero-btn" href="#work">
                  View Work
                </Button>
              </Col>

              <Col lg={6} className="text-center">
                <img src={img4} alt="Design" className="hero-image" />
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>

      <Carousel.Item>
        <section className="hero">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="intro">Let's Build Together</p>

                <h1 className="fw800">Building the Future</h1>

                <h2 className="fw600">Modern Web Applications</h2>

                <p className="hero-text">
                  Passionate about creating fast, responsive and scalable web
                  applications.
                </p>

                <Button className="hero-btn" href="#contact">Contact Me</Button>
              </Col>

              <Col lg={6} className="text-center">
                <img src={img3} alt="Developer" className="hero-image" />
              </Col>
            </Row>
          </Container>
        </section>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
