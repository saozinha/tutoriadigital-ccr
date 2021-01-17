import React from 'react';
import "./styles.css";
import './App.css';
import SideBar from "./components/sidebar"; 
import Footer from './components/Footer' 
 

function App() {
  return ( 
        <div className="App">

          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
          <br />
          
          <header className="App-header">
              <div id="page-wrap">
                <h1>Tutoria Digital  </h1>
                <h2>Aceitamos o desafio da CCR !</h2>
              
              </div>
          </header>


          <Footer pageWrapId={"page-wrap"} /> 

        </div> 
  )
}

export default App; 


