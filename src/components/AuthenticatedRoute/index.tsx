import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const AuthenticatedRoute = ({ component: C, cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props}/>
        : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location
              .search}`}
          />}
  />;

  const mapStateToProps = state => (
    {cProps: state.authenticate}
  )

  export default connect(mapStateToProps)(AuthenticatedRoute)