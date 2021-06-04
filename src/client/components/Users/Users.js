import React from 'react'
import axios from 'axios';
import MyTable from '../Table/Table'
import './Users.css'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  }

  render() {
    return (
      <div className='users'>
        <h1 className='users__title'>All Users</h1>
        <p className='users__description'>Users and their age</p>
        <MyTable headers={['Username', 'Age']} body={this.state.users} />
      </div>
    )
  }
}

export default User;