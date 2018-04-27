import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import links from './links';

export default function Navbar() {
  return links.map(({ name, param }) => (
    <Link activeStyle={{ fontWeight: 'bold' }} to={`/${param}`} key={param}>
      <Text>{name}</Text>
    </Link>
  ));
}
