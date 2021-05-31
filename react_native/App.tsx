import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import Menu from './src/components/screens/Menu';
import Profile from './src/components/screens/Profile';
import Ranking from './src/components/screens/Ranking';
import Record from './src/components/screens/Record';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Ranking" component={Ranking} />
          <Stack.Screen name="Record" component={Record} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
