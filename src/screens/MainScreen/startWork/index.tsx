import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const StartWork: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WorkProductivityScreen')}
      >
        <Text style={styles.textLink}>=== || ===</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Zacznij zbierać</Text>
    </View>
  );
};

export default StartWork;
