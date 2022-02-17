import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Stats: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("StatisticsScreen")}
      >
        <Text style={styles.textLink}>.,iI</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Statystyki</Text>
    </View>
  );
};

export default Stats;
