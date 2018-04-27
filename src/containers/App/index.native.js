import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import routes from '../../routes';
import Navbar from '../../components/NavBar/index.native';
import styles from './styles';

export default App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Navbar />
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </Switch>
    </View>
  </NativeRouter>
)
