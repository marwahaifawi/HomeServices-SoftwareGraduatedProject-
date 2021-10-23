import React, { useState } from 'react';
import Navigator from './components/Navigation/Navigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
let fonts = {
'FontOne': require('./assets/fonts/Caveat-VariableFont_wght.ttf'),
'FontTwo': require('./assets/fonts/Handlee-Regular.ttf'),
'FontThree':require('./assets/fonts/Righteous-Regular.ttf'),
};
export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(fonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Navigator />
    );}
    else {
      return <AppLoading />;
    }
}
}