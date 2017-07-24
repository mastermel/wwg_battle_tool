import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';

import { backgroundColor } from '../../Shared/Styles';

import HeaderText from '../../Shared/HeaderText';
import AppButton from '../../Shared/AppButton';

export default class Units extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderText style={styles.welcome}>
          Units Scene!
        </HeaderText>
        <AppButton title='Home' onPress={() => { Actions.home(); }} />
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
