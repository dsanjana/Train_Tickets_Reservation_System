//View Credit card payment Form

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon, MDBRow } from "mdbreact";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonCvc = this.onChangePersonCvc.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeQty = this.onChangeQty.bind(this);
    this.onChangeCardno = this.onChangeCardno.bind(this);
    this.onChangeExpiredate = this.onChangeExpiredate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      trainName: '',
      trainNo: '',
      gqty: '',
      business: [],
      qty: '',
      qty1: '',
      gnic: '',
      gprice: '',
      gsstation: '',
      g_id: '',
      totprice: '',
      disc: '',
      disic: '',
      startTime: '',
      endTime: '',
      from: '',
      to: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/train/' + this.props.match.params.id)
      .then(response => {
        console.log(response)

        this.setState(
          {
            business: response.data,
            trainName: response.data.tname,
            trainNo: response.data.tno,
            gqty: response.data.qty,
            gprice: response.data.price,
            g_id: response.data._id,
            startTime: response.data.stime,
            endTime: response.data.etime,
            from: response.data.sstation,
            to: response.data.estation
          }, () => {

            if ((this.state.bnic) != '') {

              //let x=(this.state.gqty)*(this.state.gprice)
              this.setState(
                {
                  disc: this.state.gqty * this.state.gprice * 90 / 100,
                  disic: this.state.gqty * this.state.gprice * 10 / 100
                }, () => {

                }
              )
            }
            else {

              //let x=(this.state.gqty)*(this.state.gprice)
              this.setState(
                {
                  disc: this.state.gqty * this.state.gprice,
                  disic: "0"
                }, () => {

                }
              )
            }
          });
      })
      .catch(function (error) {
        console.log(error);
      })
    console.log(this.state.trainName)
  }

  onChangePersonEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePersonName(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  onChangePersonCvc(e) {
    this.setState({
      cvc: e.target.value
    });
  }
  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    })
  }
  onChangeQty(e) {
    this.setState({
      qty: e.target.value
    })
  }
  onChangeCardno(e) {
    this.setState({
      cardno: e.target.value
    })
  }

  onChangeExpiredate(e) {
    this.setState({
      expiredate: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      qty1: ((this.state.gqty) - (this.state.qty)),
      totprice: ((this.state.gprice) * (this.state.qty))
    })
    const obj = {
      email: this.state.email,
      fullname: this.state.fullname,
      nic: this.state.nic,
      cvc: this.state.cvc,
      qty: this.state.qty,
      cardno: this.state.cardno,
      expiredate: this.state.expiredate,
      qty: (this.state.gqty) - (this.state.qty)
    };

    const obj1 = {
      email: this.state.email,
      fullname: this.state.fullname,
      nic: this.state.nic,
      cvc: this.state.cvc,
      qty: this.state.qty,
      cardno: this.state.cardno,
      expiredate: this.state.expiredate,
      payment: ((this.state.gprice) * (this.state.qty))
    };

    //update quantity
    axios.post('http://localhost:5000/train/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    //add credit card payment
    axios.post('http://localhost:5000/Bill/addbill/', obj1)
      .then(res => console.log(res.data));

    //Send Email
    axios.post('http://localhost:5000/train/send1/', obj1)
      .then(res => {
      })
      .catch(function (error) {
        console.log(error)
      })
    this.props.history.push("/bill/" + this.state.nic + "/" + this.props.match.params.id);
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>

        <div class="container">
          <h3 align="center">Payment via Credit Card</h3>
          <br></br>

          <MDBCardHeader className="form-header blue-gradient rounded">
            <h4 className="my-3">***If you are a government employee enter your NIC to get 10% discount!!!***</h4>
            <label>Train Name      : {this.state.trainName}</label><br />
            <label>Train NO        : {this.state.trainNo}  </label><br />
            <label>Arrival Time    : {this.state.startTime}  </label><br />
            <label>Departture Time : {this.state.endTime}  </label><br />
            <label>From            : {this.state.from}  </label><br />
            <label>To              : {this.state.to}  </label><br />
          </MDBCardHeader>
          <br></br>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Full Name</label>
                <input type="text" className="form-control" value={this.state.fullname} onChange={this.onChangePersonName} required/>
              </div>
              <div class="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" value={this.state.email} onChange={this.onChangePersonEmail} required/>
              </div>
            </div>
            <div class="form-group">
              <label>Card No</label>
              <input type="text" className="form-control" value={this.state.cardno} onChange={this.onChangeCardno} placeholder="**** **** **** ****" required/>
            </div>
            <div class="form-group">
              <label>NIC No</label><br />
              <small><font color="red">If you are a government employee enter your nic for get discount</font></small>
              <input type="text" className="form-control" value={this.state.nic} onChange={this.onChangeNic}/>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>CVV</label>
                <input type="text" className="form-control" value={this.state.cvc} onChange={this.onChangePersonCvc} placeholder="***" required/>
              </div>
              <div class="form-group col-md-4">
                <label>Expire Date</label>
                <input type="text" className="form-control" value={this.state.expiredate} onChange={this.onChangeExpiredate} placeholder="MM/YY" required/>
              </div>
              <div class="form-group col-md-2">
                <label>Quanity</label>
                <input type="text" className="form-control" value={this.state.qty} onChange={this.onChangeQty} required/>
              </div>
            </div>
            <div className="form-group">
              <Link to={"/bill/" + this.state.nic + '/' + this.props.match.params.id} onClick={this.onSubmit} className="btn btn-primary">Checkout</Link>
            </div>
          </form>
        </div>
        <br></br>

        <div className="container">
          <h6><b>Terms and Conditions</b></h6>
          <small>**No cancellation & no refund policy apply.</small><br />
          <small>**Maximum of 5 Tickets would be reserved per one NIC.</small><br />
          <small>**Standard customer verification and other terms and conditions would apply.</small><br />
          <small>**Please refer attached FAQ doc for more information.</small><br />
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