import React from 'react';
import { View, Text, SafeAreaView,FlatList,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

const Home = ({ modules }) => (
  <SafeAreaView>
    <View>
    <FlatList 
    data={this.state.modules} 
    key={this.state.modules.id}
    numColumns={1}
    renderItem={({ item }) => 
    <TouchableOpacity>
      <Text>{item.title}</Text>
    </TouchableOpacity>
    }/>
  </View>
  </SafeAreaView>
  );
export default connect( state => ({ modules: state }))(Home); 




 /* ------------------
 
 
 static navigationOptions = {
    header: null,
  }; 

  handleNavigateApplication = () => {
    this.props.navigation.navigate('Application');
  };
*/