import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Warna_Utama} from '../../utils/constants';

const SmallBottom = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallBottom;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Warna_Utama,
    padding: 3,
    borderRadius: 5,
    height: windowHeight * 0.03,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 3,
  },
});
