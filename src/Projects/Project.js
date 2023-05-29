import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./set.css";
import faceimg from "./images/Project1.png";
import chatimg from "./images/Project2.png";
import webscrapimg from "./images/Project3.png";
import feedimg from "./images/Project4.png";

const Container = styled.div`
  color: white;
  text-align: center;
  justify-content: center;
  font-family: Poppins;
  margin-top: 38vh;
  h1 {
    overflow: hidden;
    font-size: 3em;
    color: greenyellow;
    font-weight: 600;
  }
  img {
    width: 250px;
    border: 2px solid greenyellow;
    border-radius: 10px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: greenyellow;
  }
`;

const Card = styled.div`
  height: 300px;
  width: 300px;
`;
const Project = () => {
  return (
    <Container data-scroll-section>
      <h1 id="prop">Projects</h1>
      <div style={{ marginTop: "10vh" }}>
        <Row>
          <Col sm style={{ padding: "50px" }}>
            <div className="contbox">
              <img src={faceimg} />
              <a
                href="https://github.com/revuss/Attendance-with-opencv"
                target="_blank"
              >
                <p style={{ padding: "50px" }}>
                  <b>Attendance Monitoring System</b>
                  <br />
                  Used OpenCv for capturing of live image to compare the
                  face-time to the image in database files provided.
                </p>
              </a>
            </div>
          </Col>
          <Col sm style={{ padding: "50px" }}>
            <div className="contbox">
              <img src={chatimg} />
              <a
                href="https://github.com/revuss/Chat-application"
                target="_blank"
              >
                <p style={{ padding: "50px" }}>
                  <b>Chat Application with Firebase</b>
                  <br />A real-time Chat application made using of google
                  firebase along with task management system, Learning module
                  and books to download
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm style={{ padding: "50px" }}>
            <div className="contbox">
              <img src={feedimg} />
              <a
                href="https://github.com/revuss/feedbackWithFlask"
                target="_blank"
              >
                <p style={{ padding: "50px" }}>
                  <b>Feeback System</b>
                  <br />
                  Feedback System made using with web technologies with used
                  framework of Flask with Python for managing of simple data for
                  each groups.
                </p>
              </a>
            </div>
          </Col>
          <Col sm style={{ padding: "50px" }}>
            <div className="contbox">
              <img src={webscrapimg} />
              <a href="#none">
                <p style={{ padding: "54px" }}>
                  <b>Web Scrapping</b>
                  <br />
                  Extracting data and from a news website with automation using
                  selenium webdrivers using python
                </p>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Project;
