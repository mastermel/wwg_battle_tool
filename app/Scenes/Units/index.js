import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';
import { arrayOf } from 'prop-types';
import Unit from '../../Schemas/Unit';

import { backgroundColor, font } from '../../Shared/Styles';

import AppText from '../../Shared/AppText';
import AppButton from '../../Shared/AppButton';

export default class Units extends Component {
  render() {
    return (
      <View style={styles.screen}>
        { this.renderUnits() }
        
        <AppButton title='Home' onPress={() => { Actions.home(); }} />
      </View>
    );
  }
  
  renderUnits() {
    const { units } = this.props;
    
    if (units && units.length > 0) {
      return (
        <AppText style={font.presets.placeholder}>
          You have {units.length} units. Good for you!
        </AppText>
      );
    } else {
      return (
        <AppText style={[ font.presets.centered, font.presets.placeholder ]}>
          No units entered yet.{'\n'}
          You need to fill up your ranks!
        </AppText>
      );
    }
  }
}

Units.propTypes = {
  units: arrayOf(Unit),
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundColor,
  },
});
