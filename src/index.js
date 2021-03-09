import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, Sleep, Login,CreateBaby, UpdateBaby, CreateAccount, Nursery} from './components';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sleep">
        <Sleep />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/createaccount'>
        <CreateAccount />
      </Route>
      <Route path='/createbaby'>
        <CreateBaby />
      </Route>
      <Route path='/update'>
        <UpdateBaby />
      </Route>
      <Route path='/nursery'>
        <Nursery />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
