import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Application from './pages/Application';

import logo from './assets/instagram.png';

export default createAppContainer(
  createStackNavigator({
    Home,
    Application,
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: <Text> Tools</Text>,
      headerStyle: {
        backgroundColor: '#f5f5f5'
      },
    },
  }),
);