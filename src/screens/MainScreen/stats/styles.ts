import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    box: {
      height: RFValue(148),
      marginBottom: RFValue(40),
    },
    button: {
      borderRadius: RFValue(16),
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
      height: "80%",
      resizeMode: "contain",
    },
    imageContainer: {
      height: "100%",
      justifyContent: "center",
      alignSelf: "center",
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
