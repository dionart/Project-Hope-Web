import React, { Component } from 'react';
import logo from './pics/logo.png';
import storeimg from './pics/dionart.png';
import layout from './pics/layout.png';
import './Sidebar.css';
import './Main.css';
import { Link, Redirect } from 'react-router-dom'

import fire from './base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirect: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    this.setState({user:true})
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        this.setState({error: 'Informações incorretas', redirect:false});
        console.log(error);
      });
  }

  render() {
    
    return (
        <div id = "app">
      
        <aside className = "aside-login">
          <header>
            <div className = "image">
              <img src={logo}/>
            </div>  
          </header>
          
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
            
            <button type="submit" onClick={this.login}>Entrar</button>

            <div className="error-message">
              <h1>{this.state.error}</h1>
            </div>  
            
            <div className = "input-block-senha"> 
              
              <Link to="/forgot" style={{ textDecoration: 'none' }}>
                  <button type="forgot">Esqueci minha senha</button>
              </Link>

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

export default Login;