import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { COLLECT } from "../../../assets/Images";
import createStyles from "./styles";
import { Colors } from "../../../constans/colors";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const StartWork: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("WorkProductivityScreen")}
      >
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={Colors.GRADIENT_LIGHT_BLUE}
            style={styles.gradientPadding}
          >
            <Image style={styles.image} source={COLLECT} />
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Zacznij zbierać</Text>
    </View>
  );
};

export default StartWork;
