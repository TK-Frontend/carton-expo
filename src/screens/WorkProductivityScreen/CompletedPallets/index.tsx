import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';
import { useAppSelector } from '../../../hooks';

const CompletedPallets = () => {
  const styles = useMemo(() => createStyles(), []);

  const completedPallets = useAppSelector(
    (state) => state.cartons.completedPallets
  );
  const cartonsDone = useAppSelector((state) => state.cartons.done);

  const sumOfTheCartons = cartonsDone.reduce(
    (prev: number, curr: number): number => {
      return prev + curr;
    }
  ); // Can I write it into slice instead here? Or into hook or utils?

  return (
    <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Skompletowane zlecenia:</Text>
        <Text style={styles.gold}>{completedPallets}</Text>
      </View>

      <View style={styles.completed}>
        {cartonsDone.map((number, index) => (
          <Text key={index} style={styles.completedText}>
            {number}
          </Text>
        ))}
        {/* <Text style={styles.completedText}></Text> */}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Suma:</Text>
        <Text style={styles.gold}>{sumOfTheCartons}</Text>
      </View>
      {/* <View style={styles.line}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CompletedPallets;
