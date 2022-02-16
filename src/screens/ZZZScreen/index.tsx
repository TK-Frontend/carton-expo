import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ZZZScreen: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['red', 'yellow']}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.box}
      />

      <LinearGradient
        colors={['#c0392b', '#f1c40f', '#8e44ad']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <TouchableOpacity>
          <Text style={styles.buttonText}>I am a button</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ZZZScreen;
