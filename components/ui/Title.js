import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'comic-bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
