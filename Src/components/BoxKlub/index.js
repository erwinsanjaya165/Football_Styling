import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  LogoAnnahl,
  LogoArsyil,
  LogoAwangLong,
  LogoBogor,
  LogoVamos,
  LogoVeFc,
} from '../../assets';
import SmallBottom from '../SmallBottom';

const BoxKlub = ({klub, statistik}) => {
  const Logo = () => {
    if (klub === 'An-Nahl FC')
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (klub === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (klub === 'Ve FC')
      return <Image source={LogoVeFc} style={styles.logo} />;
    if (klub === 'Arsyil FC')
      return <Image source={LogoArsyil} style={styles.logo} />;
    if (klub === 'Awang Long FA')
      return <Image source={LogoAwangLong} style={styles.logo} />;
    if (klub === 'Bogor FC')
      return <Image source={LogoBogor} style={styles.logo} />;

    return <Image source={LogoAnnahl} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.text}>{klub}</Text>
      <View style={styles.statistik}>
        <SmallBottom text={statistik} />
      </View>
    </TouchableOpacity>
  );
};

export default BoxKlub;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  statistik: {
    position: 'absolute',
    bottom: -10,
  },
});
