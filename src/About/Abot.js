import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ast.css";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
const Row1 = styled.div`
  margin-bottom: 50px;
  font-family: Poppins;
  h1 {
    color: white;
    font-weight: 700;
    text-align: center;
  }
  p {
    text-align: center;
    color: greenyellow;
  }
`;
const Abot = () => {
  return (
    <div data-scroll-section>
      <Container style={{ marginTop: "20vh" }}>
        <Row1 className="justify-content-center">
          <h1 id="Page2" style={{ overflowY: "hidden" }}>
            About Me
          </h1>
        </Row1>
        <br />
        <br />
        <div className="Aboutme-text-lines Justify-content-center">
          <Row1>
            <p>
              Aimable aspirant with graduation of masters in computer
              applications. Strong in Java, Python & C++ programming languages.
              Passionate about implementing and launching new projects with
              designing and building of APIs. Ability to focus, work and
              managing skills.
            </p>
          </Row1>
        </div>
        <div>
          <Row>
            <Col sm style={{ fontFamily: "Poppins" }}>
              <li>Resourceful in SDLC with STLC.</li>
              <li>Object Oriented model for programming approach.</li>
              <li>Time complexity and space complexity.</li>
              <li>
                Analyzing of Algorithms for approach of achieving and run-time
                complexity .
              </li>
              <li>Responsive Static and Dynamic Web Pages.</li>
            </Col>
            <Col sm>
              <li>Media queries in cascading stylesheet.</li>
              <li>
                Simple fast designing of CSS with Bootstrap and Tailwind CSS.
              </li>
              <li>
                CRUD operations of databases using of python, node.js and java.
              </li>
              <li>
                Designing of Excellence in PowerPoint, Word and blending of
                images in adobe photoshop.
              </li>
              <li>
                Designing of web pages and animations in adobe XD for UI/UX
                Design.
              </li>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Abot;
