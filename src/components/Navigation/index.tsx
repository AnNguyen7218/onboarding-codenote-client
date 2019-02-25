import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux'

import { userHasAuthenticated } from '../../actions'

class Navigation extends React.Component {
  handleLogout = async () => {
    await Auth.signOut();
    this.props.userHasAuthenticated(false);
    this.props.history.push('/login');
  }

  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">CodeNote</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.props.isAuthenticated
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = state => (
  {isAuthenticated: state.authenticate.isAuthenticated}
)

const mapDispatchToProps = dispatch => ({
  userHasAuthenticated: (value) => dispatch(userHasAuthenticated(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
