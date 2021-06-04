import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigation from './stackNavigation';
import Profile from '../screens/Profile';
import Ranking from '../screens/Ranking';
import Record from '../screens/Record';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Menu"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: () => <AntDesign name="menu-fold" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Ionicons name="person" />,
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: () => <FontAwesome5 name="crown" />,
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          tabBarLabel: 'Record',
          tabBarIcon: () => <FontAwesome name="database" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
