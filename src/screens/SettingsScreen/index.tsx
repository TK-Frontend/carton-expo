import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SettingsScreen: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  const email = auth.currentUser?.email;

  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('SigninScreen');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>SettingsScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => LogoutUser()}>
        <Text style={styles.buttonText}>wyloguj</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
