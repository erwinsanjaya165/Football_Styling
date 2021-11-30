import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Warna_Disable, Warna_Utama} from '../../utils/constants';
import {
  IconHome,
  IconHomeAktif,
  IconJadwal,
  IconJadwalAktif,
  Iconuser,
  IconuserAktif,
} from '../../assets';

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'HOME') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'JADWAL') {
      return isFocused ? <IconJadwalAktif /> : <IconJadwal />;
    }
    if (label === 'AKUN') {
      return isFocused ? <IconuserAktif /> : <Iconuser />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 5,
  },
  containerFocus: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: Warna_Disable,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: Warna_Utama,
    fontSize: 18,
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
  },
});
