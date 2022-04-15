import { Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const ButtonUndo = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <TouchableOpacity style={[styles.button, styles.buttonHalf]}>
      <Text style={styles.buttonText}>Cofnij</Text>
    </TouchableOpacity>
  );
};

export default ButtonUndo;
