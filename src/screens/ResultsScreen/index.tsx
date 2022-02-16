import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {getAuth, signOut} from 'firebase/auth';
import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ResultsScreen: React.FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const LogoutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate('SigninScreen');
      })
      .catch(error => {
        // An error happened.
      });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>ResultsScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => LogoutUser()}>
        <Text style={styles.buttonText}>wyloguj</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsScreen;
