import React from 'react';
import { Alert, StyleSheet, Text, View, Image,  TouchableHighlight, Platform } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introText}> Tap on Finn to start your adventure</Text>
        <TouchableHighlight
            onPress={this._onPressButton}
            style={{width: '100%'}} >
            <View style={{width: '100%'}} >
              <Image style={{width: '100%'}}  source={require('./images/giphy.gif')} />
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69abe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 20
  },
});
