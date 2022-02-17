import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constans/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      backgroundColor: Colors.GOLD,
      padding: RFValue(10),
      borderRadius: RFValue(15),
      color: Colors.WHITE,
      marginVertical: RFValue(6),
    },
    buttonText: {
      color: Colors.WHITE,
      fontWeight: '700',
      fontSize: RFValue(16),
      textAlign: 'center',
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.BLACK,
    },
  });

export default createStyles;
