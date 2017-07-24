import React from 'react';
import { Text } from 'react-native';
import { any } from 'prop-types';
import { font } from './Styles';

class AppText extends React.Component {
  render() {
    return (
      <Text style={{ color: font.color, fontSize: font.size.normal }}>
        {this.props.children}
      </Text>
    );
  }
}

AppText.propTypes = {
  children: any,
};

export default AppText;
