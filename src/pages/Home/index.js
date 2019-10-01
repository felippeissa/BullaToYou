import React, { Component } from 'react';
import { View , Text , TouchableOpacity, FlatList } from 'react-native';
import { Container } from './styles';

export default class Home extends Component{
  static navigationOptions = {
    header: null,
  };

  state = {
      apps:[
        {
          id: 1,
          image: "",
          title: "Titulo da Aplicacao 1",
          desc: "Essa é a descrição da Aplicacao 1",
          link: [
            {
              id: 1,
              link: "",
            },
          ],
        },
        {
          id: 2,
          image: "",
          title: "Titulo da Aplicacao 2",
          desc: "Essa é a descrição da Aplicacao 2",
          link: [
            {
              id: 1,
              link: "",
            },
          ],
        },
      ]
  };

  
  handleNavigateApplication = () => {
    this.props.navigation.navigate('Application');
  };
  render(){
  return (
    <Container>
    <View>
      <Text>
        Home
      </Text>
      <TouchableOpacity onPress={this.handleNavigateApplication}>
        <Text>
          Navegar para Application
        </Text>
      </TouchableOpacity>
    </View>
    </Container>
  );
  }
}
