//Select Start Station and End Station.

import React, { Component } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import train from "../images/train.png";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeStartStation = this.onChangeStartStation.bind(this);
        this.onChangeEndStation = this.onChangeEndStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            startStation: '',
            endStation: '',
            business: [],
            clickedSearchTrains: false
        }
    }

    onChangeStartStation(e) {
        this.setState({
            startStation: e.target.value
        });
    }

    onChangeEndStation(e) {
        this.setState({
            endStation: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            startStation: this.state.startStation,
            endStation: this.state.endStation

        };

        {
            //get train details according to entered start staion and end station
            axios.get('http://localhost:5000/train/' + this.state.startStation + '/' + this.state.endStation)
                .then(response => {
                    console.log(response)

                    this.setState({ business: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                })

            this.props.history.push("/index/" + this.state.startStation + "/" + this.state.endStation);
        }
    }

    render() {
        return (
            <div>
                <div style={{ height: 700 }}>
                    <img
                        style={{ width: "100%", height: "100%" }}
                        src={train}
                        alt="First slide"
                    />
                </div>

                <div class="container">
                    <br></br>
                    <h3 align="center">Select Your Train</h3>
                    <br></br>
                    <div style={{ width: "1500px" }}>
                        <form >
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Start Station</label>
                                <select id="inputState" className="form-control" value={this.state.startStation} onChange={this.onChangeStartStation}>
                                    <option>Select your start Station</option>
                                    <option>Colombo Fort</option>
                                    <option>Kandy</option>
                                    <option>Badulla</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">End Station</label>
                                <select id="inputState" className="form-control" value={this.state.endStation} onChange={this.onChangeEndStation}>
                                    <option>Select your end station</option>
                                    <option>Colombo Fort</option>
                                    <option>Kandy</option>
                                    <option>Badulla</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <Link to={"/index/" + this.state.endStation + "/" + this.state.startStation} className="btn btn-primary" onClick={this.onSubmit}>Search your Train</Link>
                            </div>
                        </form>

                        <div className="Create">
                            <index startStation={this.state.startStation} />
                            <index endStation={this.state.startStation} />
                        </div>
                    </div>
                </div>
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
