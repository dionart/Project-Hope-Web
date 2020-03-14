import React, { Component } from 'react';
import fire from './base';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
           <div className = "logout">
                <strong>Welcome Home</strong>
                    
                <button onClick={this.logout}>Logout</button>
           </div>
        );
      }

}

export default Home;