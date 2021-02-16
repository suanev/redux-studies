import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../screens/login';

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{header: () => null}}>
    <Stack.Screen name="Login" component={login} />
  </Stack.Navigator>
);
export default Navigator;
