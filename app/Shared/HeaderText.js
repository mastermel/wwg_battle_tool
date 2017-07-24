import React from 'react';
import { Text } from 'react-native';
import { any } from 'prop-types';
import AppText from './AppText';
import { font } from './Styles';

class HeaderText extends React.Component {
  render() {
    return (
      <AppText>
        <Text style={{ fontSize: font.size.large }}>
          {this.props.children}
        </Text>
      </AppText>
    );
  }
}

HeaderText.propTypes = {
  children: any,
};

export default HeaderText;
