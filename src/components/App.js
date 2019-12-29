import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Loadingbar from 'react-redux-loading'
import Leaderboard from './LeaderBoard'
import AddPoll from './AddPoll'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Loadingbar />
        {this.props.loading === true
          ? <h3>Loading...</h3>
          : <AddPoll />}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)