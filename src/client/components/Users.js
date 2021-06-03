import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './Users.css'
import "bootstrap/dist/css/bootstrap.css";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then(response => {
        console.log('response.data', response.data)
        this.setState({
          users: response.data
        })
      })
  }

  render() {
    const tableBody = this.state.users.map(user => {
      return (
        <tr>
          <td>{user.username}</td>
          <td>{user.age}</td>
        </tr>
      )
    })
    return (
      <div className='users'>
        <h1 className='users__title'>All Users</h1>
        <p className='users__description'>Users and their age</p>
        <Table size="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default User;