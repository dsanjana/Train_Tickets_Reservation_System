//view train details

import React, { Component } from 'react';
import axios from 'axios';

import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        //get train details according to entered start staion and end station
        axios.get('http://localhost:5000/train/' + this.props.match.params.sstation + '/' + this.props.match.params.estation)
            .then(response => {
                console.log(response)
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <div class="container">
                    <h3 align="center">Available Train List</h3>

                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead class="table-dark">
                            <tr>
                                <th>Train No</th>
                                <th>Train Name</th>
                                <th>Start Station</th>
                                <th>End Station</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Train Type</th>
                                <th>Start From</th>
                                <th>Quantity</th>
                                <th>Ticket Price</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

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
        );
    }
}

