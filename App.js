import React, { Component, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Form from './components/form'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    <Text style={styles.titleText}>
      Welcome to the Movie Playlist
    </Text>        
    <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
    baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});