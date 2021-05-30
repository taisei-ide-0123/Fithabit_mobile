import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './theme.json';
import Menu from './src/components/screens/Menu';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <Menu />
    </ApplicationProvider>
  );
};

export default App;
