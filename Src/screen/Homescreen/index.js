import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {ImageBinner} from '../../assets';
import {
  HeaderInfo,
  Layanan,
  SmallBottom,
  BoxKlub,
  UpdateScore,
} from '../../components';
import {styles} from '../../styles/home';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      layanan: 'booking',
    };
  }

  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }
  render() {
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <HeaderInfo />
            <Image source={ImageBinner} style={styles.binner} />
          </View>
          <View style={styles.text}>
            <Text style={styles.textAyo}>Ayo </Text>
            <Text style={styles.textWaya}>Wayahe Futsal</Text>
          </View>
          <View style={styles.layanan}>
            <Layanan
              title="Paket Langganan"
              onPress={() => this.clickLayanan('paket')}
              active={this.state.layanan === 'paket' ? true : false}
            />
            <Layanan
              title="Booking Lapangan"
              onPress={() => this.clickLayanan('booking')}
              active={this.state.layanan === 'booking' ? true : false}
            />
            <Layanan
              title="Join Team"
              onPress={() => this.clickLayanan('join')}
              active={this.state.layanan === 'join' ? true : false}
            />
          </View>
          <View style={styles.labelSparing}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textAyo}>Pilih Tim </Text>
              <Text style={styles.textWaya}>Sparing </Text>
              <Text style={styles.textAyo}>Kamu </Text>
            </View>
            <SmallBottom text="Lihat Semua > " />
          </View>
          <View style={styles.wrapperHorizontal}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.klub}>
                <BoxKlub klub="An-nahl FC" statistik="WWWDWW" />
                <BoxKlub klub="Vamos FC" statistik="WWWWWW" />
                <BoxKlub klub="Ve FC" statistik="WWWDDLL" />
                <BoxKlub klub="Arsyil FC" statistik="DDWDDD" />
                <BoxKlub klub="Awang Long FA" statistik="WLDDDD" />
                <BoxKlub klub="Bogor FC" statistik="WLLDDD" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.textAyo}>Update Score </Text>
            <SmallBottom text="Lihat Semua > " />
          </View>
          <View style={styles.wrapperHorizontal}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.score}>
                <UpdateScore
                  klub1="An-nahl FC"
                  klub2="Vamos FC"
                  score1="5"
                  score2="7"
                  date="senin, 29 November 2021"
                />
                <UpdateScore
                  klub1="Ve FC"
                  klub2="Arsyil FC"
                  score1="6"
                  score2="5"
                  date="Jumat, 3 Desember 2021"
                />
                <UpdateScore
                  klub1="Awang Long FA"
                  klub2="Bogor FC"
                  score1="3"
                  score2="9"
                  date="Jumat, 3 Desember 2021"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
