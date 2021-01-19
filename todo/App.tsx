import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/Home';

const App = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 2,
  },
});
