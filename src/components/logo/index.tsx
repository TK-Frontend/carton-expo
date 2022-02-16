import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import { LOGO } from '../../assets/Images/index';
import createStyles from './styles';

const Logo = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={LOGO} />
    </View>
  );
};

export default Logo;
