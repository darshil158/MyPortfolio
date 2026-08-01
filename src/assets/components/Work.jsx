import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Responsive shopping website built using HTML and Bootstrap.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing skills and projects.",
    tech: ["React", "CSS", "Bootstrap"],
  },
  {
    title: "Student Manager",
    desc: "CRUD application using Local Storage.",
    tech: ["React", "LocalStorage", "Bootstrap"],
  },
  {
    title: "Weather App",
    desc: "Weather forecast using public API.",
    tech: ["HTML", "API", "Bootstrap", "JavaScript"],
  },
  {
    title: "Food Rescue",
    desc: "Food donation platform connecting donors and NGOs.",
    tech: ["HTML", "Firebase", "Bootstrap"],
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <Container>
        <h2 className="section-title fw800 fs48">My Projects</h2>

        <Row>
          {projects.map((project, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="project-card">
                <Card.Body className="d-flex flex-column justify-content-between align-items-center h-100 row-gap-1">
                  <Card.Title className="fw800">{project.title}</Card.Title>

                  <Card.Text className="fw500">{project.desc}</Card.Text>

                  <div className="mb-3">
                    {project.tech.map((item, i) => (
                      <Badge bg="info" className="me-2 info" key={i}>
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between align-items-bottom column-gap-2">
                    <Button 
                    size="sm" 
                    className="btn1 py-2 px-5 fw800">
                      Live
                    </Button>

                    <Button
                      size="sm"
                      className="btn2 py-2 px-5 fw800"
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Work;
