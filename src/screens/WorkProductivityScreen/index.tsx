import React, { useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constans/colors";

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const WorkProductivityScreen: React.FC<Props> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [productivity, setProductivity] = useState("256 k/h");
  const [cartonsDone, setCartonsDone] = useState([
    125, 456, 12, 120, 250, 48, 173, 555, 666, 777, 888, 999, 1000, 2000, 3000,
  ]);

  const sum = cartonsDone.reduce(function (prev, curr) {
    return prev + curr;
  });

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Skompletowane zlecenia:</Text>
            <Text style={styles.gold}>{cartonsDone.length}</Text>
          </View>

          <View style={styles.completed}>
            {cartonsDone.map((number, index) => (
              <Text key={index} style={styles.completedText}>
                {number}
              </Text>
            ))}
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Suma:</Text>
            <Text style={styles.gold}>{sum}</Text>
          </View>
          {/* <View style={styles.line}></View> */}
        </View>

        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Godzina rozpoczęcia:</Text>
            <Text style={styles.green}>14:00</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Czas pracy:</Text>
            <Text style={styles.green}>4h 41m 20s</Text>
          </View>
          {/* <View style={styles.line}></View> */}
        </View>

        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Wydajność</Text>
            <Text style={styles.red}>{productivity}</Text>
          </View>
        </View>

        <View style={[styles.wrapper]}>
          <View>
            <TextInput
              placeholder="Podaj ilość"
              keyboardType="numeric"
              placeholderTextColor={Colors.GREY}
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonHalf]}
              // onPress={() => {handleSignIn()}}
            >
              <Text style={styles.buttonText}>Cofnij</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonHalf]}>
              <Text style={styles.buttonText}>Dodaj</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonBig]}>
              <Text style={styles.buttonText}>Zakończ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WorkProductivityScreen;
