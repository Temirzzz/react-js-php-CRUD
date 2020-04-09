import React from 'react';
import {chips} from '../../functions/chips';
import {errorChips} from '../../functions/errorChips';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends React.Component  {
  constructor (props) {
    super (props);
    this.state = {
        redirect : false
    }
  }

  loginFunc = (e) => {
    e.preventDefault();
    const data = {
      username : this.state.username,
      password : this.state.password
    }

    if (!this.state.username || !this.state.password) {
      chips ();
    }
    else {
      fetch('http://localhost/server/send.php', {
        method : 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        body   : JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((result) => {
          let responseJson = result;
          //console.log(responseJson);
          if (responseJson === 'Ok') {
            sessionStorage.setItem('userData', responseJson);
            this.setState({redirect : true});
          }
          else {
            errorChips ();
          }
        })
    }
  }

  loginLink = () => {
    setTimeout(() => {
      document.querySelector('.myForm').classList.remove('hide');
    },1000)

    document.querySelector('.login-h1').remove();
  }

  closeForm = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  changeFunc = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/admin'} />)
    }
    return (
      <div className="wrapper">
        <div className="chieps-field"></div>
        <h1 className="login-h1" onClick={this.loginLink}>Login form</h1>
        <div className="container">
          <div className="col col-lg-4 mt-5 center">
            <div className="myForm hide">
              <label type="button" className="closeBtn" onClick={this.loginFunc} onClick={this.closeForm}>
                <span className="icon-plus"></span> &#10008;
              </label>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="enterInp" id="username" name="username" onChange={this.changeFunc} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="enterInp" id="password" name="password" onChange={this.changeFunc} required />
              </div>
              <label type="button" className="enterBtn mt-2" onClick={this.loginFunc}>
                <span className="icon-plus"></span> Enter
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
