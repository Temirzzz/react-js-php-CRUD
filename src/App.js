import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Edit from './components/Edit/Edit';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/Admin"  component={Admin}/>
        <Route path="/Edit/:id"  component={Edit}/>
     </BrowserRouter>
    )
  }
}


export default App;
