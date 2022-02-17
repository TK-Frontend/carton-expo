import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    box: {
      flex: 1,
    },
    button: {
      width: "100%",
      backgroundColor: Colors.GOLD,
      padding: RFValue(10),
      borderRadius: RFValue(15),
      color: Colors.WHITE,
      marginVertical: RFValue(6),
    },
    buttonContainer: { width: "88%" },
    buttonText: {
      color: Colors.WHITE,
      fontWeight: "700",
      fontSize: RFValue(16),
      textAlign: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      width: "88%",
      marginTop: RFValue(25),
    },
    input: {
      backgroundColor: Colors.WHITE,
      borderColor: Colors.WHITE,
      borderRadius: RFValue(15),
      borderWidth: RFValue(2),
      marginVertical: RFValue(6),
      paddingHorizontal: RFValue(10),
      paddingVertical: RFValue(6),
    },
    text: {
      fontSize: RFValue(14),
      fontWeight: "300",
      marginBottom: RFValue(20),
      textAlign: "center",
    },
    textContainer: { alignItems: "center" },
    textLink: {
      color: Colors.WHITE,
      textAlign: "center",
      marginVertical: RFValue(10),
    },
    textLogin: { fontSize: RFValue(22), color: Colors.WHITE },
    textProductivity: { fontSize: 14, color: Colors.WHITE },
  });

export default createStyles;
