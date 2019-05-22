import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "bootstrap-css-only/css/bootstrap.css";


import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Bill from './components/bill';
import Paymentmethod from './components/paymentmethod.component';
import Mobilepay from './components/mobilepay.component';
import Mobilebill from './components/mobilebill';
import Home from './components/home';
import User from './components/Signup.component';
import Login from './components/Login.component';



class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    {/* <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#9933CC"}}> */}
                        <Link to={'/home'} className="navbar-brand">Online Train Tickets Reservation</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                    <Link to={'/home'} className="nav-link"><font color="white">Welcome</font></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link"><font color="white">Book Tickets</font></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link"><font color="white">SignUp</font></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/login'} className="nav-link"><font color="white">Login</font></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br></br>
                    <Switch>
                    <Route exact path='/home' component={Home} />
                        <Route path='/create' component={Create} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/index/:sstation/:estation' component={Index} />
                        <Route path='/bill/:nic/:id' component={Bill} />
                        <Route path='/mobilepay/:id1' component={Mobilepay} />
                        <Route path='/mobilebill/:nic/:id1' component={Mobilebill} />
                        <Route path='/paymentmethod/:id' component={Paymentmethod} />
                        <Route path='/signup' component={User}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
