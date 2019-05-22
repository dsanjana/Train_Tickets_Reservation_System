//view mobile bill payment details

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Mobilebill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trainNo: '',
            gtrainName: '',
            startStation: '',
            endStation: '',
            startTime: '',
            endTime: '',
            type: '',
            from: '',
            gqty: '',
            gprice: '',
            gnic: '',
            bnic: '',
            disc: '',
            disic: '',
            business: [],
            business1: [],
            g_id: ''
        }
    }

    componentDidMount(e) {

        axios.get('http://localhost:5000/Employee/getEmp/' + this.props.match.params.nic)
            .then(response => {
                console.log(response)

                this.setState(
                    {
                        business1: response.data,
                        bnic: response.data.nic
                    });
            })
            .catch(function (error) {
                console.log(error);
            })

        //get selected train
        axios.get('http://localhost:5000/train/' + this.props.match.params.id1)
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        business: response.data,
                        trainName: response.data.tname,
                        trainNo: response.data.tno,
                        gprice: response.data.price,
                        tqty: response.data.qty,
                        startStation: response.data.sstation,
                        endStation: response.data.estation,
                        startTime: response.data.stime,
                        endTime: response.data.etime
                    });
            })
            .catch(function (error) {
                console.log(error);
            })

        //get mobile bill
        axios.get('http://localhost:5000/mobilebill/getmobilebill')
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        business: response.data,
                        gqty: response.data.qty,
                        gnic: response.data.nic,
                        g_id: response.data._id

                    }, () => {

                        if ((this.state.bnic) != '') {

                            this.setState(
                                {
                                    disc: this.state.gqty * this.state.gprice * 90 / 100,
                                    disic: this.state.gqty * this.state.gprice * 10 / 100
                                }, () => {
                                    alert("You Have 10% Discount for your Government ID")
                                    var obj3 = {
                                        payment: this.state.gqty * this.state.gprice * 90 / 100
                                    }
                                    //update total price
                                    axios.post('http://localhost:5000/mobilebill/updatemobilebill/' + this.state.g_id, obj3)
                                        .then(res => console.log(res.data));
                                }
                            )
                        }
                        else {

                            this.setState(
                                {
                                    disc: this.state.gqty * this.state.gprice,
                                    disic: "0"
                                }, () => {
                                    var obj3 = {

                                        payment: this.state.gqty * this.state.gprice * 90 / 100
                                    }
                                    //update total price
                                    axios.post('http://localhost:5000/mobilebill/updatemobilebill/' + this.state.g_id, obj3)
                                        .then(res => console.log(res.data));
                                }
                            )
                        }
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div class="container">
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Order has been completed!</h4>
                    <p>Your reservation has been successfully completed.The confirmation has been sent to your email. !!!</p>
                    <hr />
                </div>
                <div class="form-group">
                    <h2>Receipt</h2>
                    <br></br>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td style={{ fontSize: 14, width: "30%" }}>Train No </td>
                                <td style={{ fontSize: 14, width: "70%" }}>{this.state.trainNo} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>ID </td>
                                <td style={{ fontSize: 14 }}>{this.state.gnic} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Start Station </td>
                                <td style={{ fontSize: 14 }}>{this.state.startStation} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>End Station</td>
                                <td style={{ fontSize: 14 }}>{this.state.endStation} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Arrival Time</td>
                                <td style={{ fontSize: 14 }}>{this.state.startTime} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Departture Time</td>
                                <td style={{ fontSize: 14 }}>{this.state.endTime} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Ticket Price</td>
                                <td style={{ fontSize: 14 }}>{this.state.gprice} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Quantity </td>
                                <td style={{ fontSize: 14 }}>{this.state.gqty} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Discount</td>
                                <td style={{ fontSize: 14 }}>{this.state.disic} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}>Total Price</td>
                                <td style={{ fontSize: 14 }}>{this.state.gqty * this.state.gprice} </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: 14 }}><b>Sub Total</b></td>
                                <td style={{ fontSize: 14 }}><b>{this.state.disc}</b></td>
                            </tr>
                            <tr>
                                <Link to={"/create/"} className="btn btn-primary">Complete Order</Link>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
