import React, { Component } from 'react';
import logo from './pics/logo.png';
import storeimg from './pics/dionart.png';
import layout from './pics/layout.png';
import './ForgotScreen.css';
import './Main.css';
import { Link, Redirect } from 'react-router-dom';

import fire from './base';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      error: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  reset(e){
    e.preventDefault();
    fire.auth().sendPasswordResetEmail(this.state.email).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        this.setState({error: 'Email não registrado'})
        console.log(error);
      })
  }

  render() {
    return (
      <div id = "app">
        <aside className="aside-forgot">
            <header>
                <div className = "image">
                <img src={logo}/>
                </div>  
            </header>
          
            <div className = "label-text">
                <label>Redefinir senha</label>

            </div>

            <div className = "label-description">
                <label>Digite seu email para redefinir sua senha</label>

            </div>

            <div className = "input-block">
              <input 
                value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
              />
            </div>
            
            <button type="submit" onClick={this.reset}>Enviar email</button>

            <div className="error-message">
              <h1>{this.state.error}</h1>
            </div>  
  
          <div className="input-group">
              <div className = "input-block">
                <label>Não possui conta?</label>
                
              </div>
              
  
            <div className = "input-block">
              
              <Link to="/create" style={{ textDecoration: 'none' }}>
                <button type="create">Criar conta</button>
              </Link>
                
            </div>
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
export default Forgot;