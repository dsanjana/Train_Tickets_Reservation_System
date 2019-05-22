//view train details

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.tno}
        </td>
        <td>
          {this.props.obj.tname}
        </td>
        <td>
          {this.props.obj.sstation}
        </td>
        <td>
          {this.props.obj.estation}
        </td>
        <td>
          {this.props.obj.stime}
        </td>
        <td>
          {this.props.obj.etime}
        </td>
        <td>
          {this.props.obj.type}
        </td>
        <td>
          {this.props.obj.from}
        </td>
        <td>
          {this.props.obj.qty}
        </td>
        <td>
          {this.props.obj.price}
        </td>
        <td>
          <Link to={"/paymentmethod/" + this.props.obj._id} className="btn btn-primary">Payment Method</Link>
        </td>
      </tr>
    );
  }
}

export default TableRow;