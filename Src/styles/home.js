import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  binner: {
    marginTop: windowHeight * 0.017,
    width: '100%',
    height: windowHeight * 0.12,
  },
  text: {
    paddingHorizontal: 30,
    marginTop: 15,
    flexDirection: 'row',
  },
  textAyo: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  textWaya: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  layanan: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  labelSparing: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  klub: {
    flexDirection: 'row',
    marginTop: 10,
  },
  score: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  wrapperHorizontal: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
});
