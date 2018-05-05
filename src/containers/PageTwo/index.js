import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';

export default class PageTwo extends Component {
  render() {
    return (
      <View>
        <Text>Page Two</Text>
        <Card/>
      </View>
    );
  }
}
