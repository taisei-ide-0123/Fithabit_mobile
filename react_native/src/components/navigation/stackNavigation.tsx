import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../screens/Menu';
import Squat from '../screens/Squat';
import PushUp from '../screens/PushUp';
import PullUp from '../screens/PullUp';
import ArmCurl from '../screens/ArmCurl';
import ShoulderRaise from '../screens/ShoulderRaise';

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
      <Stack.Screen name="Squat" component={Squat} />
      <Stack.Screen name="PushUp" component={PushUp} />
      <Stack.Screen name="PullUp" component={PullUp} />
      <Stack.Screen name="ArmCurl" component={ArmCurl} />
      <Stack.Screen name="ShoulderRaise" component={ShoulderRaise} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
