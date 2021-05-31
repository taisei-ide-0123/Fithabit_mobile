import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Ranking = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Text>Ranking</Text>
      <Button onPress={() => navigation.navigate('Record')}>
        Go to Record
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

export default Ranking;
