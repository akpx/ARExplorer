import React from 'react';
import { Alert, StyleSheet, Text, View, Image,  TouchableHighlight, Platform } from 'react-native';

export class Home extends React.Component {
  static navigationOptions = {
    title: 'AR Explorer',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introText}> Tap Finn to get started</Text>
        <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Details')}
            style={{width: '100%'}} >
            <View style={{width: '100%'}} >
              <Image style={{width: '100%'}}  source={require('../../assets/images/giphy.gif')} />
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
