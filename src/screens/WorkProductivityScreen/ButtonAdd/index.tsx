import { Text, TouchableOpacity } from 'react-native';
import React, { useMemo } from 'react';
import createStyles from '../styles';

const ButtonAdd = () => {
  const styles = useMemo(() => createStyles(), []);
  // const dispatch =
  // const cartonsCompleted = useSelector(state.cartonsCompleted)

  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonHalf]}
      // onPress={dispatch(addCartons(cartonsCompleted))}
    >
      <Text style={styles.buttonText}>Dodaj</Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;
