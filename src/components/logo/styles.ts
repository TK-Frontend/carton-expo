import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const createStyles = () =>
  StyleSheet.create({
    imageContainer: {
      marginVertical: RFValue(8),
      width: '64%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      resizeMode: 'contain',
    },
  });

export default createStyles;
