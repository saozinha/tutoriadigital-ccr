import React from 'react';
import "./styles.css";
import './App.css';
import SideBar from "./components/sidebar"; 
import Footer from './components/Footer' 
import Header from './components/header'

function App() {
  return ( 
        <div className="App">

          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
          <br />
          
          <header className="App-header">
              <Header /> 
          </header>


          <Footer pageWrapId={"page-wrap"} /> 

        </div> 
  )
}

export default App; 
