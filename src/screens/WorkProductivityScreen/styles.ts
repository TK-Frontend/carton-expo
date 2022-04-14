import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constans/colors";

const createStyles = () =>
  StyleSheet.create({
    body: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
    borderDashed: {
      alignItems: "center",
      borderColor: Colors.BLUE,
      borderStyle: "dashed",
      borderWidth: 3,
      borderRadius: RFValue(8),
      padding: RFValue(10),
      width: "88%",
    },
    box: {
      flex: 1,
    },
    button: {
      backgroundColor: Colors.BLUE,
      borderRadius: RFValue(8),
      color: Colors.WHITE,
      marginVertical: RFValue(6),
      padding: RFValue(10),
    },
    buttonBig: {
      width: "100%",
      paddingVertical: RFValue(16),
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    buttonHalf: { flexBasis: "48%", paddingVertical: RFValue(16) },
    buttonText: {
      color: Colors.WHITE,
      textAlign: "center",
      fontSize: RFValue(16),
      fontWeight: "700",
    },
    completed: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      height: RFValue(128),
      justifyContent: "flex-start",
      marginVertical: RFValue(8),
    },
    completedText: {
      color: Colors.GREY,
      fontSize: RFValue(24),
      marginRight: RFValue(8),
    },
    container: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    },
    green: {
      color: Colors.GREEN,
      fontSize: RFValue(22),
      marginLeft: RFValue(8),
    },
    gold: {
      color: Colors.GOLD,
      fontSize: RFValue(22),
      marginLeft: RFValue(8),
    },
    input: {
      borderColor: Colors.WHITE,
      borderWidth: RFValue(1),
      borderRadius: RFValue(8),
      color: Colors.WHITE,
      fontSize: RFValue(22),
      marginVertical: RFValue(8),
      paddingHorizontal: RFValue(96),
      paddingVertical: RFValue(16),
      textAlign: "center",
    },
    line: {
      borderWidth: 1,
      borderColor: Colors.WHITE,
      marginVertical: RFValue(16),
      width: "100%",
    },
    productivityText: {
      alignItems: "center",
    },
    red: {
      color: Colors.RED,
      fontSize: RFValue(22),
      marginLeft: RFValue(8),
    },
    text: {
      alignContent: "flex-start",
      color: Colors.WHITE,
      fontSize: RFValue(22),
    },
    textContainer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
    textUpper: {
      textTransform: "uppercase",
    },

    wrapper: {
      borderColor: Colors.GREY,
      borderRadius: RFValue(8),
      borderWidth: RFValue(1),
      borderStyle: "solid",
      marginVertical: RFValue(8),
      padding: RFValue(8),
      width: "88%",
    },
  });

export default createStyles;
