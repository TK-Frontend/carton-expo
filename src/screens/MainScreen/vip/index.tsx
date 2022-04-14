import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../../constans/colors";
import { THE_CROWN } from "../../../assets/Images";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Vip: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VipScreen")}
      >
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={Colors.GRADIENT_LIGHT_BLUE}
            style={styles.gradientPadding}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={THE_CROWN} />
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>VIP</Text>
    </View>
  );
};

export default Vip;
