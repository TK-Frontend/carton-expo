import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    box: {
      width: "100%",
    },
    button: {
      width: "100%",
      backgroundColor: Colors.BLUE,
      paddingVertical: RFValue(48),
      borderRadius: RFValue(16),
      color: Colors.WHITE,
    },
    text: {
      fontSize: RFValue(14),
      fontWeight: "300",
      marginBottom: RFValue(20),
      textAlign: "center",
      color: Colors.WHITE,
    },
    textLink: {
      color: Colors.WHITE,
      textAlign: "center",
      marginVertical: RFValue(10),
    },
  });

export default createStyles;
