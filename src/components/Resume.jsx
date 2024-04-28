import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import ResumeImage from "../images/resume.png"

// import Resume form "../images/resume.png"

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Resume() {
    return(<>
    <Element name={"Resume"} id="about">
      <StyledAboutMe className="section">
        <Container>
        <Container className="d-flex">
            <Title>
              <h2>Resume</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Container>
          <center>
            <img src={ResumeImage} style={{height:"60rem", paddingBottom:"1rem"}}></img>
          </center>
          </Container>
        </Container>
      </StyledAboutMe>
    </Element>
    </>)
}