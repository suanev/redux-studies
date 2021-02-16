import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FormRow from '../components/formRow';

export default class login extends Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput style={styles.input} placeholder="email@email.com" />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="Sua senha super secreta"
            secureTextEntry
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
});
