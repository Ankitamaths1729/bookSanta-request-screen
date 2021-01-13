import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';

export const TabNavigator=createBottomTabNavigator({
    Donate:{screen:DonateScreen},
    Request:{screen:RequestScreen}
})

