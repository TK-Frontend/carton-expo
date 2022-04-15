import React, { useMemo, useState } from 'react';
import {
  TextInput,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import createStyles from '../styles';
import { Colors } from '../../../constans/colors';
import { useAppDispatch } from '../../../hooks';
import { addCartons } from '../../../features/cartonsSlice';

const InputOfQuantity = () => {
  const styles = useMemo(() => createStyles(), []);

  const dispatch = useAppDispatch();
  // const saveToDraft = () => {
  //   dispatch(addCartons(e.target.value));
  // };

  const [num, onChangeNumber] =
    useState<NativeSyntheticEvent<TextInputChangeEventData> | null>(null);
  return (
    <SafeAreaView>
      <TextInput
        placeholder='Podaj ilość'
        keyboardType='phone-pad'
        placeholderTextColor={Colors.GREY}
        style={styles.input}
        // value={num}
        onChange={(newNumber) => onChangeNumber(newNumber)}
      />
    </SafeAreaView>
  );
};

export default InputOfQuantity;
