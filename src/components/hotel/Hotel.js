import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import hotelData from '../../fakeData/hotelData';
import Header from '../header2/Header';
import Map from '../map/Map';
import Room from '../room/Room';
import spotData from '../../fakeData/spotData'
import './Hotel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const {spotName} = useParams();
    const selectedSpot = spotData.find(data => data.spotName === spotName);
    console.log(selectedSpot);
    return (
        <Container>
            <Header></Header>
            <Row className="d-flex justify-content-around">
                <Col md={6}>
                    <h1>Stay in {spotName}</h1>
                    {hotelData.map(data => <Room room={data}></Room>)}
                </Col>
                <Col md={5}  className='google-Map'>
                    <Map center={selectedSpot.map}></Map>
                </Col>
            </Row>
        </Container>
    );
};

export default Hotel;