import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  component: new() => React.Component<any, any>,
  props?: Object,
  [x: string]: any,
}

const AppliedRoute = ({ component: C, props: cProps, ...rest }: Props) =>
  <Route {...rest} render={ props => <C {...props} {...cProps} /> } />;

export default AppliedRoute;
