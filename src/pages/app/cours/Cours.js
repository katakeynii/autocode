import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Cours = () => {
  return (
    <View style={styles.container}>
      <Text> Bonjour dans nos cours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cours;
