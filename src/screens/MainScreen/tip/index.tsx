import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { COIN } from "../../../assets/Images";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Tip: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TipScreen")}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={COIN} />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Zostaw napiwek</Text>
    </View>
  );
};

export default Tip;
