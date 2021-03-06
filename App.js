import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen'
import OnboardingScreen from './src/screens/OnboardingScreen'

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Onboard: OnboardingScreen
  },
  {
    initialRouteName: 'Onboard',
    defaultNavigationOptions: {
      title: 'My App',
    },
  }
);

export default createAppContainer(navigator);
