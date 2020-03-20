import React, { Component } from 'react';
import logo from './pics/logo.png';
import storeimg from './pics/dionart.png';
import layout from './pics/layout.png';
import './CreateScreen.css';
import './Main.css';
import { Redirect } from 'react-router-dom'

import fire from './base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      displayName:'',
      diplayLastName:'',
      user : null,
      error: '',
      redirect: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signup = async (e) => {
    if(this.state.displayName && this.state.email && this.state.password){
        try {
            e.preventDefault();
            const userCredentials = await fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            if (userCredentials.user) {
                console.log(userCredentials.user);
                this.setState({redirect:true});
                await userCredentials.user.updateProfile({
                    displayName: `${this.state.displayName} ${this.state.displayLastName}`,
                });
            }
        } catch (error) {
            console.log(error);
            this.setState({error: 'E-mail já existe ou está mal formatado!'});
        }
    }
}


  render() {
    if(this.state.redirect){
        return <Redirect to="/Login" />
    }else{
        return (
            <div id = "app">
        
        
            <aside className = "aside-create">
                <header>
                    <div className = "image">
                    <img src={logo}/>
                    </div>  
                </header>

                <div className = "input-names">
                    <div className = "input-block">
                        <label>Nome</label>
                        <input 
                            value={this.state.displayName} onChange={this.handleChange} type="displayName" name="displayName" id="displayName_hope"
                        />
                    </div>

                    <div className = "input-block2">
                        <label>Sobrenome</label>
                        <input 
                            value={this.state.displayLastName} onChange={this.handleChange} type="displayLastName" name="displayLastName" id="displayLastName_hope"
                        />
                    </div>
                </div>
            
                <div className = "input-block">
                <label>Email</label>
                <input 
                    value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                />
                </div>
    
                <div className = "input-block"> 
                <label>Senha</label>
                <input 
                    value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1"
                />
                </div>
                
                {/* <Link to= "/login" style={{ textDecoration: 'none'}}> */}
                    <button type="submit" onClick={this.signup}>Criar Conta</button>
                {/* </Link> */}

                <div className="error-message">
                <h1>{this.state.error}</h1>
                </div>  
    
            </aside>
    
            <main>
            <header>
                <div className = "text-above">
                <label>Acesse já o nosso aplicativo mobile</label>
                </div>
                
                <div className = "image-side">
                <img src={layout}/>
                </div>  
                
                <div className = "store">
                <img src={storeimg}/>
    
                </div>
    
            </header>
            
    
            </main>
    
        </div>
        
        );
    }
    }
}

export default Login;