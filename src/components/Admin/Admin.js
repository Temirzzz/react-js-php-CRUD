import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {chips} from '../../functions/chips';
import Table from '../Table/Table';
import './Admin.css';

class Admin extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      redirect : false
    }
  }

componentWillMount () {
  if (sessionStorage.getItem("userData")) {

  }
  else {
    this.setState({redirect : true});
  }
}

logout = () => {
  sessionStorage.setItem("userData", '');
  sessionStorage.clear();
}

addProduct = (e) => {
  e.preventDefault();
  //addProd (this.state);
  const data = {
    name : this.state.name,
    price : this.state.price,
    fromDate : this.state.fromDate,
    toDate : this.state.toDate
  }

  if (!this.state.name || !this.state.price || !this.state.fromDate || !this.state.toDate) {
    chips ();
  }
  else {
    fetch('http://localhost/server/add.php', {
      method : 'POST',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      },
      body   : JSON.stringify(data)
      })
      window.location.reload();
  }
}

changeFunc = (e) => {
  this.setState({[e.target.name] : e.target.value});
}

render() {
  if (this.state.redirect) {
    return (<Redirect to={'/'} />)
  }
  return (
    <div className="container text-center">
    <div className="chieps-field"></div>
      <div className="row">
        <div className="col">
          <h1 className="main-h1 mt-3">Authorized only</h1>
          <h2 className="main-h2 mt-3 mb-5">Enter the data</h2>
          <Link style={{ textDecoration: 'none' }} className="btnLink" onClick={this.logout} to="/">Logout</Link>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <input type="text" className="enterInp" placeholder="Product name" name="name" onChange={this.changeFunc} />
            </div>
            <div className="col">
              <input type="number" className="enterInp" placeholder="Price" name="price" onChange={this.changeFunc} />
            </div>
            <div className="col">
              <input type="date" className="enterInp" placeholder="From-date" name="fromDate" onChange={this.changeFunc} />
            </div>
            <div className="col">
              <input type="date" className="enterInp" placeholder="To-date" name="toDate" onChange={this.changeFunc} />
            </div>
            <div className="col">
              <button className="addBtn" onClick={this.addProduct}>Add product</button>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </div>
    )
  }
}

export default Admin;
