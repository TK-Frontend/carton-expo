import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';

const Separation = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.separationContainer}>
      <Text style={styles.separationBorder}></Text>
      <Text style={styles.textOr}>lub</Text>
      <Text style={styles.separationBorder}></Text>
    </View>
  );
};

export default Separation;
