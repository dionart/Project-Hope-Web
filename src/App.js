import React, {Component} from 'react';

import './App.css';
import './global.css';
import Home from './Home';
import Login from './Login';
import fire from "./base";
import Routes from './routes';
import Forgot from './Forgot'


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      
      <div>{this.state.user ?  ( <Home/>) : (<Login/>)}</div>
      
    )}
}

  
export default App;
