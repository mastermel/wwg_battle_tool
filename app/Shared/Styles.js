import { StyleSheet } from 'react-native';

const backgroundColor = '#555';
const navColor = '#333';

const font = {
  color: '#E6E6E6',
  
  size: {
    normal: 18,
    medium: 24,
    large: 30,
  },
  
  presets: StyleSheet.create({
    placeholder: {
      fontStyle: 'italic',
    },
    
    centered: {
      textAlign: 'center',
      alignSelf: 'stretch',
    },
  }),
};

export {
  navColor,
  backgroundColor,
  font,
};
