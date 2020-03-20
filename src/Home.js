import React, { Component } from 'react';
import fire from './base';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {redirect: false};
        this.state = {user:null};
    }


    user (){
        const user = fire.auth().currentUser;
        this.setState({user});
    }

    componentDidMount() {
        this.user();
    }

    logout() {
        fire.auth().signOut();
        this.setState({redirect: true});
    }

    render() {
        return (
           <div className = "logout">
                <h1>
                    Ola, {this.state.user && this.state.user.displayName}
                </h1>
                    
                <button onClick={this.logout}>Logout</button>
           </div>
        );
      }

}

export default Home;