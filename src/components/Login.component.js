import React, { Component } from 'react';
import axios from 'axios';

import createBrowserHistory from 'history/createBrowserHistory';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

import Signup from "./Signup.component";

const browserHistory = createBrowserHistory();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: '',
            password: '',
            login: false,
            rpasswrod: '',
            users: []
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    validateuser() {

        axios.get('http://localhost:5000/user/login' + this.state.email)
            .then(response => {
                console.log(response)

                this.setState({
                    business: response.data,
                    rpasswrod: response.data.upassword
                }
                );
            })
            .catch(function (error) {
                console.log(error);
            })

        if (this.state.username === this.state.rpasswrod)
            browserHistory.push('/create');
    }

    render() {

        return (
            <div class="container-fluid">
                <div className="container">
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login:
                                </h3>
                                    </MDBCardHeader><br />
                                    <label
                                        htmlFor="defaultFormEmailEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your email
                            </label>
                                    <input
                                        type="email"
                                        id="defaultFormEmailEx"
                                        className="form-control"
                                    /><br />

                                    <label
                                        htmlFor="defaultFormPasswordEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your password
                            </label>
                                    <input
                                        type="password"
                                        id="defaultFormPasswordEx"
                                        className="form-control"
                                    />

                                    <div className="text-center mt-4">
                                        <MDBBtn color="blue" className="mb-3" type="submit">
                                            Login
                                </MDBBtn>
                                    </div>

                                    <MDBModalFooter>
                                        <div className="font-weight-light">
                                            <p>Not a member? Sign Up</p>
                                            <p>Forgot Password?</p>
                                        </div>
                                    </MDBModalFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <footer class="p-3 mb-2 bg-dark text-white">
                    <div class="container-fluid text-center text-md-left">
                        <div class="row">

                            <div class="col-md-6 mt-md-0 mt-3">
                                <h5 class="text-uppercase">Sri Lanka Train Ticket Reservation</h5><br></br>
                                <p>Find the best way to get from A to B, anywhere in Sri Lanka, on your mobile or tablet.</p>

                                <p>Search hundreds of other travel sites at once</p>
                                <p>Book with confidence with Price Forecast</p>
                                <p>Set a Price Alert and never miss a train deal</p>
                                <p>Find the information you need to make the right decision</p>
                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3" />
                            <div class="col-md-3 mb-md-0 mb-3">
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                                    <i class="fas fa-home mr-3"></i> Sri Lanka Railways, Colombo 10, Sri Lanka</p>
                                <p>
                                    <i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p>
                                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p>
                                    <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                <br></br>

                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i class="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-copyright text-center py-3">
                        © 2011 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka Railways,Colombo 10, Sri Lanka
          </div>
                </footer>
            </div>
        )
    }

    updateUsername(username) {
        this.setState({
            username: username.target.value
        });
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        });
    }
}