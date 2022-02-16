import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constans/colors';

const createStyles = () =>
  StyleSheet.create({
    separationContainer: {
      width: '85%',
      paddingVertical: RFValue(15),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    separationBorder: {
      height: 1,
      borderWidth: RFValue(1),
      borderColor: Colors.WHITE,
      width: '40%',
    },
    textOr: {
      color: Colors.WHITE,
    },
  });

export default createStyles;
