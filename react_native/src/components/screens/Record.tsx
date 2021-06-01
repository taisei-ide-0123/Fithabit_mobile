import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Record = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Text>Record</Text>
      <Button onPress={() => navigation.navigate('Menu')}>Go to Menu</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
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

export default Record;
