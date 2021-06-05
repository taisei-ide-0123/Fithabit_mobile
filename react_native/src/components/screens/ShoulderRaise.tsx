import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const ShoulderRaise = () => {
  return (
    <Layout style={styles.container}>
      <Text>Shoulder Raise</Text>
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

export default ShoulderRaise;
