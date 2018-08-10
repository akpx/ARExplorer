import React from 'react';
import { Alert, StyleSheet, Text, View, Image,  TouchableHighlight, Platform } from 'react-native';

export class Home extends React.Component {
  static navigationOptions = {
    title: 'AR Explorer',
  };

  _onPressButton() {
    Alert.alert('You tapped the button!');
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.introText}> Tap on Finn to start your adventure</Text>
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
