import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/17378-soccer-loading.json')}
        loop={true}
        autoPlay={true}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
