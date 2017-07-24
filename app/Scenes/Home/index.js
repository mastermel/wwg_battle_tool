import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, Button, View } from 'react-native';

import { backgroundColor } from '../../Shared/Styles';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Home Scene!
        </Text>
        <Button title='Units' onPress={() => { Actions.units(); }} />
        <Text>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
});
