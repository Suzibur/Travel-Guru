import React, { useContext, useState } from 'react';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../header2/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Facebook from '../../Icon/fb.png';
import Google from '../../Icon/google.png'
import { initializeLogin, resetPassword } from './loginManager';
import { handleGoogleSignIn, createNewUser, signInWithEmailPass } from './loginManager'
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    initializeLogin();
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [confirmPass, setConfirmPass] = useState(true);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignnedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        success: false
    });
    const googleSignIn = () => {
        handleGoogleSignIn().then(res => {
            handleResponse(res, true);
        })
    }
    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isLengthRequired = e.target.value.length > 5;
            const isCharRequired = /\d{1}/.test(e.target.value);
            isValid = isLengthRequired && isCharRequired;
        }
        if (isValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        //For password confirmation.
        if (e.target.name === 'confirmPassword') {
            if (e.target.value === user.password) {
                const newUserInfo = { ...user };
                newUserInfo[e.target.name] = e.target.value;
                setConfirmPass(true);
                setUser(newUserInfo);
            } else {
                setConfirmPass(false);
            }
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password && user.confirmPassword) {
            if (confirmPass) {
                createNewUser(user.firstName, user.email, user.confirmPassword)
                    .then(res => {
                        handleResponse(res, true);
                    })
            }
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailPass(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        if (redirect === true) {
            console.log(res)
            setUser(res);
            setLoginUser(res);
            history.replace(from);
        }
    }
    const [forgetPassword, setForgetPassword] = useState(false);
    const reset = (email) => {
        resetPassword(email);
        setForgetPassword(true);
    }
    return (
        <Container>
            <Header></Header>
            {forgetPassword && <h1 style={{ textAlign: 'center' }}>Check your email for reset password.</h1>}
            <Row className="d-flex justify-content-center">
                <Col className="login" md={4}>
                    {newUser ? <h2>Create Account</h2> :
                        <h2>Login</h2>
                    }
                    <form onSubmit={handleSubmit}>
                        {newUser && <input onBlur={handleBlur} required name="firstName" type="text" placeholder="First Name" />}
                        {newUser && <input onBlur={handleBlur} required name="lastName" type="text" placeholder="Last Name" />}
                        <input onBlur={handleBlur} required type="email" name='email' placeholder="Email here" />
                        <input onBlur={handleBlur} required type="password" name="password" id="" placeholder="Password" />
                        {newUser && <input onBlur={handleBlur} required type="password" name="confirmPassword" id="" placeholder="Confirm Password" />}
                        {!newUser &&
                            <p onClick={() => reset(user.email)} style={{ color: 'orange', cursor: 'pointer' }}><strong>Forget password?</strong></p>
                        }
                        {!confirmPass && <p style={{ color: 'red' }}><strong>Password didn't match</strong></p>}
                        {
                            newUser ? <input className="submit_btn" type="submit" value="Create Account" /> :
                                <input className="submit_btn" type="submit" value="Login" />
                        }
                    </form>
                    <Col className="alternate">
                        {
                            newUser ? <p>Already have an account? <span onClick={() => setNewUser(!newUser)}>Login</span></p> :
                                <p>Didn't have an account? <span onClick={() => setNewUser(!newUser)}>Create Account</span></p>
                        }
                    </Col>
                    <p>or</p>
                    <Row className="d-flex justify-content-center">
                        <Col md={2}>
                            <Image className="social-icon" src={Facebook}></Image>
                        </Col>
                        <Col md={2}>
                            <Image onClick={googleSignIn} className="social-icon" src={Google}></Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;