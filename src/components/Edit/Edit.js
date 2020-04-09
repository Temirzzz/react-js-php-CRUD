import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Edit.css';

class Edit extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      redirect: false
    }
  }

changeFunc = (e) => {
  this.setState({[e.target.name] : e.target.value});
}

edit = (e) => {
  e.preventDefault();
  const data = {
    name : this.state.name,
    price : this.state.price,
    fromDate : this.state.fromDate,
    toDate : this.state.toDate
  }

  if (!this.state.name || !this.state.price || !this.state.fromDate || !this.state.toDate) {
    let chips = document.createElement('div');
    chips.classList.add('chips');
    let message = document.createTextNode("Fill the fields!");
    chips.appendChild(message);
    let chiepsField = document.querySelector('.chieps-field');
    chiepsField.appendChild(chips);

    setTimeout(() => {
      chips.remove();
      }, 3000)
  }
  else {
    fetch('http://localhost/server/update.php?id=' + this.props.match.params.id, {
      method : 'POST',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      },
      body   : JSON.stringify(data)
      })
      this.setState({redirect : true})
  }
}

render() {
  const {redirect} = this.state;
  if (redirect) {
    return <Redirect to='/admin' />
  }

  return (
    <div className="container">
    <div className="chieps-field"></div>
      <div className="wrapper position-relative">
        <div className="row">
          <div className="container text-center">
            <h1 className="mt-3 main-h1">Edit the data</h1>
            <Link style={{ textDecoration: 'none' }} className="btnLink" to="/Admin">Back</Link>
          </div>
            <div className="col">
              <div className="row">
                <div className="col-6">
                  <input type="text" className="col enterInp mt-5" placeholder="product name" name="name" onChange={this.changeFunc} />
                </div>
                <div className="col-6">
                  <input type="number" className="col enterInp mt-5" placeholder="price" name="price" onChange={this.changeFunc} />
                </div>
                <div className="col-6">
                  <input type="date" className="col enterInp mt-3" placeholder="fromDate" name="fromDate" onChange={this.changeFunc} />
                </div>
                <div className="col-6">
                  <input type="date" className="col enterInp mt-3" placeholder="toDate" name="toDate" onChange={this.changeFunc} />
                </div>
                </div>
                <div className="row text-center">
                  <div className="container mt-3">
                    <button className="enterBtn" onClick={this.edit}>Edit</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Edit;
