import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    box: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
