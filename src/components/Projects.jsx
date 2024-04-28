import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

import Alliant from "../images/alliant.jpg"
import Unity from "../images/unity.png"
import ReactImage from "../images/react.png"

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Projects"} id="about">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
              <img src={ReactImage} style={{height:"20rem", paddingBottom:"1rem"}}></img>
              <h3>E-Commerce Web App</h3>
               <p>Created a full stack web application hosted on AWS using express, react and DynamoDB. This included loading a dynamic product catalogue, handling payment, and creating an admin side of the platform to handle purchases and notify the user for shipping </p>
              </Container>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
              <img src={Alliant} style={{height:"20rem", paddingBottom:"1rem"}}></img>
              <h3>Senior Design Capstone</h3>
               <p>Created a Full Stack Web application that used React Express, Postgres, python, and the python ml library sklearn to predict and summarize the real estate market on a county level per month for our sponsors Alliant National. </p>
              </Container>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
                <img src={Unity} style={{height:"20rem", paddingBottom:"1rem"}}></img>
                <h3>Unity Game</h3>
               <p>Created top down action game for an Object Oriented class where I used Design patterns including observer, singleton, factory and Template in order to improve the scalibiilty and efficiency of the code. To do this I used C# and the unity engine.</p>
              </Container>
            </Col>
          </Row>
        </Container>
    </Element>
  );
}
