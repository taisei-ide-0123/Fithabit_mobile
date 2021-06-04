import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme.json';
// import BottomNavigation from './src/components/navigation/bottomTabNavigation';
// import StackNavigation from './src/components/navigation/stackNavigation';
// import Menu from './src/components/screens/Menu';
// import Profile from './src/components/screens/Profile';
// import Ranking from './src/components/screens/Ranking';
// import Record from './src/components/screens/Record';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Icon} from '@ui-kitten/components';
import BottomTab from './src/components/navigation/bottomTabNavigation';

// const Tab = createBottomTabNavigator();

// const BottomTab = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}>
//       <Tab.Screen
//         name="Menu"
//         component={StackNavigation}
//         options={{
//           tabBarLabel: 'Menu',
//           tabBarIcon: () => <Icon name="facebook" />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
