import React from "react";
import Container from "../components/Container";
import Card from "../components/Card/card.js";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header/Header.js";

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <h1>About Padra Lee</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span class="border border-white"></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p class="lr-3">Hi, my name is Padra Lee. I am 29 years old and working as a Medical Assistant/PVP(Pre-Visit Planner)
                                    at Froedtert & Medical College Hospital for the Cardiology team. I am also currently an Interior Designer Student at MATC.
                                    I have 19 years of experince in Customer Service and enjoy designing layout/space planning on software programs. As for
                                    future asperations, my goal is to graduate on time with high honors and learn a design software program that is not in the 
                                    school curriculum.</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default About;