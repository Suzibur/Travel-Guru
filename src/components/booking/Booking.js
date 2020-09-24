import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import spotData from '../../fakeData/spotData';
import './Booking.css';
import Header from '../header1/Header';
import { UserContext } from '../../App';

const Booking = () => {
    const [destination, setDestination] = useContext(UserContext);
    const { spotName } = useParams();
    const bookingSpot = spotData.find(spot => spot.spotName === spotName)
    const targetSpot = spotName;
    setDestination(targetSpot);
    return (
        <Col className="booking">
            <Container>
                <Header></Header>
                <Row className="spot-information d-flex justify-content-around">
                    <Col md={6}>
                        <h1 className="spot-title">{bookingSpot.spotName}</h1>
                        <p className="spot-text">{bookingSpot.aboutSpot}</p>
                    </Col>
                    <Col className="destination" md={4}>
                        <Form>
                            <p>Origin</p>
                            <input required type="text"></input>
                            <p>Destination</p>
                            <input required type="text" defaultValue={spotName}></input>
                            <Row className="d-flex justify-content-around">
                                <Col md={6}>
                                    <p>From</p>
                                    <input required type="date" name="" id="" />
                                </Col>
                                <Col md={6}>
                                    <p>To</p>
                                    <input required type="date" name="" id="" />
                                </Col>
                            </Row>
                            <Link to={`/hotel/${spotName}`}>
                                <input className="submit-btn" type="submit" value="Start Booking" />
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default Booking;