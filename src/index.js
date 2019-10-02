import React, { Component } from 'react';
import Routes from './routes';
import Home from './pages/Home';
import Application from './pages/Application';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Home />
      <Application/>
    </Provider>
  );
  }
}

export default App;
