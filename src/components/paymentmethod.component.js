import React, { Component } from 'react';

import { Link } from "react-router-dom";

import mobile from "../images/mobile.png";
import card from "../images/card.png";

export default class Paymentmethod extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        this.props.history.push("/mobliebill/" + this.props.match.params.id);
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Payment Methods</h3>
                <br></br>
                <div className="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <center>
                                <div class="card">
                                    <img class="card-img-top" src={mobile} alt="Card image cap" style={{ width: "300px", height: "300px" }} ></img>
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Payment via mobile</b></h5>
                                        <p class="card-text">Pay via mobile using your dialog sim.</p>
                                        <Link to={"/mobilepay/" + this.props.match.params.id} className="btn btn-primary" onClick={this.onSubmit}>Pay</Link>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div class="col-sm-6">
                            <center>
                                <div class="card">
                                    <img class="card-img-top" src={card} alt="Card image cap" style={{ width: "300px", height: "300px" }}></img>
                                    <div class="card-body">
                                        <h5 class="card-title"><b>Payment via Creditcard</b></h5>
                                        <p class="card-text">Pay via your sampath card.</p>
                                        <Link to={"/edit/" + this.props.match.params.id} className="btn btn-primary">Pay</Link>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>

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
