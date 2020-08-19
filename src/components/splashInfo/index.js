import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Button from "react-bootstrap/Button";
import "./style.css";

const InfoCards = () => {
    return (
        <Container className="splash-info">
            <Row>
                <CardDeck>
                    <Col md={4}>
                        <Card className='pt-5'>
                            <Card.Img variant="top" src={require("../../images/contractorCard.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your Business</Card.Title>
                                <Card.Text>
                                    <p><span>&#10003;</span>    Speed of Construction<br />
                                        <span>&#10003;</span>    Consolidation of Trades<br />
                                        <span>&#10003;</span>    HVAC Reduction<br />
                                        <span>&#10003;</span>    Site Contention<br />
                                        <span>&#10003;</span>    Prescriptive Method<br />
                                        <span>&#10003;</span>    Risk Mitigation<br /></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Team Up
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='pt-2'>
                            <Card.Img variant="top" src={require("../../images/customerCard1.svg")} />
                            <Card.Body>
                                <Card.Title className="card-title">For Your World</Card.Title>
                                <Card.Text>
                                    <p><span>&#10003;</span>    100% Recyclable Blox<br />
                                        <span>&#10003;</span>    Made From Recycled Material<br />
                                        <span>&#10003;</span>    Chemical Free Manufacturing<br />
                                        <span>&#10003;</span>    Active C02 Reduction<br />
                                        <span>&#10003;</span>    Energy Efficient Architecture<br />
                                        <span>&#10003;</span>    Conservation of Forests and Wildlife<br /></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Get Started
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="pt-1">
                            <Card.Img variant="top" src={require("../../images/customerCard2.svg")} />
                            <Card.Body className="pt-3">
                                <Card.Title className="card-title">For Your Home</Card.Title>
                                <Card.Text>
                                    <p><span>&#10003;</span>    Noise Reduction<br />
                                        <span>&#10003;</span>    Save Up To 50% On Utilities<br />
                                        <span>&#10003;</span>    Lower Insurance Premiums<br />
                                                                    Resistant To:<br />
                                        <span>&#10003;</span>    Fires<br />
                                        <span>&#10003;</span>    Earthquakes<br />
                                        <span>&#10003;</span>    Hurricanes<br />
                                        <span>&#10003;</span>    Tornadoes<br /></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button className="rounded-0" size="lg" block>
                                    Join Us
                                    </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </CardDeck>
            </Row>
        </Container>
    );
}

export default InfoCards;