import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/book-search.jpg";
import note from "../../Assets/Projects/noteTaker.jpg";
import snkrs from "../../Assets/Projects/og-snkrs.jpg";
import employee from "../../Assets/Projects/employee.png";
import pizza from "../../Assets/Projects/pizza.jpg";
import recipe from "../../Assets/Projects/recipe.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Search"
              description="A MERN stack application using Google Books API that allows a user to login, search books and save favorites."
              ghLink='https://github.com/Amir-Hackett/book-search'
              demoLink='https://mern-book-convert-74118dbaeea8.herokuapp.com/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taker"
              description="An Express.js application for taking notes."
              ghLink='https://github.com/Amir-Hackett/deep-thoughts'
              demoLink='https://ah-deep-thoughts.herokuapp.com/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snkrs}
              isBlog={false}
              title="OG Snkrs"
              description="This interactive SPA MERN stack web application utilizes HTML, CSS, JavaScript, MongoDB, Express, React, Node, GraphQL and Node Package Manager to build a responsive sneaker platform where sneakerheads and shoe enthusiasts have the ability to view latest releases, compare prices, and choose the best resale site option to purchase from."
              ghLink='https://github.com/Amir-Hackett/OG-SNKRS'
              demoLink='https://og-snkrs.herokuapp.com/'            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL"
              ghLink="https://github.com/Amir-Hackett/employee-tracker"
              demoLink="https://github.com/Amir-Hackett/employee-tracker#video-description"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Search"
              description="A self-aware riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza."
              ghLink='https://github.com/Amir-Hackett/pizza-hunt'
              demoLink='https://amhpizza.herokuapp.com/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="RecipEZ"
              description="An application that allows users to search for a recipe based on a recipe or a drink."
              ghLink='https://github.com/Amir-Hackett/RecipEZ'
              demoLink='https://amir-hackett.github.io/RecipEZ/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
