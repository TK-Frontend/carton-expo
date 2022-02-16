import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const createStyles = () =>
  StyleSheet.create({
    imageContainer: {
      position: 'absolute',
      top: RFValue(100),
      width: '65%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      resizeMode: 'contain',
    },
  });

export default createStyles;
