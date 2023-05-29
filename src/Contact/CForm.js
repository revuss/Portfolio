import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Background } from "react-parallax";
import Swal from "sweetalert2";

const CForm = () => {
  const [user_email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2i1edhy",
        "template_3hfzy2d",
        form.current,
        "cBryIh7THf4DwvEub"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Sent", "I recieved you message", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      className="justify-content-center"
      data-scroll-section
      style={{ marginBottom: "10vh", marginTop: "28vh", fontFamily: "Poppins" }}
    >
      <Row>
        <h1
          style={{
            fontWeight: "700",
            color: "greenyellow",
            textAlign: "center"
          }}
        >
          Contact Me
        </h1>
      </Row>
      <Row>
        <p style={{ color: "white", textAlign: "center" }}>
          Fill in the fields
        </p>
      </Row>
      <Col sm>
        <form ref={form} onSubmit={sendEmail}>
          <Row className="justify-content-center mt-4">
            <input
              type="email"
              name="user_email"
              required
              placeholder="E-mail"
              style={{
                color: "white",
                border: "2px greenyellow solid ",
                borderRadius: "10px",
                width: "60vw",
                padding: "10px",
                background: "black"
              }}
            />
          </Row>
          <Row className="justify-content-center mt-4">
            <textarea
              required
              name="message"
              type="text"
              placeholder="Message"
              style={{
                border: "2px greenyellow solid ",
                borderRadius: "10px",
                width: "60vw",
                padding: "10px",
                color: "white",
                background: "black"
              }}
            />
          </Row>
          <Row className="justify-content-center mt-4">
            <Button
              type="submit"
              value="send"
              style={{
                background: "greenyellow",
                border: "none",
                padding: "10px",
                width: "150px",
                color: "white",
                fontWeight: "800"
              }}
            >
              Send Message
            </Button>
          </Row>
        </form>
      </Col>

      <Col sm>
        <Row className="justify-content-center mt-4">
          <p style={{ textAlign: "center" }} className="mt-5">
            <a
              href="mailto:sarathrevv@gmail.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sarathrevv@gmail.com
            </a>
          </p>
        </Row>
        <Row className="justify-content-center mt-1">
          <p style={{ textAlign: "center" }}>
            <a
              href="tel:+918500430354"
              style={{ textDecoration: "none", color: "white" }}
            >
              +91 8500430354
            </a>
          </p>
        </Row>
        <Row className="justify-content-center mt-1">
          <p style={{ textAlign: "center" }}>
            <a
              href="mailto:sarathrevv@gmail.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              @Linked In
            </a>
          </p>
        </Row>
      </Col>
      <Row>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://github.com/revuss?tab=repositories"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            @Git Hub
          </a>
        </p>
      </Row>
      <Row style={{ height: "20vh" }}></Row>
    </Container>
  );
};
export default CForm;
