import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constans/colors';

const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: 100,
      paddingHorizontal: 30,
    },
    box: {
      width: '100%',
      height: 200,
    },
    button: {
      marginTop: 50,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
    },
    buttonText: {
      color: Colors.WHITE,
      textAlign: 'center',
      fontSize: 24,
    },
  });

export default createStyles;
