import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Card} from '@ui-kitten/components';

const Footer = () => (
  <View style={[styles.footerContainer]}>
    <Button style={styles.footerControl} size="small">
      PLAY!
    </Button>
  </View>
);

const Squat = () => (
  <>
    <Card style={styles.card}>
      <Image
        source={require('../Images/Squat.jpg')}
        style={{width: 350, height: 200}}
      />
      <Footer />
    </Card>
  </>
);

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerControl: {
    margin: 10,
  },
});

export default Squat;
