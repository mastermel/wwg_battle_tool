import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, Button, View } from 'react-native';

import { backgroundColor } from '../../Shared/Styles';

export default class Units extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Units Scene!
        </Text>
        <Button title='Home' onPress={() => { Actions.home(); }} />
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
