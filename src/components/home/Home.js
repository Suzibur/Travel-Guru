import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../header1/Header';
import './Home.css'
import spotData from '../../fakeData/spotData'
import Spot from '../spot/Spot';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <Col className="home">
            <Container>
                <Header></Header>
                <Col className="spot">
                    <h1>Spot Available Now</h1>
                    <Row className="d-flex justify-content-around">
                        {spotData.map(data => <Spot spot={data}></Spot>)}
                    </Row>
                </Col>
            </Container>
        </Col>
    )
};

export default Home;