import React, { useMemo } from 'react';
import { View } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constans/colors';
import CompletedPallets from './CompletedPallets';
import TimeStart from './TimeStart';
import TimeInWork from './TimeInWork';
import Productivity from './Productivity';
import InputOfQuantity from './InputOfQuantity';
import ButtonUndo from './ButtonUndo';
import ButtonAdd from './ButtonAdd';
import ButtonFinish from './ButtonFinish';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const WorkProductivityScreen: React.FC<Props> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <View style={styles.container}>
        <CompletedPallets />
        <View style={styles.wrapper}>
          <TimeStart />
          <TimeInWork />
        </View>
        <Productivity />
        <View style={styles.wrapper}>
          <InputOfQuantity />
          <View style={styles.buttonsContainer}>
            <ButtonUndo />
            <ButtonAdd />
            <ButtonFinish />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WorkProductivityScreen;
