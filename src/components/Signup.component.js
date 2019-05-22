import React, { Component } from 'react';
import axios from 'axios';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon, MDBRow } from "mdbreact";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onChangeCoPass = this.onChangeCoPass.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            uname: '',
            uemail: '',
            upasswrd: '',
            upass: '',
            uaddrs: ''
        }
    }

    onChangeName(e) {
        this.setState({
            uname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            uemail: e.target.value
        });
    }

    onChangePass(e) {
        this.setState({
            upasswrd: e.target.value
        });
    }

    onChangeCoPass(e) {
        this.setState({
            upass: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            uaddrs: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            uname: this.state.uname,
            uemail: this.state.uemail,
            upasswrd: this.state.upasswrd,
            upass: this.state.upass,
            uaddrs: this.state.uaddrs

        };
        axios.post('http://localhost:5000/user/adduser', obj)
            .then(res => console.log(res.data));
        this.setState({
            uname: '',
            uemail: '',
            upasswrd: '',
            upass: '',
            uaddrs: ''
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Sign Up:</h3>
                                    </MDBCardHeader><br />
                                    <form>
                                        <div className="form-row">
                                            <MDBCol md="4" className="mb-3">
                                                <label
                                                    htmlFor="defaultFormRegisterNameEx"
                                                    className="grey-text"
                                                >
                                                    First name
                    </label>
                                                <input
                                                    type="text"
                                                    id="defaultFormRegisterNameEx"
                                                    className="form-control"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    required
                                                />
                                            </MDBCol>
                                            <MDBCol md="4" className="mb-3">
                                                <label
                                                    htmlFor="defaultFormRegisterEmailEx2"
                                                    className="grey-text"
                                                >
                                                    Last name
                    </label>
                                                <input
                                                    type="text"
                                                    id="defaultFormRegisterEmailEx2"
                                                    className="form-control"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    required
                                                />
                                            </MDBCol>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputPassword4">Password</label>
                                                <input type="password" className="form-control" id="inputPassword4" name="password" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputMobile">Mobile Number</label>
                                            <input type="text" className="form-control" id="inputMobile" name="mobile" placeholder="07xxxxxxxx" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputAddress">Address</label>
                                            <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="inputCity">City</label>
                                                <input type="text" className="form-control" id="inputCity" name="city" />
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label htmlFor="inputZip">Zip</label>
                                                <input type="text" className="form-control" id="inputZip" name="zip" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    Check me out
                        </label>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="blue"
                                                className="mb-3"
                                                type="submit"
                                            >
                                                Sing Up
                </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div class="container-fluid">

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
            </div>
        )
    }
}

export default Signup;