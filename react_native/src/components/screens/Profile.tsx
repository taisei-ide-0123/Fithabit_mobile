import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <Layout style={styles.container}>
      <Text>Profile</Text>
      <Button>Profile</Button>
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
