import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constans/colors';

const createStyles = () =>
  StyleSheet.create({
    box: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.BLACK,
    },
    button: {
      width: '100%',
      backgroundColor: 'cadetblue',
      padding: 10,
      borderRadius: 15,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
      textAlign: 'center',
    },

    inputContainer: {
      width: '80%',
      marginTop: 10,
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginTop: 5,
    },
    buttonContainer: { width: '60%' },
    textContainer: { alignItems: 'center' },
    textLogin: { fontSize: 32 },
    textProductivity: { fontSize: 14 },
  });

export default createStyles;
