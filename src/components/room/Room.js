import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Room.css'
import Star from '../../Icon/star_1_.png';

const Room = (props) => {
    const{img, price, rating, review, about} = props.room
    return (
        <Row className="hotel-list">
            <Col md={5}>
                <Image className='hotel-room' src={img}></Image>
            </Col>
            <Col md={7}>
                <h5>{about}</h5>
                <p>4 guests   2 bedrooms   2 beds   2 baths <br/>
                Wif Air conditioning Kitchen <br/>
                Cancellation fexibility availiable <br/>
                <Image style={{width:'20px'}} src={Star}></Image><b>{rating}/({review}) ${price}/night</b>
                </p>
            </Col>
        </Row>
    );
};

export default Room;