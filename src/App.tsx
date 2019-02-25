import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'

import './App.css';
import ScreensRoot from './screens/Root';
import { userHasAuthenticated } from './actions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.props.history.push('/login');
    this.props.userHasAuthenticated(false);
  }

  render() {
    return (
      !this.state.isAuthenticating &&
        <div className="App container">
          <ScreensRoot />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userHasAuthenticated: (value) => dispatch(userHasAuthenticated(value))
})

export default withRouter(connect(null,mapDispatchToProps)(App));
