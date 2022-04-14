import React, { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { SETTINGS } from "../../../assets/Images";
import { Colors } from "../../../constans/colors";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Settings: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={Colors.GRADIENT_LIGHT_BLUE}
            style={styles.gradientPadding}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={SETTINGS} />
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Ustawienia</Text>
    </View>
  );
};

export default Settings;
