import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export const InstructText = ({ children, style }) => {
  return <Text style={[styles.instructText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructText: {
    fontFamily: 'comic-regular',
    fontSize: 24,
    color: Colors.accent500,
  },
});
