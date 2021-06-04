import React from 'react'
import User from './components/Users/Users'
import AgeDemographic from './components/AgeDemographic/AgeDemographic'


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <User />
        <AgeDemographic />
      </div>
    );
  }
}

export default App;