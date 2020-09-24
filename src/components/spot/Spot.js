import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Spot.css'

const Spot = (props) => {
    const { spotName, img } = props.spot;
    return (
        <Col md={4} className="photo-frame">
            <Col className="photo">
                <Image style={{ width: '100%' }} src={img} />
            </Col>
            <Col className="photo-details">
                <h2>{spotName}</h2>
                <Button variant="warning"><Link className="booking-btn" to={`/booking/${spotName}`} >Booking</Link></Button>
            </Col>
        </Col>
    );
};

export default Spot;