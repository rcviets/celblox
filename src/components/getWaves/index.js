import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import WaveLogo from '../../images/wave.svg'

const Angle = () => {
    return (
        <Image className="waveImage" src={WaveLogo} fluid />
    );
};

export default Angle;