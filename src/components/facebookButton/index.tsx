import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import createStyles from './styles';

const FacebookButton = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity
      style={styles.buttonFacebook}
      // onPress={loginWithFacebook()}
    >
      <Icon size={20} name='facebook' style={styles.icon} />
      <Text style={styles.buttonText}>Kontunuuj z Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;
