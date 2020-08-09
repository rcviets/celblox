import React from "react";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import WaveLogo from '../../images/wave.svg';
import "./style.css";

const Angle = () => {
    return (
        <div>
            <div className="button">
                <Button className="buttonLM" size="lg">
                    Learn More
                </Button>{' '}
            </div>
            <Image className="waveImage" src={WaveLogo} fluid />
        </div>
    );
};

export default Angle;