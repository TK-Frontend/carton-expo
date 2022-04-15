import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const Productivity = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Wydajność</Text>
        <Text style={styles.red}>255 k/h</Text>
      </View>
    </View>
  );
};

export default Productivity;
