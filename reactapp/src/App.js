import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <User name="Faruk Aydogan" salary="5000" department="Bilişim"/>
        <User name="Durdu Aydogan" salary="3000" department="İç İşleri"/>
        <User />
      </div>
    );
  }
}

export default App;
