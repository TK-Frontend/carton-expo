import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    button: {
      color: Colors.WHITE,
    },
    gradientContainer: {
      borderRadius: RFValue(16),
      overflow: "hidden",
    },
    gradientPadding: {
      paddingVertical: RFValue(32),
    },
    image: {
      width: "100%",
      resizeMode: "contain",
    },
    text: {
      fontSize: RFValue(16),
      fontWeight: "300",
      marginBottom: RFValue(20),
      textAlign: "center",
      color: Colors.WHITE,
    },
  });

export default createStyles;
