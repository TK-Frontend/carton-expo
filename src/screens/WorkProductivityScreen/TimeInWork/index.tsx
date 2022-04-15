import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const TimeInWork = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Czas pracy:</Text>
      <Text style={styles.green}>4h 41m 20s</Text>
    </View>
  );
};

export default TimeInWork;
