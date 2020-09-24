import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './components/booking/Booking';
import Login from './components/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Hotel from './components/hotel/Hotel';
export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
    return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path="/booking/:spotName">
            <Booking></Booking>
          </Route>
          <Route path="/spot">
            <Home></Home>
          </Route>
          <PrivateRoute path="/hotel/:spotName">
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
