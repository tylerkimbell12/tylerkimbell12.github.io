import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Col, Container,Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import { Icon } from "@iconify/react/dist/iconify.js";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <center>
        <Row className="mt-3 align-items-center">
            <Col>
            <a href="https://linkedin.com/in/tyler-kimbell" style={{color:"white"}}>

              <Icon icon="fa6-brands:linkedin" className="display-4" />
              </a>
            </Col>
            <Col>
            <a href="https://github.com/tylerkimbell12" style={{color:"white"}}>
              <Icon icon="fa6-brands:github"  className="display-4" />
              </a>
            </Col>
          </Row>
          </center>
        </Container>
      </StyledSection>
    </Element>
  );
}
