import React, {useMemo} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth} from '../../../firebase';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MainScreen: React.FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('SigninScreen');
      })
      .catch(error => {
        alert(error);
      });
  };

  const user = auth.currentUser;
  const email = user?.email;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.text}>MainScreen</Text>
      <Text>username is: {email}</Text>
      <TouchableOpacity style={styles.button} onPress={() => LogoutUser()}>
        <Text style={styles.buttonText}>wyloguj</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default MainScreen;
