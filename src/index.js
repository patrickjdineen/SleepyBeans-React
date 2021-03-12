import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../src/assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
// import { AuthCheck, FirebaseAppProvider } from 'reactfire';
// import { firebaseConfig } from './firebase';

import { Home, Sleep, CreateAccount, CreateBaby, UpdateBaby, Nursery, Loginb} from './components';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'


ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
    <Router>
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        SleepyBeans
        </Link>
      </Navbar.Brand>
      
      <Nav.Link><Link to='/nursery'>Nursery</Link></Nav.Link> 
      <Nav.Link><Link to='/login'>Log In Firebase</Link></Nav.Link>
      <Nav.Link><Link to='/signup'>Sign Up Firebase</Link></Nav.Link>
      <Nav.Link><Link to='/loginb'>Log In Flask</Link></Nav.Link>
      <Nav.Link><Link to='/signupb'>Sign Up Flask</Link></Nav.Link>
    </Navbar>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sleep" component={Sleep} />
      <Route path='/login' component = {Login} />
      <Route path='/loginb' component = {Loginb} />
      <Route path='/signup' component = {Signup} />
      <Route path='/signupb' component = {CreateAccount} />
      <Route path='/createbaby' component = {CreateBaby} />
      <Route path='/update' component={UpdateBaby} />
      <PrivateRoute path='/nursery' component={Nursery} />
    </Switch>
    
    </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
