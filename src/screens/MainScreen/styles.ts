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
      backgroundColor: "cadetblue",
      padding: 10,
      borderRadius: 15,
      marginTop: 20,
    },
    buttonContainer: { width: "60%" },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
      textAlign: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    text: {
      fontSize: RFValue(24),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    tile: { flexBasis: "100%" },
    tileHalf: {
      flexBasis: "48%",
    },
    tilesHalfContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexBasis: "100%",
      flexWrap: "wrap",
    },
    tilesContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "88%",
    },
  });

export default createStyles;
