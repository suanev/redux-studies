import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './stackNavigator';

const Routes = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
);

export default Routes;
