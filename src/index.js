import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../src/assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Nursery from './components/Nursery';
import UpdateBaby from './components/UpdateBaby';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import Sleep from './components/Sleep';
import CreateBaby from './components/CreateBaby';


ReactDOM.render(
  <React.StrictMode>
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
      <Nav.Link><Link to='/login'>Log In</Link></Nav.Link>
      <Nav.Link><Link to='/signup'>Sign Up</Link></Nav.Link>
    </Navbar>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sleep" component={Sleep} />
      <Route path='/login' component = {Login} />
      <Route path='/login' component = {Login} />
      <Route path='/signup' component = {CreateAccount} />
      <Route path='/createbaby' component = {CreateBaby} />
      <Route path='/update' component={UpdateBaby} />
      <Route path='/nursery' component={Nursery} />
    </Switch>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
