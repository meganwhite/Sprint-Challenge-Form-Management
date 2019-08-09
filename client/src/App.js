import React from 'react';
import './App.css';
import FormikUserForm from './components/UserForm'
import axios from 'axios';
import UserData from './components/UserData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get('http://localhost:5000/api/restricted/users')
      .then(response => this.setState({ users: response.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <FormikUserForm/>
        <h1>Users</h1>
        <UserData
          users = {this.state.users}
        />
      </div>
    );
  }
}

export default App;