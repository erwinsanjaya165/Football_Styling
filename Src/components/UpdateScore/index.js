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
import {Warna_Utama} from '../../utils/constants';

const UpdateScore = ({klub1, klub2, score1, score2, date}) => {
  const Logo = klub => {
    if (klub.klub === 'An-Nahl FC')
      return <Image source={LogoAnnahl} style={styles.logo} />;
    if (klub.klub === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;
    if (klub.klub === 'Ve FC')
      return <Image source={LogoVeFc} style={styles.logo} />;
    if (klub.klub === 'Arsyil FC')
      return <Image source={LogoArsyil} style={styles.logo} />;
    if (klub.klub === 'Awang Long FA')
      return <Image source={LogoAwangLong} style={styles.logo} />;
    if (klub.klub === 'Bogor FC')
      return <Image source={LogoBogor} style={styles.logo} />;

    return <Image source={LogoAnnahl} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.match}>
        <View style={styles.box}>
          <Logo klub={klub1} style={styles.logo} />
          <Text style={styles.text}>{klub1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.box}>
          <Logo klub={klub2} style={styles.logo} />
          <Text style={styles.text}>{klub2}</Text>
        </View>
      </View>
      <Text>{date}</Text>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
  },
  logo: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  match: {
    flexDirection: 'row',
  },
  box: {
    backgroundColor: 'white',
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

    elevation: 1,
  },
  textScore: {
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
    color: Warna_Utama,
  },
  score: {
    height: 21,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    position: 'relative',
    zIndex: 1,
    marginHorizontal: -13,
  },
});
