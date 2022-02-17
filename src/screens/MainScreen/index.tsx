import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import Logo from '../../components/logo';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constans/colors';
import StartWork from './startWork';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MainScreen: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <View style={styles.container}>
        <Logo />
        <View>
          <StartWork navigation={navigation} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default MainScreen;
