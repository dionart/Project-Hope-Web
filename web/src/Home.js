import React, { Component } from 'react';
import fire from './base';
import defaultpic from './pics/default.png';
import { Redirect } from 'react-router-dom';
import api from './services/api';
import './HomeScreen.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            redirect: false,
            user:'',
            cards: null,
        };
    }

    listCards = async()=>{
        const response = await api.get('/');
        const cards = response.data.cards;
        
        this.setState({cards});
        console.log(this.state.cards);
    }

    user (){
        const user = fire.auth().currentUser;
        console.log(fire.auth().currentUser);
        this.setState({user});
    }

    componentDidMount() {
        this.user();
        this.listCards();
    }

    logout() {
        fire.auth().signOut();
        this.setState({redirect: true});
    }

    render() {
        return (
           <div className = "container-row">
                <div className = "container">
                        <header>
                            <div className = "image">
                            <img src={defaultpic}/>
                            </div>  
                        </header>
                        
                        <h1>
                            Bem vindo, {this.state.user && this.state.user.displayName}
                        </h1>
                            
                        <button type= "logout" onClick={this.logout}>Logout</button>
                </div>

                <div className = "cards">
                    <ul>
                            {this.state.cards && this.state.cards.map(card => (
                                <li className="card">
                                    <header>{card.title}</header>
                                    <p>{card.description}</p>

                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        );
      }

}

export default Home;