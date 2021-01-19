import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Input = ({onChangeText, value}) => (
  <TextInput
    onChangeText={onChangeText}
    value={value}
    style={styles.input}
    underlineColorAndroid="#000"
  />
);

export default Input;

const styles = StyleSheet.create({});
