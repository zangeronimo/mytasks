import React, { Component } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
    
export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Lato: require('./assets/fonts/Lato.ttf'),
      shelter: require('./assets/fonts/shelter.otf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
   fontFamily: 'shelter',
  },
});
