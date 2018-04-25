import React from 'react';
import { Button, View } from 'react-native';

const emptyFunction = () => { };

export default () => (
  <View>
    <Button color="#17BF63" onPress={emptyFunction} title="Press me" />
  </View>
);
