import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconDefaulUser, IconJadwal, IconStadion} from '../../assets/icons';

const HeaderInfo = () => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.userInfo}>
        <IconDefaulUser />
        <View style={styles.textInfo}>
          <Text style={styles.textHello}>Hello Bro,</Text>
          <Text style={styles.textName}>Erwin </Text>
        </View>
      </View>
      <View style={styles.JadwalInfo}>
        <View>
          <Text style={styles.textJam}>09.00 WIB</Text>
          <Text style={styles.textTgl}>Sabtu, 27-11-2021</Text>
        </View>
        <View style={styles.iconJadwal}>
          <IconStadion />
          <Text style={styles.textNext}>Next Jadwal</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
  },
  textInfo: {
    marginLeft: 5,
  },
  textHello: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  JadwalInfo: {
    flexDirection: 'row',
  },
  textName: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  textJam: {
    textAlign: 'right',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  textTgl: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  iconJadwal: {
    alignItems: 'center',
  },
  textNext: {
    fontSize: 13,
  },
});
