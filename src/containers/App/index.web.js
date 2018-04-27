import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import routes from '../../routes';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../components/NavBar/index.web';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
        <Navbar />
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </View>
    );
  }
}
