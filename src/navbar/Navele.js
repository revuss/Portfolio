import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PDF from "./document.pdf";
import "./styl.css";
import styled from "styled-components";

const Row = styled.div`
  font-family: Orbitron;
  text-align: center;
  color: #9ef01a;
  letter-spacing: 6px;
  h1 {
    font-weight: 600;
    font-size: 3.7em;
  }
  h2 {
    font-weight: 600;
    font-size: 2.5em;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 102vh;
`;
const Navele = () => {
  return (
    <Container data-scroll-section>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ margin: "90px" }}
      >
        <Navbar.Brand href="#home">
          <strong>Revus</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href={PDF} target="_blank">
              Resume
            </Nav.Link>
            <Nav.Link href="mailto:sarathrevv@gmail.com">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Row style={{ marginTop: "16vh" }} data-scroll data-scroll-speed="3">
        <h2>sarath</h2>
        <h1>Revv</h1>
      </Row>
      <br />
    </Container>
  );
};
export default Navele;
