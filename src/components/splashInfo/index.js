import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Container from "react-bootstrap/Container";

const InfoCards = () => {
    return (
        <div className="splashInfo">
            <Container>
                <CardDeck>
                    <Card className='mr-5 pt-5'>
                        <Card.Img variant="top" src={require("../../images/contractorCard.svg")} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className='mr-5 pt-2'>
                        <Card.Img variant="top" src={require("../../images/customerCard1.svg")} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="pt-2">
                        <Card.Img variant="top" src={require("../../images/customerCard2.svg")} />
                        <Card.Body className="pt-3">
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
}

export default InfoCards;