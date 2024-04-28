import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import Guitar from "../images/guitar.jpg"
import Mountain from "../images/flatIrons.jpg"

import Basketball from "../images/basketball.jpg"


const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Interests() {
    return(<>
    <Element name={"Interests"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Interests</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <img src={Guitar} style={{height:"20rem", paddingBottom:"1rem"}}></img>
               <p>I enjoy playing guitar listening to music, especially bluegrass and blues music. </p>
              </Container>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
              <img src={Mountain} style={{height:"20rem", paddingBottom:"1rem"}}></img>
               <p>I enjoy the outdoors, hiking and camping when the weather is nice enough </p>
              </Container>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
              <img src={Basketball} style={{height:"20rem", paddingBottom:"1rem"}}></img>
               <p>I like watching and plahying sports. I keep up with the NFL and NBA and enjoy playing pick up basketball </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
    </>)
}