import { Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const ButtonFinish = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={[styles.button, styles.buttonBig]}>
      <Text style={styles.buttonText}>Zakończ</Text>
    </TouchableOpacity>
  );
};

export default ButtonFinish;
