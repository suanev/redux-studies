import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, isNewTodo}) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.btnText}>{!isNewTodo ? 'add' : 'save'}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#227d91',
    borderRadius: 6,
    margin: 3,
  },
  btnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
