import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={() => navigation.navigate('Ranking')}>
        Go to Ranking
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

export default Profile;
