import React from 'react';
import { string, func } from 'prop-types';
import Button from 'apsl-react-native-button';
import { StyleSheet } from 'react-native';

import { font, navColor } from './Styles';

class AppButton extends React.Component {
  render() {
    const { title, onPress } = this.props;
    
    return (
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onPress}
      >
        {title}
      </Button>
    );
  }
}

AppButton.propTypes = {
  title: string.isRequired,
  onPress: func,
};

const styles = StyleSheet.create({
  button: {
    width: '60%',
    alignSelf: 'center',
    backgroundColor: navColor,
  },
  
  buttonText: {
    color: font.color,
    fontSize: font.size.medium,
    fontWeight: 'bold',
  },
});

export default AppButton;
