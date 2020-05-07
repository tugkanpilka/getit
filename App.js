import React from 'react';

//LIBRARY IMPORTS 
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './MainScreen';
import OrderScreen from './OrderScreen';
import SuccessScreen from './SuccessScreen';

const MainNavigator = createStackNavigator({
  MainScreen: MainScreen,
  OrderScreen: OrderScreen,
  SuccessScreen: SuccessScreen
})

export default createAppContainer(createSwitchNavigator({
    MainStack: MainNavigator
  }, {
    initialRouteName: 'MainStack'
  }));