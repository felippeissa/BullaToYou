import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,TouchableOpacity, Image,Text } from 'react-native';

import instagramicon from '../../assets/instagramicon.png';
import logofacebook from '../../assets/facebookicon.png';

export default class Home extends Component{
  static navigationOptions = {
    header: null,
  };
  state = {
      apps:[
        { id: 1,image: logofacebook ,title: "Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 2,image: instagramicon,title: "Gestor Bulla WEB",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 3,image: logofacebook,title: "Dr. Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 4,image: logofacebook,title: "Cadastro Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 5,image: logofacebook,title: "Facebook Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 6,image: logofacebook,title: "Instagram Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 7,image: logofacebook,title: "Youtube do Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 8,image: logofacebook,title: "Suporte do Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
        { id: 9,image: logofacebook,title: "Gestor Bulla Mobile",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
      ]
  };  

  handleNavigateApplication = () => {
    this.props.navigation.navigate('Application');
  };

  render(){
    const {apps} = this.state;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>
          BullaTools
        </Text>
      </View>
    <FlatList 
    data={this.state.apps} 
    numColumns={3}
    renderItem={({ item }) => 
      <TouchableOpacity onPress={this.handleNavigateApplication} style={styles.touchable}>
      <Image source={item.image} style={styles.image}></Image>
      </TouchableOpacity>
    }/>
    
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100, 
    height: 100
  },
  text: { 
    fontSize: 30,
  },
  touchable: { 
    borderRadius: 10,
  },

});