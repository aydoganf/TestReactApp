import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Users from './components/Users';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Faruk Aydoğan",
        salary: 5000,
        department: "Bilişim"
      },
      {
        id: 2,
        name: "Durdu Aydoğan",
        salary: 6000,
        department: "İç İşleri"
      },
      {
        id: 3,
        name: "Abdullah Aydoğan",
        salary: 7000,
        department: "Kemistry"
      }
    ]
  }

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    })
  }

  render(){
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users 
          deleteUser = {this.deleteUser} 
          users={this.state.users} />
      </div>
    );
  }
}

export default App;
