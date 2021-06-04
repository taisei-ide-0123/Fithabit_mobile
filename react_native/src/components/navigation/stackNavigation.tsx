import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/Menu';
import Profile from '../screens/Ranking';
import Ranking from '../screens/Ranking';
import Record from '../screens/Record';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#e83838'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="Record" component={Record} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
