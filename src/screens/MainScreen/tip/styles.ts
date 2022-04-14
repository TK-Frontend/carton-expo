import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    box: {
      height: RFValue(148),
      marginBottom: RFValue(20),
    },
    button: {
      backgroundColor: Colors.BLUE,
      paddingVertical: RFValue(32),
      borderRadius: RFValue(16),
      color: Colors.WHITE,
    },
    image: {
      height: "100%",
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
