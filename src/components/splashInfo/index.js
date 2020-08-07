import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MainPoints = () => {
    return (
        <div className="splashInfo">
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sustainable.</ListGroup.Item>
                    <ListGroup.Item>Durable.</ListGroup.Item>
                    <ListGroup.Item>Cost Effective.</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default MainPoints;