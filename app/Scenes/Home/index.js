import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,  View } from 'react-native';

import { backgroundColor } from '../../Shared/Styles';
import HeaderText from '../../Shared/HeaderText';
import AppButton from '../../Shared/AppButton';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <HeaderText>
          WWG Battle Tool
        </HeaderText>
        <View style={styles.inner}>
          <AppButton title='Units' onPress={() => { Actions.units(); }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  
  inner: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
    alignSelf: 'stretch',
  },
});
