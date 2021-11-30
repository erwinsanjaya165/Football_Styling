import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconPaketLangganan,
  IconBookingLapangan,
  IconJoinTeam,
} from '../../assets';
import {Warna_Disable, Warna_Utama} from '../../utils/constants';

const Layanan = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Paket Langganan') return <IconPaketLangganan />;
    if (title === 'Booking Lapangan') return <IconBookingLapangan />;
    if (title === 'Join Team') return <IconJoinTeam />;
    return <IconPaketLangganan />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.text(active)}>{title.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Layanan;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    backgroundColor: active ? Warna_Utama : '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderColor: Warna_Disable,
    borderWidth: active ? 0 : 2,
  }),
  icon: {
    marginTop: -30,
  },
  text: active => ({
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: active ? '#FFFFFF' : Warna_Disable,
    textAlign: 'center',
  }),
});
