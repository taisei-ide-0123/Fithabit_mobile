import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import Squat from '../Menu/Squat';
import PushUp from '../Menu/PushUp';
import PullUp from '../Menu/PullUp';
import ArmCurl from '../Menu/ArmCurl';
import ShoulderRaise from '../Menu/ShoulderRaise';

const Menu = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Squat />
      <PushUp />
      <PullUp />
      <ArmCurl />
      <ShoulderRaise />
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Menu;
