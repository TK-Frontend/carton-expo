import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { CONTACT } from "../../../assets/Images";
import { Colors } from "../../../constans/colors";
import { LinearGradient } from "expo-linear-gradient";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const Contact: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ContactScreen")}
      >
        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={Colors.GRADIENT_LIGHT_BLUE}
            style={styles.gradientPadding}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={CONTACT} />
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Kontakt</Text>
    </View>
  );
};

export default Contact;
