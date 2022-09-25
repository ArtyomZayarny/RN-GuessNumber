import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
  },
  itemText: {
    fontFamily: 'comic-regular',
    color: Colors.accent500,
    fontSize: 18,
  },
});
