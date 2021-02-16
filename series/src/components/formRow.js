import React from 'react';
import {View, StyleSheet} from 'react-native';

const FormRow = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormRow;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    elevation: 1,
  },
});
