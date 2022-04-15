import { View, Text } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const TimeStart = () => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Godzina rozpoczęcia:</Text>
      <Text style={styles.green}>14:01</Text>
    </View>
  );
};

export default TimeStart;
