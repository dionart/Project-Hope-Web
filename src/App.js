import React from 'react';
import logo from './logo.png';
import storeimg from './dionart.png';
import layout from './layout.png';
import './App.css';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import app from './base';

import * as firebase from 'firebase';


function App() {
  
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
              
            />
          </div>

          <div className = "input-block"> 
            <label>Senha</label>
            <input 
              
            />
          </div>
          
          <button type="submit" onClick={() => app.auth().signInWithEmailAndPassword()}>Entrar</button>
          
          <div className = "input-block-senha"> 
            <button type="forgot">Esqueci minha senha</button>
          
          </div>

          <div className="input-group">
            <div className = "input-block">
              <label>Não possui conta?</label>
              
            </div>
            

          <div className = "input-block">
            <button type="create">Criar conta</button>
              
          </div>
        </div>

      </aside>

      <main>
        <header>
          <div className = "text-above">
            <label>Acesse já o nosso app na Play store!</label>
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

export default App;
