import React from 'react';
import { Text } from 'react-native';
import { any } from 'prop-types';
import { font } from './Styles';

class AppText extends React.Component {
  render() {
    const style = {
      color: font.color,
      fontSize: font.size.normal,
      ...this.props.style,
    };
    
    return (
      <Text style={style}>
        {this.props.children}
      </Text>
    );
  }
}

AppText.propTypes = {
  children: any,
  style: any,
};

AppText.defaultProps = {
  style: {},
};

export default AppText;
