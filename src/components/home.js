import React, { Component } from 'react';
import axios from 'axios';
import RBCarousel from "react-bootstrap-carousel";

import { Link } from "react-router-dom";

import slide_1 from "../images/slide1.jpg";
import slide_2 from "../images/slide2.jpg";
import slide_3 from "../images/slide3.jpg";
import slide_4 from "../images/slide4.jpg";
import slide_5 from "../images/slide5.jpg";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };

  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <Row>
          <Col span={12}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 700 }}>
                <img style={{ width: "100%", height: "100%" }} src={slide_1} alt="..."/>
              </div>
              <div style={{ height: 700 }}>
                <img style={{ width: "100%", height: "100%" }} src={slide_2} alt="..."/>
              </div>
              <div style={{ height: 700 }}>
                <img style={{ width: "100%", height: "100%" }} src={slide_3} alt="..."/>
              </div>
              <div style={{ height: 700 }}>
                <img style={{ width: "100%", height: "100%" }} src={slide_4} alt="..."/>
              </div>
              <div style={{ height: 700 }}>
                <img style={{ width: "100%", height: "100%" }} src={slide_5} alt="..."/>
              </div>
            </RBCarousel>
          </Col>
        </Row>
        <br></br>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><font color="bg-primary"><b>Purchase Train Tickets</b></font></h5>
                <p class="card-text"><font color="black"><b>Discover how to get anywhere by train.</b></font></p>
                <Link to={"/create/"} className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><font color="bg-primary"><b>Train Schedule and Ticket Prices</b></font></h5>
                <p class="card-text"><font color="black"><b>Get details about train time table and ticket Prices.</b></font></p>
                <a href="#" class="btn btn-primary">Get Details</a>
              </div>
            </div>
          </div>
        </div>
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
    );
  }
}

const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};