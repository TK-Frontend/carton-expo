import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
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
          // onPress={() => { }}
        >
          <Text style={styles.buttonText}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonContainer: { width: '60%' },
  button: {
    width: '100%',
    backgroundColor: 'cadetblue',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  textContainer: { alignItems: 'center' },
  textLogin: { fontSize: 32 },
  textProductivity: { fontSize: 14 },
});
