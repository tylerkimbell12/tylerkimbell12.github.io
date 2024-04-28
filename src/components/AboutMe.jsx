import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

import Logo from "../images/profile.jpg"

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                <p>Welcome to my digital portfolio! I’m Tyler Kimbell, and I’m thrilled you’re here to explore my professional journey and creative ventures. This space is crafted to provide an insight into my world, where technology meets innovation, and each project is a milestone in my career.</p>
                <p>I am deeply immersed in the realm of computer science, with a keen focus on software development and cloud infrastructure. The purpose of this digital portfolio is to offer a holistic view of my professional identity. It serves to showcase my abilities and accomplishments while illustrating the values and dedication I bring to my work. Here, you will find a detailed resume, a showcase of selected projects that highlight my skills, insights into my interests that drive my continuous learning, and various ways to connect with me.</p>
                <p>Visitors to this portfolio will encounter a well-organized collection of resources. Each section, from detailed case studies of my projects to personal interests that inspire my technological pursuits, is designed to provide a comprehensive understanding of my capabilities and professional philosophy. Whether you're a potential collaborator, employer, or just curious about my work, I hope this portfolio engages you and sparks a conversation. Welcome, and enjoy exploring my professional world!</p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={Logo}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
