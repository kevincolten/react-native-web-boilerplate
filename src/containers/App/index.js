import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import routes from '../../routes';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../NavBar';
import NoMatch from '../NoMatch';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world, from</Text>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => {
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <C {...props} {...rest} />
                )}
              />
            )
          })}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </View>
    );
  }
}
