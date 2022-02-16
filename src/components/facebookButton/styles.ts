import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constans/colors';

const createStyles = () =>
  StyleSheet.create({
    buttonFacebook: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4267b2',
      width: '85%',
      borderRadius: RFValue(15),
      padding: RFValue(10),
    },
    buttonText: {
      color: Colors.WHITE,
      fontWeight: '700',
      fontSize: RFValue(16),
      textAlign: 'center',
    },
    icon: {
      color: Colors.WHITE,
      textAlign: 'center',
      marginRight: RFValue(3),
    },
  });

export default createStyles;
