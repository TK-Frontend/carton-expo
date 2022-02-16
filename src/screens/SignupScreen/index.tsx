import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Colors } from '../../constans/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../components/logo';
import Separation from '../../components/separation';
import FacebookButton from '../../components/facebookButton';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen: React.FC<IProps> = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = useMemo(() => createStyles(), []);

  const RegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user.email);
        alert(`Zalogowano użytkownika ${res.user.email}`);
        setIsSignedIn(true);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('MainScreen');
      }
    });
  });

  return (
    <LinearGradient colors={Colors.GRADIENT_BLUE} style={styles.box}>
      <KeyboardAvoidingView style={styles.container}>
        <Logo />
        <View>
          <Text style={styles.text}>Witaj w aplikacji Carton</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Adres e-mail'
            placeholderTextColor={Colors.GREY}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Hasło (co najmniej 6 znaków)'
            placeholderTextColor={Colors.GREY}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => RegisterUser()}
          >
            <Text style={styles.buttonText}>Dołącz</Text>
          </TouchableOpacity>
        </View>

        <Separation />
        <FacebookButton />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.textLink}>
              Masz już konto?
              <Text style={{ color: Colors.GOLD }}> Zaloguj się</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textRegulationsContainer}>
          <Text style={styles.textRegulations}>
            Klikając dołącz, wyrażasz zgodę na warunki aplikacji: Umowę
            użytkownika, Politykę ochrony prywatności, i zasady korzystania z
            plików cookie{' '}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignupScreen;
