import React, { Component } from 'react';
import logo from './logo.png';
import storeimg from './dionart.png';
import layout from './layout.png';

import fire from './base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
        <div id = "app">
      
      
        <aside>
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
            
            <div className = "input-block-senha"> 
              <button type="forgot">Esqueci minha senha</button>
            
            </div>
  
            <div className="input-group">
              <div className = "input-block">
                <label>Não possui conta?</label>
                
              </div>
              
  
            <div className = "input-block">
              <button type="create" onClick ={this.signup}>Criar conta</button>
                
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