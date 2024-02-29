import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './containers/Login';

const index = () => {
  return (
    <Login />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default index;
