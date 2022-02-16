import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Colors } from '../../constans/colors';
import { LinearGradient } from 'expo-linear-gradient';
import createStyles from './styles';
import Logo from '../../components/logo';
import Separation from '../../components/separation';
import FacebookButton from '../../components/facebookButton';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SigninScreen: React.FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsSignedIn(true);
        navigation.navigate('MainScreen');
      })
      .catch((res) => {
        alert(res);
      });
  };

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <KeyboardAvoidingView style={styles.container}>
        <Logo />
        <View style={styles.textContainer}>
          <Text style={styles.textLogin}>Zaloguj się</Text>
          <Text style={styles.textProductivity}>
            Miej pod kontrolą swoją wydajność!
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Adres e-mail'
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder='Hasło'
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSignIn();
            }}
          >
            <Text style={styles.buttonText}>Zaloguj się</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.textLink}>Zapomniałeś hasła?</Text>
          </TouchableOpacity>
        </View>

        <Separation />
        <FacebookButton />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignupScreen');
            }}
          >
            <Text style={[styles.text, styles.textLink]}>
              Jesteś nowym użytkownikiem? Dołącz teraz
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SigninScreen;
