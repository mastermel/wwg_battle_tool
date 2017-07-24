import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { font } from './Styles';

const { string, func } = PropTypes;

class AppButton extends React.Component {
  render() {
    const { title, onPress } = this.props;
    
    return (
      <Button
        color={font.color}
        title={title}
        onPress={onPress}
      />
    );
  }
}

AppButton.propTypes = {
  title: string.isRequired,
  onPress: func,
};

export default AppButton;
