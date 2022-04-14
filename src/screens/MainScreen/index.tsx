import React, { useMemo } from "react";
import { View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constans/colors";
import createStyles from "./styles";
import Logo from "../../components/logo";
import StartWork from "./startWork";
import Settings from "./settings";
import Stats from "./stats";
import Vip from "./vip";
import Contact from "./contact";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MainScreen: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <View style={styles.container}>
        <Logo />

        <View style={styles.tilesContainer}>
          <View style={styles.tile}>
            <StartWork navigation={navigation} />
          </View>

          <View style={styles.tilesHalfContainer}>
            <View style={styles.tileHalf}>
              <Settings navigation={navigation} />
            </View>

            <View style={styles.tileHalf}>
              <Stats navigation={navigation} />
            </View>

            <View style={styles.tileHalf}>
              <Vip navigation={navigation} />
            </View>

            <View style={styles.tileHalf}>
              <Contact navigation={navigation} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MainScreen;
