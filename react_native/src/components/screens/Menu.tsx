import React from 'react';
import {Layout} from '@ui-kitten/components';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Button, Card} from '@ui-kitten/components';

const Menu = ({navigation}) => {
  return (
    <ScrollView>
      <Layout style={styles.container}>
        <Card style={styles.card}>
          <Image
            source={require('../Images/Squat.jpg')}
            style={styles.imageSize}
          />
          <View style={styles.footerContainer}>
            <Button
              onPress={() => navigation.navigate('Squat')}
              style={styles.footerControl}
              size="small">
              PLAY!
            </Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Image
            source={require('../Images/PushUp.jpg')}
            style={styles.imageSize}
          />
          <View style={styles.footerContainer}>
            <Button
              onPress={() => navigation.navigate('PushUp')}
              style={styles.footerControl}
              size="small">
              PLAY!
            </Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Image
            source={require('../Images/PullUp.jpg')}
            style={styles.imageSize}
          />
          <View style={styles.footerContainer}>
            <Button
              onPress={() => navigation.navigate('PullUp')}
              style={styles.footerControl}
              size="small">
              PLAY!
            </Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Image
            source={require('../Images/ArmCurl.jpg')}
            style={styles.imageSize}
          />
          <View style={styles.footerContainer}>
            <Button
              onPress={() => navigation.navigate('ArmCurl')}
              style={styles.footerControl}
              size="small">
              PLAY!
            </Button>
          </View>
        </Card>
        <Card style={styles.card}>
          <Image
            source={require('../Images/ShoulderRaise.jpg')}
            style={styles.imageSize}
          />
          <View style={styles.footerContainer}>
            <Button
              onPress={() => navigation.navigate('ShoulderRaise')}
              style={styles.footerControl}
              size="small">
              PLAY!
            </Button>
          </View>
        </Card>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  imageSize: {
    width: 350,
    height: 200,
  },
});

export default Menu;
