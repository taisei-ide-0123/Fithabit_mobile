import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Menu = () => {
  return (
    <Layout style={styles.container}>
      <Text>Menu</Text>
      <Button>Menu</Button>
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
