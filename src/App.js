import React, {Component} from 'react';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';
import Home from './Home';
import Login from './Login';
import fire from "./base";

import * as firebase from 'firebase';
  
/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLuZ4opjKJfSNrRaoVcYerZxQYpBk6AWI",
    authDomain: "project-hope-c2db1.firebaseapp.com",
    databaseURL: "https://project-hope-c2db1.firebaseio.com",
    projectId: "project-hope-c2db1",
    storageBucket: "project-hope-c2db1.appspot.com",
    messagingSenderId: "468342701618",
    appId: "1:468342701618:web:3e79591928eb2597bd462b",
    measurementId: "G-VF25N5VR3S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/
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
      
      <div>{this.state.user ?  ( <Home/>) : (<Login />)}</div>
      
    )}
}

  
export default App;
