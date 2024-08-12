import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import tastyKitchen from "../../Assets/Projects/tastyKitchen.png";
import api from "../../Assets/Projects/api.png";
import passMan from "../../Assets/Projects/psm.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tastyKitchen}
              isBlog={false}
              title="Tasty Kitchens"
              description="Developed a responsive restaurant ordering web app using React, JavaScript, HTML, and CSS. Implemented user authentication, multi-page routing with React Router, and dynamic data fetching via APIs. Managed state with Local Storage for cross-device persistence and seamless user experience. Username: henry, password: henry_the_developer"
              ghLink="https://github.com/rankesh2004/Tasty_Kitchens"
              demoLink="https://tasty-kitchen-36e28.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={passMan}
              isBlog={false}
              title="Password Manager"
              description="Developed a user-friendly Password Manager using React.js, enabling users to securely add, edit, and delete passwords with data integrity validation. Styled the application with CSS for an engaging interface and efficient state management."
              ghLink="https://github.com/rankesh2004/PasswordManager"
              demoLink="https://rankeshpm.ccbp.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Twitter API"
              description="Integrated Twitter API using Node.js and Express, creating custom routes and controllers for effective API handling. Utilized the twitter NPM package to fetch tweets, post tweets, and retrieve user data."
              ghLink="https://github.com/rankesh2004/Twitter-Api"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Application"
              description="Developed a persistent to-do application with CRUD operations using HTML, CSS, JavaScript, and Bootstrap. Displayed and styled tasks with dynamic updates through JavaScript DOM manipulation, utilized arrays and objects, and ensured state persistence with Local Storage on reloads."
              ghLink="https://github.com/rankesh2004/TodoList"
              demoLink="https://todolistrr.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
