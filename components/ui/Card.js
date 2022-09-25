import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    //flex: 1,
  },
});
